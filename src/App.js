import React from "react";
import About from "./components/About";
import CardsPromo from "./components/CardsPromo";
import Chart from "./components/Chart";
import Performance from "./components/Performance";
import Sentiments from "./components/Sentiments";
import Toggler from "./components/Toggler";
import Tokenomics from "./components/Tokenomics";
import Trending from "./components/Trending";
import Team from "./components/Team";
import Cryptos from "./components/Cryptos";
import Location from "./components/Location";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-full w-full bg-slate-200/40">
      <Navbar/>
      <Location />
      <div className="w-full lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
          <Chart />
          <Toggler />
          <Performance />
          <Sentiments />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div className="lg:w-4/12 lg:mr-14 mx-2">
          <CardsPromo />
          <Trending />
        </div>
      </div>
      <Cryptos />
    </div>
  );
}

export default App;
