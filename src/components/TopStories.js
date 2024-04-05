// TopStories.js
import React, { useEffect } from "react";

function TopStories() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = `
      {
        "feedMode": "symbol",
        "symbol": "NASDAQ:AAPL",
        "colorTheme": "light",
        "isTransparent": true,
        "displayMode": "regular",
        "width": "100%",
        "height": "100%",
        "locale": "en"
      }
    `;
    document.getElementById("top-stories").appendChild(script);

    return () => {
      document.getElementById("top-stories").removeChild(script);
    };
  }, []);

  return <section id="top-stories"></section>;
}

export default TopStories;
