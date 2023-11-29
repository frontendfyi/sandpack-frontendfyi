(function () {
  try {
    setTimeout(function(){
      var tailwindStyle = document.getElementById("/src/index.css:-css");
      if (taildwindStyle) {
        tailwindStyle.setAttribute("type", "text/tailwind");
      }
    
      var script = document.createElement("script");
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }, 200);
  } catch {}
})();
