// Main.js
import React from "react";
import SymbolInfo from "./SymbolInfo";
import AdvancedChart from "./AdvancedChart";
import CompanyProfile from "./CompanyProfile";
import FundamentalData from "./FundamentalData";
import TechnicalAnalysis from "./TechnicalAnalysis";
import TopStories from "./TopStories";
import PoweredByTV from "./PoweredByTV";

function Main() {
  return (
    <main>
      <SymbolInfo />
      <AdvancedChart />
      <CompanyProfile />
      <FundamentalData />
      <TechnicalAnalysis />
      <TopStories />
      <PoweredByTV />
    </main>
  );
}

export default Main;
