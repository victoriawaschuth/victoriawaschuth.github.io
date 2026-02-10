(() => {
  const normalize = (p) => p.replace(/\/$/, "");

  const current = normalize(location.pathname);

  document.querySelectorAll(".nav a").forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;

    // Resolve relative links to absolute path for comparison
    const target = normalize(new URL(href, location.href).pathname);
    if (target === current) a.classList.add("active");
  });
})();

