// TechnicalAnalysis.js
import React, { useEffect } from "react";

function TechnicalAnalysis() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.async = true;
    script.innerHTML = `
      {
        "interval": "15m",
        "width": "100%",
        "isTransparent": true,
        "height": "100%",
        "symbol": "NASDAQ:AAPL",
        "showIntervalTabs": true,
        "displayMode": "single",
        "locale": "en",
        "colorTheme": "light"
      }
    `;
    document.getElementById("technical-analysis").appendChild(script);

    return () => {
      document.getElementById("technical-analysis").removeChild(script);
    };
  }, []);

  return <section id="technical-analysis"></section>;
}

export default TechnicalAnalysis;
