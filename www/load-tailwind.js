(function () {
  var cssId = "/src/index.css:-css";
  function activateTailwind() {
    var tailwindStyle = document.getElementById(cssId);
    if (tailwindStyle) {
      console.log("updating tailwind css type");
      tailwindStyle.setAttribute("type", "text/tailwindcss");
    }

    // delete old tailwind
    var oldTailwind = document.getElementById("tailwindcss-script");
    if (oldTailwind) {
      console.log("deleting old tailwind");
      oldTailwind.remove();
    }

    console.log("loading tailwind script");
    var script = document.createElement("script");
    script.id = "tailwindcss-script";
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);
  }

  try {
    var config = { attributes: true, childList: true, subtree: true };

    function callback(mutationList, observer) {
      var tailwindStyle = document.getElementById(cssId);
      console.log("head change");
      if (tailwindStyle && tailwindStyle.getAttribute("type") === "text/css") {
        console.log("tailwind not activated");
        activateTailwind();
      }
    }

    var observer = new MutationObserver(callback);
    observer.observe(document.head, config);
  } catch {}
})();
