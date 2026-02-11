(() => {
  // Detect base path: root pages use "assets/...", subpages use "../assets/..."
  const isSubpage = location.pathname.split("/").filter(Boolean).length > 1;
  const base = isSubpage ? "../assets" : "assets";

  const VERSION = "1"; // <-- Меняешь только это число, когда надо пробить кэш

  // Load CSS
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = `${base}/css/base.css?v=${VERSION}`;
  document.head.appendChild(css);

  // Load Manrope (Google Fonts)
  const pre1 = document.createElement("link");
  pre1.rel = "preconnect";
  pre1.href = "https://fonts.googleapis.com";
  document.head.appendChild(pre1);

  const pre2 = document.createElement("link");
  pre2.rel = "preconnect";
  pre2.href = "https://fonts.gstatic.com";
  pre2.crossOrigin = "anonymous";
  document.head.appendChild(pre2);

  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap&v=${VERSION}`;
  document.head.appendChild(font);

  // Active nav highlight
  const normalize = (p) => p.replace(/\/$/, "");
  const current = normalize(location.pathname);

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav a").forEach(a => {
      const href = a.getAttribute("href");
      if (!href) return;
      const target = normalize(new URL(href, location.href).pathname);
      if (target === current) a.classList.add("active");
    });
  });
})();
;

