import { combineReducers } from "redux";
import { itemReducer } from "./itemreducer";

export default combineReducers({ itemList: itemReducer });
