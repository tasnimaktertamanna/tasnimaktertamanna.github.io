/*
 * TAMANNA — ORIGINAL TRILYVA PRISM FLOWER GALLERY
 * Loads the source library only when its section is near the viewport.
 * Original renderFrame code is executed in sandboxed, isolated iframes.
 */
(function () {
  "use strict";

  var section = document.getElementById("prism-collection");
  var grid = document.getElementById("prismLibraryGrid");
  var status = document.getElementById("prismLibraryStatus");
  var search = document.getElementById("prismLibrarySearch");
  var filters = Array.prototype.slice.call(document.querySelectorAll("[data-prism-filter]"));
  var loadMore = document.getElementById("prismLoadMore");
  if (!section || !grid || !status || !search || !loadMore) return;

  var SOURCE_COMMIT = "cf9da54ce6793fe550fadd08cf26f86c517af913";
  var SOURCE_PATH = "projects/trilyva/renderer/library/prism-library.json";
  var SOURCES = [
    "https://cdn.jsdelivr.net/gh/Tamasrazim/tamasrazim.github.io@" + SOURCE_COMMIT + "/" + SOURCE_PATH,
    "https://raw.githubusercontent.com/Tamasrazim/tamasrazim.github.io/" + SOURCE_COMMIT + "/" + SOURCE_PATH
  ];
  var FEATURED_IDS = [
    "prism-cosmos", "prism-carnation", "prism-snapdragon", "prism-lavender",
    "prism-bougainvillea", "prism-freesia", "prism-foxglove", "prism-marigold"
  ];
  var HERO_IDS = ["prism-cosmos", "prism-carnation", "prism-snapdragon"];
  var heroFrameStates = [];
  var PAGE_SIZE = 8;
  var library = null;
  var activeFilter = "flowers";
  var visibleCount = PAGE_SIZE;
  var featuredMode = true;
  var loading = false;
  var loaded = false;
  var reducedMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var frameStates = [];
  var revealObserver = "IntersectionObserver" in window ? new IntersectionObserver(onReveal, {
    root: null, rootMargin: "120px 0px", threshold: 0.08
  }) : null;

  function setStatus(message) {
    status.textContent = message;
  }

  function categoryOf(item) {
    var description = String(item.desc || "").toLowerCase();
    if (/christmas|winter/.test(description)) return "seasonal";
    if (/flower|petal|botanical/.test(description)) return "flowers";
    return "other";
  }

  function setFilter(nextFilter) {
    activeFilter = nextFilter;
    featuredMode = false;
    visibleCount = PAGE_SIZE;
    filters.forEach(function (button) {
      var selected = button.getAttribute("data-prism-filter") === activeFilter;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    renderGallery();
  }

  function getResults() {
    if (!library) return [];
    var query = search.value.trim().toLowerCase();
    var filtered = library.filter(function (item) {
      if (activeFilter !== "all" && categoryOf(item) !== activeFilter) return false;
      if (!query) return true;
      return [item.id, item.title, item.desc].join(" ").toLowerCase().indexOf(query) !== -1;
    });

    if (featuredMode && activeFilter === "flowers" && !query) {
      var byId = new Map(filtered.map(function (item) { return [item.id, item]; }));
      var featured = FEATURED_IDS.map(function (id) { return byId.get(id); }).filter(Boolean);
      var featuredSet = new Set(featured.map(function (item) { return item.id; }));
      return featured.concat(filtered.filter(function (item) { return !featuredSet.has(item.id); }));
    }
    return filtered;
  }

  function makeSandboxDocument() {
    return "<!doctype html><html><head><meta charset='utf-8'>" +
      "<meta name='viewport' content='width=device-width,initial-scale=1'>" +
      "<meta http-equiv='Content-Security-Policy' content=\"default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval'; style-src 'unsafe-inline'; img-src data: blob:; connect-src 'none'; font-src 'none'; media-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'\">" +
      "<style>html,body{margin:0;width:100%;height:100%;overflow:hidden;background:transparent}canvas{display:block;width:100%;height:100%}</style>" +
      "</head><body><canvas id='prism' width='480' height='480' aria-hidden='true'></canvas><script>" +
      "(function(){'use strict';var canvas=document.getElementById('prism'),ctx=canvas.getContext('2d',{alpha:true});" +
      "var renderer=null,motion={loopProgress:0,scale:1},running=false,started=0,lastProgress=0,failed=false;var TAU=Math.PI*2,FPS=60,DURATION=10;" +
      "function draw(progress){if(!renderer||failed)return;var p=((progress%1)+1)%1;motion.loopProgress=p;motion.scale=1;ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);try{renderer(p*DURATION,Math.floor(p*DURATION*FPS),FPS,ctx,canvas.width,canvas.height);lastProgress=p;}catch(error){failed=true;parent.postMessage({type:'prism-error',message:String(error&&error.message||error)},'*');}}" +
      "function tick(now){if(running&&renderer){var elapsed=(now-started)/1000;draw(elapsed/DURATION);}requestAnimationFrame(tick);}requestAnimationFrame(tick);" +
      "window.addEventListener('message',function(event){if(event.source!==parent||!event.data)return;var message=event.data;" +
      "if(message.type==='init'){try{var factory=new Function('motion','TAU',String(message.code)+'\\n;return renderFrame;');renderer=factory(motion,TAU);if(typeof renderer!=='function')throw new Error('renderFrame was not found.');draw(0);parent.postMessage({type:'prism-ready'},'*');if(message.staticOnly){running=false;}else if(message.play){started=performance.now();running=true;}}catch(error){failed=true;parent.postMessage({type:'prism-error',message:String(error&&error.message||error)},'*');}}" +
      "else if(message.type==='play'&&renderer&&!failed){started=performance.now()-lastProgress*DURATION*1000;running=true;}" +
      "else if(message.type==='pause'){running=false;}" +
      "else if(message.type==='static'&&renderer&&!failed){running=false;draw(0);}" +
      "});})();</scr" + "ipt></body></html>";
  }

  var sandboxDocument = makeSandboxDocument();

  function initHeroPreviews() {
    HERO_IDS.forEach(function (id) {
      var frame = document.querySelector('[data-prism-hero-id="' + id + '"]');
      var item = library && library.find(function (entry) { return entry.id === id; });
      if (!frame || !item) return;
      var state = { frame: frame, host: frame, item: item, ready: false, visible: !revealObserver, hero: true };
      heroFrameStates.push(state);
      frameStates.push(state);
      frame.addEventListener("load", function () {
        state.ready = true;
        frame.contentWindow.postMessage({
          type: "init", code: item.code,
          staticOnly: Boolean(reducedMotion && reducedMotion.matches),
          play: !(reducedMotion && reducedMotion.matches) && !document.hidden && !document.body.classList.contains("motion-paused") && state.visible
        }, "*");
      }, { once: true });
      frame.srcdoc = sandboxDocument;
      if (revealObserver) revealObserver.observe(frame);
    });
  }

  window.addEventListener("message", function (event) {
    if (!event.data || event.data.type !== "prism-ready") return;
    var state = frameStates.find(function (item) { return item.frame.contentWindow === event.source; });
    if (state) {
      state.host.classList.add("ready");
      if (state.hero && heroFrameStates.every(function (heroState) { return heroState.host.classList.contains("ready"); })) {
        var garden = document.getElementById("prismGarden");
        if (garden) garden.classList.add("prism-hero-ready");
      }
    }
  });

  function sendFrameState(state) {
    if (!state.ready || !state.frame.contentWindow) return;
    if (reducedMotion && reducedMotion.matches) {
      state.frame.contentWindow.postMessage({ type: "static" }, "*");
      return;
    }
    var paused = document.hidden || document.body.classList.contains("motion-paused") || !state.visible;
    state.frame.contentWindow.postMessage({ type: paused ? "pause" : "play" }, "*");
  }

  function onReveal(entries) {
    entries.forEach(function (entry) {
      var state = frameStates.find(function (item) { return item.host === entry.target; });
      if (!state) return;
      state.visible = entry.isIntersecting;
      var card = entry.target.closest(".prism-entry");
      if (card && entry.isIntersecting) card.classList.add("visible");
      sendFrameState(state);
    });
  }

  function makeCard(item, index) {
    var article = document.createElement("article");
    article.className = "prism-entry reveal reveal-bloom";

    var canvasHost = document.createElement("div");
    canvasHost.className = "prism-entry-canvas";
    canvasHost.setAttribute("aria-label", item.title + " animation preview");

    var iframe = document.createElement("iframe");
    iframe.className = "prism-render-frame";
    iframe.title = item.title + " original Prism animation";
    iframe.setAttribute("sandbox", "allow-scripts");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("referrerpolicy", "no-referrer");
    iframe.srcdoc = sandboxDocument;
    canvasHost.appendChild(iframe);

    var copy = document.createElement("div");
    copy.className = "prism-entry-copy";
    var meta = document.createElement("div");
    meta.className = "prism-entry-meta";
    meta.textContent = String(index + 1).padStart(2, "0") + " / ORIGINAL TRILYVA CODE";
    var title = document.createElement("h3");
    title.textContent = item.title || "Prism study";
    var description = document.createElement("p");
    description.textContent = item.desc || "Original procedural Prism animation.";
    copy.appendChild(meta);
    copy.appendChild(title);
    copy.appendChild(description);
    article.appendChild(canvasHost);
    article.appendChild(copy);

    var state = { frame: iframe, host: canvasHost, item: item, ready: false, visible: !revealObserver };
    frameStates.push(state);
    iframe.addEventListener("load", function () {
      state.ready = true;
      iframe.contentWindow.postMessage({
        type: "init", code: item.code,
        staticOnly: Boolean(reducedMotion && reducedMotion.matches),
        play: !(reducedMotion && reducedMotion.matches) && !document.hidden && !document.body.classList.contains("motion-paused") && state.visible
      }, "*");
    }, { once: true });
    if (revealObserver) revealObserver.observe(canvasHost);
    else state.visible = true;
    return article;
  }

  function renderGallery() {
    if (!library) return;
    if (revealObserver) revealObserver.disconnect();
    frameStates = heroFrameStates.slice();
    if (revealObserver) heroFrameStates.forEach(function (state) { revealObserver.observe(state.host); });
    grid.replaceChildren();
    var results = getResults();
    var shown = results.slice(0, visibleCount);
    shown.forEach(function (item, index) { grid.appendChild(makeCard(item, index)); });
    var count = results.length;
    setStatus("Showing " + shown.length + " of " + count + " matching Prism entries. " +
      "The full source contains " + library.length + " original renderFrame animations.");
    loadMore.hidden = shown.length >= count;
    loadMore.textContent = "Load 8 more blooms";
  }

  function describeLibrary() {
    var counts = { flowers: 0, seasonal: 0, other: 0 };
    library.forEach(function (item) { counts[categoryOf(item)] += 1; });
    filters.forEach(function (button) {
      var kind = button.getAttribute("data-prism-filter");
      var countNode = button.querySelector("span");
      if (countNode) countNode.textContent = kind === "all" ? String(library.length) : String(counts[kind] || 0);
    });
    return counts;
  }

  async function loadLibrary() {
    if (loading || loaded) return;
    loading = true;
    setStatus("Opening the original Prism library… the source is loaded only when you reach this section.");
    var lastError = null;
    for (var i = 0; i < SOURCES.length; i += 1) {
      try {
        var response = await fetch(SOURCES[i], { mode: "cors", credentials: "omit", cache: "force-cache" });
        if (!response.ok) throw new Error("Library request returned " + response.status);
        var parsed = await response.json();
        if (!Array.isArray(parsed)) throw new Error("The Prism source did not return an array.");
        library = parsed.filter(function (item) {
          return item && item.id !== "prism-aster" && typeof item.id === "string" &&
            typeof item.title === "string" && typeof item.code === "string" &&
            item.code.indexOf("renderFrame") !== -1;
        });
        loaded = true;
        initHeroPreviews();
        var counts = describeLibrary();
        setStatus(library.length + " original animations ready — " + counts.flowers + " botanical studies, " +
          counts.seasonal + " seasonal pieces and " + counts.other + " additional studies. Previews play only while visible.");
        renderGallery();
        return;
      } catch (error) {
        lastError = error;
      }
    }
    setStatus("The original Prism source could not be reached right now. The rest of the page still works; use the TRILYVA link below to open the source library.");
    loading = false;
    if (window.console && console.warn) console.warn("Prism library unavailable:", lastError);
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () { setFilter(button.getAttribute("data-prism-filter")); });
  });
  search.addEventListener("input", function () {
    if (!loaded) return;
    featuredMode = false;
    visibleCount = PAGE_SIZE;
    renderGallery();
  });
  loadMore.addEventListener("click", function () {
    visibleCount += PAGE_SIZE;
    renderGallery();
  });

  document.addEventListener("visibilitychange", function () {
    frameStates.forEach(sendFrameState);
  });
  if ("MutationObserver" in window && document.body) {
    new MutationObserver(function () { frameStates.forEach(sendFrameState); })
      .observe(document.body, { attributes: true, attributeFilter: ["class"] });
  }
  if (reducedMotion && typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", function () { frameStates.forEach(sendFrameState); });
  }

  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadLibrary();
          observer.disconnect();
        }
      });
    }, { rootMargin: "320px 0px" });
    sectionObserver.observe(document.getElementById("prismGarden") || section);
  } else {
    var loadButton = document.getElementById("prismLoadLibrary");
    if (loadButton) {
      loadButton.hidden = false;
      loadButton.addEventListener("click", loadLibrary);
    }
  }
})();
