import React from "react";
import Header from "./components/Header";
import TickerTape from "./components/TickerTape";
import Main from "./components/Main";
import Footer from "./components/Footer";
import TradingViewWidgets from "./components/TradingViewWidget";

function App() {
  return (
    <div>
      <Header />
      <TickerTape />
      <Main />
      {/* <TradingViewWidgets /> */}
      <Footer />
    </div>
  );
}

export default App;
