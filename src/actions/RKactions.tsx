import { Dispatch } from "redux";
import {
  DispatchTypes,
  GET_IT_ALL,
  GET_IT_ALL_ERROR,
  LOADING
} from "./RKactionTypes";
import axios from "axios";

export const GetData = (theUrl: string) => async (
  dispatch: Dispatch<DispatchTypes>
): Promise<void> => {
  try {
    dispatch({ type: LOADING });

    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${theUrl}&order=market_cap_desc&per_page=100&page=1&sparkline=false
    `);

    dispatch({ type: GET_IT_ALL, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_IT_ALL_ERROR });
  }
};
