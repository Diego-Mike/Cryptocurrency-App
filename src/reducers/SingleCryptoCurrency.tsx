import {
  SingleCryptoCurrency,
  DispatchSCCactions,
  LOADINGSCC,
  ERROR,
  GET_SCC
} from "../actions/SCCactionTypes";

interface Iscc {
  loading: boolean;
  error: boolean;
  data?: SingleCryptoCurrency;
}

const initialState: Iscc = {
  loading: false,
  error: false
};

const SCryptoCurrency = (
  state: Iscc = initialState,
  action: DispatchSCCactions
): Iscc => {
  switch (action.type) {
    case LOADINGSCC:
      return {
        ...state,
        loading: true,
        error: false
      };

    case ERROR:
      return {
        loading: false,
        error: true
      };

    case GET_SCC:
      return {
        loading: false,
        error: false,
        data: action.payload
      };

    default:
      return state;
  }
};

export default SCryptoCurrency;
