(function () {
  "use strict";

  var root = document.documentElement;
  var themeToggle = document.getElementById("themeToggle");
  var menuToggle = document.getElementById("menuToggle");
  var mainNav = document.getElementById("mainNav");
  var prismGarden = document.getElementById("prismGarden");
  var prismPause = document.getElementById("prismPause");
  var scrollProgress = document.getElementById("scrollProgress");
  var year = document.getElementById("year");
  var themeColor = document.querySelector('meta[name="theme-color"]');
  var reducedMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

  function setTheme(theme, persist) {
    var selected = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", selected);
    if (themeColor) themeColor.setAttribute("content", selected === "dark" ? "#171522" : "#fbf8f3");
    if (themeToggle) {
      var nextAction = selected === "dark" ? "Switch to light theme" : "Switch to dark theme";
      themeToggle.setAttribute("aria-label", nextAction);
      themeToggle.setAttribute("title", nextAction);
    }
    if (persist) {
      try { window.localStorage.setItem("tamanna-theme", selected); }
      catch (error) { /* Theme remains active for this visit when storage is blocked. */ }
    }
  }

  var initialTheme = root.getAttribute("data-theme") || "light";
  setTheme(initialTheme, false);
  root.classList.add("theme-ready");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark", true);
    });
  }

  function closeMenu(returnFocus) {
    if (!menuToggle || !mainNav) return;
    var wasOpen = menuToggle.getAttribute("aria-expanded") === "true";
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    if (returnFocus && wasOpen) menuToggle.focus();
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      var opening = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(opening));
      menuToggle.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
      mainNav.classList.toggle("open", opening);
      if (opening) {
        var firstLink = mainNav.querySelector("a");
        if (firstLink) firstLink.focus({ preventScroll: true });
      }
    });
    root.classList.add("nav-enhanced");
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { closeMenu(true); });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu(true);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeMenu(false);
    }, { passive: true });
  }

  if (year) year.textContent = String(new Date().getFullYear());

  /* Keep the progress indicator smooth without doing layout work on every scroll event. */
  function updateProgress() {
    if (!scrollProgress) return;
    var rootScroller = document.documentElement;
    var maximum = Math.max(1, rootScroller.scrollHeight - window.innerHeight);
    var ratio = Math.min(1, Math.max(0, window.scrollY / maximum));
    scrollProgress.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
  }
  if (scrollProgress) {
    updateProgress();
    var progressQueued = false;
    window.addEventListener("scroll", function () {
      if (progressQueued) return;
      progressQueued = true;
      window.requestAnimationFrame(function () {
        updateProgress();
        progressQueued = false;
      });
    }, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    window.addEventListener("load", updateProgress, { once: true });
  }

  /* The observer is progressive enhancement: without it, all content stays visible. */
  var revealItems = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  function revealEverything() {
    root.classList.remove("motion-ready");
    revealItems.forEach(function (item) { item.classList.add("visible"); });
  }

  if (reducedMotion && reducedMotion.matches) {
    revealEverything();
    if (prismPause) prismPause.hidden = true;
  } else if ("IntersectionObserver" in window) {
    root.classList.add("motion-ready");
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -28px 0px" });
    revealItems.forEach(function (item) { revealObserver.observe(item); });
  } else {
    revealEverything();
  }

  if (reducedMotion && typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", function (event) {
      if (event.matches) {
        revealEverything();
        if (prismPause) prismPause.hidden = true;
      } else if (prismPause) {
        prismPause.hidden = false;
      }
    });
  }

  /* One control pauses all continuous decorative animations; scroll reveals stay usable. */
  if (prismGarden && prismPause) {
    prismPause.hidden = Boolean(reducedMotion && reducedMotion.matches);
    prismPause.addEventListener("click", function () {
      var paused = document.body.classList.toggle("motion-paused");
      prismPause.textContent = paused ? "Resume motion" : "Pause motion";
      prismPause.setAttribute("aria-label", paused ? "Resume decorative motion" : "Pause decorative motion");
      prismPause.setAttribute("aria-pressed", String(paused));
    });
    if (reducedMotion && typeof reducedMotion.addEventListener === "function") {
      reducedMotion.addEventListener("change", function (event) {
        prismPause.hidden = event.matches;
        if (event.matches) {
          document.body.classList.remove("motion-paused");
          prismPause.textContent = "Pause motion";
          prismPause.setAttribute("aria-label", "Pause decorative motion");
          prismPause.setAttribute("aria-pressed", "false");
        }
      });
    }
  }
})();
