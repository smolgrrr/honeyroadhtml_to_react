import React, { useEffect } from "react";

function useCDN() {
  function cleanLoaded() {
    const loadElement = document.getElementById("scriptLoad");
    loadElement.innerHTML = "";
  }
  function loader(link) {
    const loadElement = document.getElementById("scriptLoad");
    const script = document.createElement("script");
    script.src = link;
    loadElement.appendChild(script);
  }
  useEffect(() => {
    cleanLoaded();
    loader("https://kit.fontawesome.com/090ca49637.js");
  }, []);

  return null;
}

export default useCDN;
