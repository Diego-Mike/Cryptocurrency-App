import {
  explicitData,
  DispatchTypes,
  GET_IT_ALL,
  LOADING,
  GET_IT_ALL_ERROR
} from "../actions/RKactionTypes";

interface IinitialState {
  loading: boolean;
  error: boolean;
  data?: explicitData[];
}

const initialState: IinitialState = {
  loading: false,
  error: false
};

const rankingMarket = (
  state: IinitialState = initialState,
  action: DispatchTypes
): IinitialState => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: false
      };

    case GET_IT_ALL:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };

    case GET_IT_ALL_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default rankingMarket;
