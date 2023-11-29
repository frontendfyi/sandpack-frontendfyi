(function () {
  try {
    var tailwindStyle = document.getElementById("/src/index.css:-css");
    if (tailwindStyle) {
      tailwindStyle.setAttribute("type", "text/tailwind");
    }

    var script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);
  } catch {}
})();
