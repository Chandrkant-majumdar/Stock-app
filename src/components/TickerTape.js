import { useEffect } from "react";

function TickerTape() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const tickerTapeWidget = document.createElement("div");
    tickerTapeWidget.className = "tradingview-widget-container";
    document.getElementById("ticker-tape").appendChild(tickerTapeWidget);

    const tickerTapeScript = document.createElement("script");
    tickerTapeScript.type = "text/javascript";
    tickerTapeScript.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    tickerTapeScript.async = true;
    tickerTapeScript.innerHTML = `
      {
        "symbols": [
          {"description":"","proName":"NASDAQ:TSLA"},
          {"description":"","proName":"NASDAQ:AAPL"},
          {"description":"","proName":"NASDAQ:NVDA"},
          {"description":"","proName":"NASDAQ:MSFT"},
          {"description":"","proName":"NASDAQ:AMZN"},
          {"description":"","proName":"NASDAQ:GOOGL"},
          {"description":"","proName":"NASDAQ:META"},
          {"description":"","proName":"NYSE:BRK.B"},
          {"description":"","proName":"NYSE:LLY"},
          {"description":"","proName":"NYSE:UNH"},
          {"description":"","proName":"NYSE:V"},
          {"description":"","proName":"NYSE:WMT"}
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "en",
        "largeChartUrl": "#"
      }
    `;
    tickerTapeWidget.appendChild(tickerTapeScript);

    return () => {
      document.getElementById("ticker-tape").removeChild(tickerTapeWidget);
    };
  }, []);

  return <nav id="ticker-tape"></nav>;
}

export default TickerTape;
