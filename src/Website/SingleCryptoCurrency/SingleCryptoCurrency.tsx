import React, { useState } from "react";
import SCCheader from "../../Components/SCCheader/SCCheader";
import SCCcoin from "../../Components/SCCcoin/SCCcoin";

import { ReducerType } from "../..";
import { useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import ErrorServer from "../../Components/ErrorServer/ErrorServer";
import { MarketWrapper } from "../MarketRanking/MarketRakingStyled";

export interface Isearch {
  coin: string;
  currency: string;
}

const SingleCryptoCurrency = () => {
  const [search, setSearch] = useState<Isearch>({
    coin: "",
    currency: ""
  });

  const isLoadingSCC = useSelector(
    (state: ReducerType) => state.SCryptoCurrency
  );

  return (
    <>
      {isLoadingSCC.loading || isLoadingSCC.error ? (
        <>
          {isLoadingSCC.loading && <Loading />}
          {isLoadingSCC.error && <ErrorServer />}
        </>
      ) : (
        <MarketWrapper style={{ background: "rgb(255,255,255, 0.98)" }}>
          {/* Header */}
          <SCCheader search={search} setSearch={setSearch} />
          {/* Data */}
          <SCCcoin search={search} />
        </MarketWrapper>
      )}
    </>
  );
};

export default SingleCryptoCurrency;
