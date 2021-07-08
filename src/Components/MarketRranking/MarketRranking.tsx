import React from "react";
import { useMediaQuery } from "react-responsive";

import {
  ContainRanking,
  NamesRanking,
  CryptoCurrencyName,
  CryptoCurrencyImg,
  CryptoCurrencySymbol,
  CryptoCurrencyRanking,
  CryptoCurrencyPrice,
  CryptoCurrencyChange,
  CryptoCurrencyCap,
  CryptoCurrencySpan
} from "./MarketRrankingStyled";

import NumberFormat from "react-number-format";

import { useSelector } from "react-redux";
import { explicitData } from "../../actions/RKactionTypes";
import { ReducerType } from "../..";

interface Props {
  marketR: explicitData[];
  currentCurrency: string;
}

const MarketRranking: React.FC<Props> = ({ marketR, currentCurrency }) => {
  // React responsive

  const isNearlyMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  // Changing Currency

  const MainData = useSelector((state: ReducerType) => state.rankingMarket);

  return (
    <>
      {!isNearlyMobile ? (
        <>
          {" "}
          {/* Ranking Itself */}
          <ContainRanking>
            {/* Naming The Data */}
            <NamesRanking space={"2rem"} border={"1.5px solid white"}>
              <CryptoCurrencyName>
                <CryptoCurrencySpan size={"1.6rem"} weight={500}>
                  Name
                </CryptoCurrencySpan>
              </CryptoCurrencyName>
              <CryptoCurrencyImg></CryptoCurrencyImg>
              <CryptoCurrencySymbol>
                <CryptoCurrencySpan size={"1.6rem"} weight={500}>
                  Symbol
                </CryptoCurrencySpan>
              </CryptoCurrencySymbol>
              <CryptoCurrencyRanking>
                <CryptoCurrencySpan size={"1.6rem"} weight={500}>
                  Ranking
                </CryptoCurrencySpan>
              </CryptoCurrencyRanking>
              <CryptoCurrencyPrice>
                <CryptoCurrencySpan size={"1.6rem"} weight={500}>
                  Current Price
                </CryptoCurrencySpan>
              </CryptoCurrencyPrice>
              <CryptoCurrencyChange>
                <CryptoCurrencySpan size={"1.6rem"} weight={500}>
                  24h - Updates
                </CryptoCurrencySpan>
              </CryptoCurrencyChange>
              <CryptoCurrencyCap>
                <CryptoCurrencySpan size={"1.6rem"} weight={500}>
                  Capitalization
                </CryptoCurrencySpan>
              </CryptoCurrencyCap>
            </NamesRanking>

            {/* Mapping Data */}

            {!MainData.data ? (
              marketR.map((crypto, i) => {
                return (
                  <NamesRanking
                    space={"1.5rem"}
                    border={
                      crypto.price_change_percentage_24h
                        .toString()
                        .includes("-")
                        ? "1px solid rgb(255, 40, 40)"
                        : "1px solid rgb(75, 255, 165)"
                    }
                    key={i}
                  >
                    <CryptoCurrencyName>
                      <CryptoCurrencySpan size={"1.45rem"} weight={300}>
                        {crypto.name}
                      </CryptoCurrencySpan>
                    </CryptoCurrencyName>

                    <CryptoCurrencyImg>
                      <span>
                        <img src={crypto.image} />
                      </span>
                    </CryptoCurrencyImg>

                    <CryptoCurrencySymbol>
                      <CryptoCurrencySpan size={"1.45rem"} weight={300}>
                        {crypto.symbol}
                      </CryptoCurrencySpan>
                    </CryptoCurrencySymbol>

                    <CryptoCurrencyRanking>
                      <CryptoCurrencySpan size={"1.45rem"} weight={300}>
                        {crypto.market_cap_rank}
                      </CryptoCurrencySpan>
                    </CryptoCurrencyRanking>

                    <CryptoCurrencyPrice>
                      <CryptoCurrencySpan size={"1.45rem"} weight={300}>
                        <NumberFormat
                          value={crypto.current_price}
                          thousandSeparator={true}
                          displayType={"text"}
                          prefix={currentCurrency}
                        />
                        {/* {`${currentCurrency} ${crypto.current_price}`} */}
                      </CryptoCurrencySpan>
                    </CryptoCurrencyPrice>

                    <CryptoCurrencyChange>
                      <CryptoCurrencySpan
                        itsColor={
                          crypto.price_change_percentage_24h
                            .toString()
                            .includes("-")
                            ? "rgb(255, 40, 40)"
                            : "rgb(75, 255, 165)"
                        }
                        size={"1.45rem"}
                        weight={300}
                      >
                        % {crypto.price_change_percentage_24h}
                      </CryptoCurrencySpan>
                    </CryptoCurrencyChange>

                    <CryptoCurrencyCap>
                      <CryptoCurrencySpan size={"1.45rem"} weight={300}>
                        <NumberFormat
                          value={crypto.market_cap}
                          thousandSeparator={true}
                          displayType={"text"}
                          prefix={currentCurrency}
                        />
                      </CryptoCurrencySpan>
                    </CryptoCurrencyCap>
                  </NamesRanking>
                );
              })
            ) : (
              <>
                {MainData.data.map((crypto, i) => {
                  return (
                    <NamesRanking
                      space={"1.5rem"}
                      border={
                        crypto.price_change_percentage_24h
                          .toString()
                          .includes("-")
                          ? "1px solid rgb(255, 40, 40)"
                          : "1px solid rgb(75, 255, 165)"
                      }
                      key={i}
                    >
                      <CryptoCurrencyName>
                        <CryptoCurrencySpan size={"1.45rem"} weight={300}>
                          {crypto.name}
                        </CryptoCurrencySpan>
                      </CryptoCurrencyName>

                      <CryptoCurrencyImg>
                        <span>
                          <img src={crypto.image} />
                        </span>
                      </CryptoCurrencyImg>

                      <CryptoCurrencySymbol>
                        <CryptoCurrencySpan size={"1.45rem"} weight={300}>
                          {crypto.symbol}
                        </CryptoCurrencySpan>
                      </CryptoCurrencySymbol>

                      <CryptoCurrencyRanking>
                        <CryptoCurrencySpan size={"1.45rem"} weight={300}>
                          {crypto.market_cap_rank}
                        </CryptoCurrencySpan>
                      </CryptoCurrencyRanking>

                      <CryptoCurrencyPrice>
                        <CryptoCurrencySpan size={"1.45rem"} weight={300}>
                          <NumberFormat
                            value={crypto.current_price}
                            thousandSeparator={true}
                            displayType={"text"}
                            prefix={currentCurrency}
                          />
                        </CryptoCurrencySpan>
                      </CryptoCurrencyPrice>

                      <CryptoCurrencyChange>
                        <CryptoCurrencySpan
                          itsColor={
                            crypto.price_change_percentage_24h
                              .toString()
                              .includes("-")
                              ? "rgb(255, 40, 40)"
                              : "rgb(75, 255, 165)"
                          }
                          size={"1.45rem"}
                          weight={300}
                        >
                          % {crypto.price_change_percentage_24h}
                        </CryptoCurrencySpan>
                      </CryptoCurrencyChange>

                      <CryptoCurrencyCap>
                        <CryptoCurrencySpan size={"1.45rem"} weight={300}>
                          <NumberFormat
                            value={crypto.market_cap}
                            thousandSeparator={true}
                            displayType={"text"}
                            prefix={currentCurrency}
                          />
                        </CryptoCurrencySpan>
                      </CryptoCurrencyCap>
                    </NamesRanking>
                  );
                })}
              </>
            )}
          </ContainRanking>{" "}
        </>
      ) : (
        <>
          {" "}
          {/* Ranking Itself */}
          <ContainRanking>
            {/* Naming The Data */}
            <NamesRanking space={"2rem"} border={"1.5px solid white"}>
              <CryptoCurrencySymbol>
                <CryptoCurrencySpan size={"1.35rem"} weight={500}>
                  Sym
                </CryptoCurrencySpan>
              </CryptoCurrencySymbol>

              <CryptoCurrencyImg></CryptoCurrencyImg>

              {!isMobile ? (
                <CryptoCurrencyRanking>
                  <CryptoCurrencySpan size={"1.35rem"} weight={500}>
                    Rank
                  </CryptoCurrencySpan>
                </CryptoCurrencyRanking>
              ) : null}

              <CryptoCurrencyPrice>
                <CryptoCurrencySpan size={"1.35rem"} weight={500}>
                  Current$
                </CryptoCurrencySpan>
              </CryptoCurrencyPrice>
              <CryptoCurrencyChange>
                <CryptoCurrencySpan size={"1.35rem"} weight={500}>
                  24hUpdates
                </CryptoCurrencySpan>
              </CryptoCurrencyChange>
              <CryptoCurrencyCap>
                <CryptoCurrencySpan size={"1.35rem"} weight={500}>
                  Cap
                </CryptoCurrencySpan>
              </CryptoCurrencyCap>
            </NamesRanking>

            {/* Mapping Data */}

            {!MainData.data ? (
              marketR.map((crypto, i) => {
                return (
                  <NamesRanking
                    space={"1.5rem"}
                    border={
                      crypto.price_change_percentage_24h
                        .toString()
                        .includes("-")
                        ? "1px solid rgb(255, 40, 40)"
                        : "1px solid rgb(75, 255, 165)"
                    }
                    key={i}
                  >
                    <CryptoCurrencySymbol>
                      <CryptoCurrencySpan size={"1.2rem"} weight={300}>
                        {crypto.symbol}
                      </CryptoCurrencySpan>
                    </CryptoCurrencySymbol>

                    <CryptoCurrencyImg>
                      <span>
                        <img src={crypto.image} />
                      </span>
                    </CryptoCurrencyImg>

{!isMobile ? <CryptoCurrencyRanking>
  <CryptoCurrencySpan size={"1.2rem"} weight={300}>
    {crypto.market_cap_rank}
  </CryptoCurrencySpan>
</CryptoCurrencyRanking> : null }
                    

                    <CryptoCurrencyPrice>
                      <CryptoCurrencySpan size={"1.2rem"} weight={300}>
                        <NumberFormat
                          value={crypto.current_price}
                          thousandSeparator={true}
                          displayType={"text"}
                          prefix={currentCurrency}
                        />
                        {/* {`${currentCurrency} ${crypto.current_price}`} */}
                      </CryptoCurrencySpan>
                    </CryptoCurrencyPrice>

                    <CryptoCurrencyChange>
                      <CryptoCurrencySpan
                        itsColor={
                          crypto.price_change_percentage_24h
                            .toString()
                            .includes("-")
                            ? "rgb(255, 40, 40)"
                            : "rgb(75, 255, 165)"
                        }
                        size={"1.2rem"}
                        weight={300}
                      >
                        % {crypto.price_change_percentage_24h}
                      </CryptoCurrencySpan>
                    </CryptoCurrencyChange>

                    <CryptoCurrencyCap>
                      <CryptoCurrencySpan size={"1.2rem"} weight={300}>
                        <NumberFormat
                          value={crypto.market_cap}
                          thousandSeparator={true}
                          displayType={"text"}
                          prefix={currentCurrency}
                        />
                      </CryptoCurrencySpan>
                    </CryptoCurrencyCap>
                  </NamesRanking>
                );
              })
            ) : (
              <>
                {MainData.data.map((crypto, i) => {
                  return (
                    <NamesRanking
                      space={"1.5rem"}
                      border={
                        crypto.price_change_percentage_24h
                          .toString()
                          .includes("-")
                          ? "1px solid rgb(255, 40, 40)"
                          : "1px solid rgb(75, 255, 165)"
                      }
                      key={i}
                    >
                      <CryptoCurrencySymbol>
                        <CryptoCurrencySpan size={"1.2rem"} weight={300}>
                          {crypto.symbol}
                        </CryptoCurrencySpan>
                      </CryptoCurrencySymbol>

                      <CryptoCurrencyImg>
                        <span>
                          <img src={crypto.image} />
                        </span>
                      </CryptoCurrencyImg>

{!isMobile ? <CryptoCurrencyRanking>
  <CryptoCurrencySpan size={"1.2rem"} weight={300}>
    {crypto.market_cap_rank}
  </CryptoCurrencySpan>
</CryptoCurrencyRanking> : null }

                      

                      <CryptoCurrencyPrice>
                        <CryptoCurrencySpan size={"1.2rem"} weight={300}>
                          <NumberFormat
                            value={crypto.current_price}
                            thousandSeparator={true}
                            displayType={"text"}
                            prefix={currentCurrency}
                          />
                        </CryptoCurrencySpan>
                      </CryptoCurrencyPrice>

                      <CryptoCurrencyChange>
                        <CryptoCurrencySpan
                          itsColor={
                            crypto.price_change_percentage_24h
                              .toString()
                              .includes("-")
                              ? "rgb(255, 40, 40)"
                              : "rgb(75, 255, 165)"
                          }
                          size={"1.2rem"}
                          weight={300}
                        >
                          % {crypto.price_change_percentage_24h}
                        </CryptoCurrencySpan>
                      </CryptoCurrencyChange>

                      <CryptoCurrencyCap>
                        <CryptoCurrencySpan size={"1.2rem"} weight={300}>
                          <NumberFormat
                            value={crypto.market_cap}
                            thousandSeparator={true}
                            displayType={"text"}
                            prefix={currentCurrency}
                          />
                        </CryptoCurrencySpan>
                      </CryptoCurrencyCap>
                    </NamesRanking>
                  );
                })}
              </>
            )}
          </ContainRanking>
        </>
      )}
    </>
  );
};

export default MarketRranking;
