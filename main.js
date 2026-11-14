(function () {
  "use strict";
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");
  var menuButton = document.getElementById("menuToggle");
  var nav = document.getElementById("mainNav");
  var year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  var savedTheme = null;
  try { savedTheme = window.localStorage.getItem("tasnim-theme"); } catch (error) { /* Storage may be unavailable. */ }
  if (savedTheme === "dark" || savedTheme === "light") root.setAttribute("data-theme", savedTheme);

  function syncThemeLabel() {
    if (!toggle) return;
    var dark = root.getAttribute("data-theme") === "dark";
    toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    toggle.setAttribute("title", dark ? "Switch to light theme" : "Switch to dark theme");
  }
  syncThemeLabel();
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { window.localStorage.setItem("tasnim-theme", next); } catch (error) { /* Theme still works for this visit. */ }
      syncThemeLabel();
    });
  }

  function closeMenu() {
    if (!menuButton || !nav) return;
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }
  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      nav.classList.toggle("open", !open);
    });
    nav.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (event) { if (event.key === "Escape") closeMenu(); });
  }

  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -25px 0px" });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("visible"); });
  }
})();
