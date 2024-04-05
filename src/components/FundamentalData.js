// FundamentalData.js
import React, { useEffect } from "react";

function FundamentalData() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "light",
        "isTransparent": true,
        "largeChartUrl": "",
        "displayMode": "adaptive",
        "width": "100%",
        "height": "100%",
        "symbol": "NASDAQ:AAPL",
        "locale": "en"
      }
    `;
    document.getElementById("fundamental-data").appendChild(script);

    return () => {
      document.getElementById("fundamental-data").removeChild(script);
    };
  }, []);

  return <section id="fundamental-data"></section>;
}

export default FundamentalData;
