// AdvancedChart.js
import React, { useEffect } from "react";

function AdvancedChart() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        studies: ["STD;MACD"],
        container_id: "advanced-chart",
      });
    };
    document.getElementById("advanced-chart").appendChild(script);

    return () => {
      document.getElementById("advanced-chart").removeChild(script);
    };
  }, []);

  return <section id="advanced-chart"></section>;
}

export default AdvancedChart;
