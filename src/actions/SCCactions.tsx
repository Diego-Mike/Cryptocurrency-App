import axios from "axios";
import { Dispatch } from "redux";

import {
  DispatchSCCactions,
  LOADINGSCC,
  ERROR,
  GET_SCC
} from "./SCCactionTypes";

export const GetSCC = (cryptoc: string) => async (
  dispatch: Dispatch<DispatchSCCactions>
): Promise<void> => {
  try {
    dispatch({ type: LOADINGSCC });

    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${cryptoc}`
    );

    dispatch({ type: GET_SCC, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
