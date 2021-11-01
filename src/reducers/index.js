import sendMessage from "./message";
import { combineReducers } from "redux";

const reducers = combineReducers({
  message: sendMessage,
});

export default reducers;
