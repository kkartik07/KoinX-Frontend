import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";


const Cryptos = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setCryptoData(response.data.coins);
      })
      .catch((error) => {
        console.error(error)
      });
  }, []);

  const memoizedCryptoData = useMemo(() => cryptoData, [cryptoData]);

  return (
    <div className="bg-white h-max mt-10 lg:p-14 p-8">
      <div>
        <div className="text-[#202020] text-2xl font-semibold">
          You May Also Like
        </div>

        <div className="mt-4 flex justify-between overflow-auto">
          {memoizedCryptoData.slice(0, 6).map((crypto, index) => (
            <CryptoCard key={index} cryptoData={crypto.item} id={crypto.item.id} />
          ))}
        </div>

        <div className="text-[#202021] text-2xl font-semibold mt-6">
          Trending Coins
        </div>
        <div className="mt-4 flex justify-between overflow-x">
          {memoizedCryptoData.slice(1,7).map((crypto, index) => (
            <CryptoCard key={index} cryptoData={crypto.item} id={crypto.item.id}/>
            ))}
        </div>
      </div>
    </div>
  );
}

const CryptoCard = ({ cryptoData,id }) => {
  const ids=["dexcheck","gala","gt-protocol","maga","opsec","opulous","palm-ai"];
  return (
    <div className="lg:w-[30rem] w-[30rem] rounded-2xl p-5 border-2 my-2 mr-2">
      <div className="flex items-center space-x-2">
        <img
          src={cryptoData.large}
          alt={cryptoData.name}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-[16px] font-normal">{cryptoData.name}</span>
        <span
          className={`text-${
            cryptoData.data.price_change_percentage_24h.usd > 0
              ? "green"
              : "red"
          }-500 bg-${
            cryptoData.data.price_change_percentage_24h.usd > 0
              ? "#0AB27D"
              : "#FF0000"
          }/10 text-xs font-normal pr-10`}
        >
          {cryptoData.data.price_change_percentage_24h.usd.toFixed(2)}%
        </span>
      </div>
      <div className="text-xl text-[#171717] font-medium mt-2">
        {cryptoData.data.price}
      </div>
      {ids.includes(id)?<img
        src={`images/${id}.svg`}
        alt={cryptoData && cryptoData.name ? cryptoData.name : ""}
      />:<img
      src={'images/gala.svg'}
      alt={cryptoData && cryptoData.name ? cryptoData.name : ""}
    />}
    
    </div>
  );
}

export default Cryptos;
