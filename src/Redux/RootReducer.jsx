import { combineReducers } from "redux";
import studentReducer from "./StudentReducer";

const RootReducer = combineReducers({
  data: studentReducer,
});

export default RootReducer;
