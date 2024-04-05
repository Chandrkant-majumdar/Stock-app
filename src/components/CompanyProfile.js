// CompanyProfile.js
import React, { useEffect } from "react";

function CompanyProfile() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "colorTheme": "light",
        "isTransparent": true,
        "symbol": "NASDAQ:AAPL",
        "locale": "en"
      }
    `;
    document.getElementById("company-profile").appendChild(script);

    return () => {
      document.getElementById("company-profile").removeChild(script);
    };
  }, []);

  return <section id="company-profile"></section>;
}

export default CompanyProfile;
