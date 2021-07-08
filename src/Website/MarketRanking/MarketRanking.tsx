import React, { useState, useEffect } from "react";

import { explicitData } from "../../actions/RKactionTypes";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { MarketWrapper } from "./MarketRakingStyled";

import { GetData } from "../../actions/RKactions";

import MarketRHeader from "../../Components/MarketRHeader/MarketRHeader";
import MarketRranking from "../../Components/MarketRranking/MarketRranking";
import Loading from "../../Components/Loading/Loading";
import { ReducerType } from "../..";
import ErrorServer from "../../Components/ErrorServer/ErrorServer";

const MarketRanking = () => {
  const dispatch = useDispatch();

  const [marketR, setMarketR] = useState<explicitData[]>([]);
  const [currentCurrency, setCurrentCurrency] = useState<string>("$");

  //  Call The Api To Show Default Data

  useEffect(() => {
    const defaultData = async (): Promise<void> => {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      setMarketR(res.data);
    };
    defaultData();
  }, []);

  //  Change Currency

  const isLoading = useSelector((state: ReducerType) => state.rankingMarket);

  const ChangeCurrency = (currency: string, symbol: string): void => {
    setCurrentCurrency(symbol);
    dispatch(GetData(currency));
  };

  return (
    <>
      {isLoading.error || marketR.length < 1 || isLoading.loading ? (
        <>
          {marketR.length < 1 || (isLoading.loading && <Loading />)}
          {isLoading.error && <ErrorServer />}
        </>
      ) : (
        <MarketWrapper>
          {/* Header */}

          <MarketRHeader
            ChangeCurrency={ChangeCurrency}
            currentCurrency={currentCurrency}
          />

          {/* Ranking Itself */}

          <MarketRranking marketR={marketR} currentCurrency={currentCurrency} />
        </MarketWrapper>
      )}
    </>
  );
};

export default MarketRanking;
