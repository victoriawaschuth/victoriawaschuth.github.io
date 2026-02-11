(() => {
  const VERSION = "2";

  // CSS
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = `/assets/css/base.css?v=${VERSION}`;
  document.head.appendChild(css);

  // Google font
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
