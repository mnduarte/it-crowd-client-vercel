import { combineReducers } from "redux";
import userReducer from "./User/reducer";
import gameReducer from "./Game/reducer";

export default combineReducers({
  userReducer,
  gameReducer,
});
