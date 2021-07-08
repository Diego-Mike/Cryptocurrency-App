import React from "react";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";
import { useMediaQuery } from "react-responsive";

import { Isearch } from "../../Website/SingleCryptoCurrency/SingleCryptoCurrency";
import { ReducerType } from "../../index";
import {
  ContainRanking,
  NamesRanking,
  CryptoCurrencyName,
  CryptoCurrencySpan,
  CryptoCurrencyImg,
  CryptoCurrencySymbol,
  CryptoCurrencyRanking,
  CryptoCurrencyPrice,
  CryptoCurrencyChange,
  CryptoCurrencyCap
} from "../MarketRranking/MarketRrankingStyled";

interface IProps {
  search: Isearch;
}

const SCCcoin: React.FC<IProps> = ({ search }) => {


  // React responsive

  const isNearlyMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  // 

  const singlecoin = useSelector((state: ReducerType) => state.SCryptoCurrency);

  return (
    <>
    {!isNearlyMobile ? <>   {/* Ranking Itself */}
      <ContainRanking>
        {/* Naming The Data */}
        <NamesRanking space={"2rem"} border={"1.5px solid rgba(30,30,30)"}>
          <CryptoCurrencyName>
            <CryptoCurrencySpan
              itsColor="rgba(35,35,35)"
              size={"1.6rem"}
              weight={500}
            >
              Name
            </CryptoCurrencySpan>
          </CryptoCurrencyName>
          <CryptoCurrencyImg></CryptoCurrencyImg>
          <CryptoCurrencySymbol>
            <CryptoCurrencySpan
              itsColor="rgba(35,35,35)"
              size={"1.6rem"}
              weight={500}
            >
              Symbol
            </CryptoCurrencySpan>
          </CryptoCurrencySymbol>
          <CryptoCurrencyRanking>
            <CryptoCurrencySpan
              itsColor="rgba(35,35,35)"
              size={"1.6rem"}
              weight={500}
            >
              Ranking
            </CryptoCurrencySpan>
          </CryptoCurrencyRanking>
          <CryptoCurrencyPrice>
            <CryptoCurrencySpan
              itsColor="rgba(35,35,35)"
              size={"1.6rem"}
              weight={500}
            >
              Current Price
            </CryptoCurrencySpan>
          </CryptoCurrencyPrice>
          <CryptoCurrencyChange>
            <CryptoCurrencySpan
              itsColor="rgba(35,35,35)"
              size={"1.6rem"}
              weight={500}
            >
              24h - Updates
            </CryptoCurrencySpan>
          </CryptoCurrencyChange>
          <CryptoCurrencyCap>
            <CryptoCurrencySpan
              itsColor="rgba(35,35,35)"
              size={"1.6rem"}
              weight={500}
            >
              Capitalization
            </CryptoCurrencySpan>
          </CryptoCurrencyCap>
        </NamesRanking>

        {/* Data */}

        {singlecoin.data !== undefined && (
          <NamesRanking
            space={"1.5rem"}
            border={
              singlecoin.data.market_data.price_change_percentage_24h
                .toString()
                .includes("-")
                ? "2px solid rgb(255, 40, 40)"
                : "2px solid rgb(75, 255, 165)"
            }
          >
            <CryptoCurrencyName>
              <CryptoCurrencySpan
                itsColor="rgba(35,35,35)"
                size={"1.45rem"}
                weight={400}
              >
                {singlecoin.data.name}
              </CryptoCurrencySpan>
            </CryptoCurrencyName>

            <CryptoCurrencyImg>
              <span>
                <img src={singlecoin.data.image.thumb} />
              </span>
            </CryptoCurrencyImg>

            <CryptoCurrencySymbol>
              <CryptoCurrencySpan
                itsColor="rgba(35,35,35)"
                size={"1.45rem"}
                weight={400}
              >
                {singlecoin.data.symbol}
              </CryptoCurrencySpan>
            </CryptoCurrencySymbol>

            <CryptoCurrencyRanking>
              <CryptoCurrencySpan
                itsColor="rgba(35,35,35)"
                size={"1.45rem"}
                weight={400}
              >
                {singlecoin.data.market_cap_rank}
              </CryptoCurrencySpan>
            </CryptoCurrencyRanking>

            <CryptoCurrencyPrice>
              <CryptoCurrencySpan
                itsColor="rgba(35,35,35)"
                size={"1.45rem"}
                weight={400}
              >
                {search.currency === "US$" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.current_price.usd}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "€" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.current_price.eur}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "¥" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.current_price.jpy}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "£" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.current_price.gbp}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
              </CryptoCurrencySpan>
            </CryptoCurrencyPrice>

            <CryptoCurrencyChange>
              <CryptoCurrencySpan
                itsColor={
                  singlecoin.data.market_data.price_change_percentage_24h
                    .toString()
                    .includes("-")
                    ? "rgb(255, 40, 40)"
                    : "rgb(0, 255, 128)"
                }
                size={"1.45rem"}
                weight={500}
              >
                % {singlecoin.data.market_data.price_change_percentage_24h}
              </CryptoCurrencySpan>
            </CryptoCurrencyChange>

            <CryptoCurrencyCap>
              <CryptoCurrencySpan
                itsColor="rgba(35,35,35)"
                size={"1.45rem"}
                weight={400}
              >
                {search.currency === "US$" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.market_cap.usd}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "€" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.market_cap.eur}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "¥" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.market_cap.jpy}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "£" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.market_cap.gbp}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
              </CryptoCurrencySpan>
            </CryptoCurrencyCap>
          </NamesRanking>
        )}
      </ContainRanking> </> : <>   {/* Ranking Itself */}
      <ContainRanking>
        {/* Naming The Data */}
        <NamesRanking space={"2rem"} border={"1.5px solid rgba(30,30,30)"}>
          
        <CryptoCurrencySymbol>
            <CryptoCurrencySpan
              itsColor="rgba(35,35,35)"
              size={"1.35rem"}
              weight={500}
            >
              Sym
            </CryptoCurrencySpan>
          </CryptoCurrencySymbol>

          <CryptoCurrencyImg></CryptoCurrencyImg>
          
     {!isMobile ? <CryptoCurrencyRanking>
            <CryptoCurrencySpan
              itsColor="rgba(35,35,35)"
              size={"1.35rem"}
              weight={500}
            >
              Rank
            </CryptoCurrencySpan>
          </CryptoCurrencyRanking> : null }     

          <CryptoCurrencyPrice>
            <CryptoCurrencySpan
              itsColor="rgba(35,35,35)"
              size={"1.35rem"}
              weight={500}
            >
              Current$
            </CryptoCurrencySpan>
          </CryptoCurrencyPrice>
          <CryptoCurrencyChange>
            <CryptoCurrencySpan
              itsColor="rgba(35,35,35)"
              size={"1.35rem"}
              weight={500}
            >
              24hUpdates
            </CryptoCurrencySpan>
          </CryptoCurrencyChange>
          <CryptoCurrencyCap>
            <CryptoCurrencySpan
              itsColor="rgba(35,35,35)"
              size={"1.35rem"}
              weight={500}
            >
              Cap
            </CryptoCurrencySpan>
          </CryptoCurrencyCap>
        </NamesRanking>

        {/* Data */}

        {singlecoin.data !== undefined && (
          <NamesRanking
            space={"1.5rem"}
            border={
              singlecoin.data.market_data.price_change_percentage_24h
                .toString()
                .includes("-")
                ? "2px solid rgb(255, 40, 40)"
                : "2px solid rgb(75, 255, 165)"
            }
          >
            
            <CryptoCurrencySymbol>
              <CryptoCurrencySpan
                itsColor="rgba(35,35,35)"
                size={"1.2rem"}
                weight={400}
              >
                {singlecoin.data.symbol}
              </CryptoCurrencySpan>
            </CryptoCurrencySymbol>

            <CryptoCurrencyImg>
              <span>
                <img src={singlecoin.data.image.thumb} />
              </span>
            </CryptoCurrencyImg>

           
          {!isMobile ? <CryptoCurrencyRanking>
              <CryptoCurrencySpan
                itsColor="rgba(35,35,35)"
                size={"1.2rem"}
                weight={400}
              >
                {singlecoin.data.market_cap_rank}
              </CryptoCurrencySpan>
            </CryptoCurrencyRanking> : null }  

            <CryptoCurrencyPrice>
              <CryptoCurrencySpan
                itsColor="rgba(35,35,35)"
                size={"1.2rem"}
                weight={400}
              >
                {search.currency === "US$" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.current_price.usd}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "€" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.current_price.eur}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "¥" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.current_price.jpy}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "£" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.current_price.gbp}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
              </CryptoCurrencySpan>
            </CryptoCurrencyPrice>

            <CryptoCurrencyChange>
              <CryptoCurrencySpan
                itsColor={
                  singlecoin.data.market_data.price_change_percentage_24h
                    .toString()
                    .includes("-")
                    ? "rgb(255, 40, 40)"
                    : "rgb(0, 255, 128)"
                }
                size={"1.2rem"}
                weight={500}
              >
                % {singlecoin.data.market_data.price_change_percentage_24h}
              </CryptoCurrencySpan>
            </CryptoCurrencyChange>

            <CryptoCurrencyCap>
              <CryptoCurrencySpan
                itsColor="rgba(35,35,35)"
                size={"1.2rem"}
                weight={400}
              >
                {search.currency === "US$" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.market_cap.usd}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "€" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.market_cap.eur}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "¥" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.market_cap.jpy}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
                {search.currency === "£" && (
                  <NumberFormat
                    value={singlecoin.data.market_data.market_cap.gbp}
                    thousandSeparator={true}
                    displayType={"text"}
                    prefix={search.currency}
                  />
                )}
              </CryptoCurrencySpan>
            </CryptoCurrencyCap>
          </NamesRanking>
        )}
      </ContainRanking> </> }
    
    </>
  );
};

export default SCCcoin;
