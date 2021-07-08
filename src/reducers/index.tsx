import { combineReducers } from "redux";
import rankingMarket from "./RankingMarket";
import SCryptoCurrency from "./SingleCryptoCurrency";

const Reducers = combineReducers({ rankingMarket, SCryptoCurrency });

export default Reducers;
