export const LOADINGSCC = "LOADINGSCC";
export const ERROR = "ERROR";
export const GET_SCC = "GET_SCC";

// Expected Data

type image = {
  thumb: string;
  large: string;
};

type market_data = {
  current_price: {
    usd: number;
    eur: number;
    jpy: number;
    gbp: number;
  };

  price_change_percentage_24h: number | string;

  market_cap: {
    usd: number;
    eur: number;
    jpy: number;
    gbp: number;
  };
};

export type SingleCryptoCurrency = {
  name: string;
  image: image;
  symbol: string;
  market_cap_rank: number;
  market_data: market_data;
  description: {
    en: string;
  };
};

// Types of dispatch

interface Iloading {
  type: typeof LOADINGSCC;
}

interface Ierror {
  type: typeof ERROR;
}

interface IgetScc {
  type: typeof GET_SCC;
  payload: SingleCryptoCurrency;
}

// Types of actions

export type DispatchSCCactions = Iloading | Ierror | IgetScc;
