// SymbolInfo.js
import React, { useEffect } from "react";

function SymbolInfo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.async = true;
    script.innerHTML = `
      {
        "symbol": "NASDAQ:AAPL",
        "width": "100%",
        "locale": "en",
        "colorTheme": "light",
        "isTransparent": true
      }
    `;
    document.getElementById("symbol-info").appendChild(script);

    return () => {
      document.getElementById("symbol-info").removeChild(script);
    };
  }, []);

  return <section id="symbol-info"></section>;
}

export default SymbolInfo;
