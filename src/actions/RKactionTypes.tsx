export const LOADING = "LOADING";
export const GET_IT_ALL = "GET_IT_ALL";
export const GET_IT_ALL_ERROR = "GET_IT_ALL_ERROR";

// Payload

export type explicitData = {
  name: string;
  symbol: string;
  image: string;
  market_cap_rank: number;
  current_price: number;
  price_change_percentage_24h: number | string;
  market_cap: number;
};

// Defininf Dispatch Types

interface ILoading {
  type: typeof LOADING;
}

interface IGetItAll {
  type: typeof GET_IT_ALL;
  payload: explicitData[];
}

interface IGetItAllError {
  type: typeof GET_IT_ALL_ERROR;
}

// Dispatch

export type DispatchTypes = ILoading | IGetItAll | IGetItAllError;
