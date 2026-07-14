import {combineReducers} from "redux";
import libraryReducer from "./libraryReducer";

const rootReducer = combineReducers({
  songs: libraryReducer,
});

export default rootReducer;