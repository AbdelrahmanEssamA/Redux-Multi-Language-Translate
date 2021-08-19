import { combineReducers } from "redux";
import langReducer from "./langReducer";

const rootReducers = combineReducers({
  lang: langReducer,
});

export default rootReducers;
