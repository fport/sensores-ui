import { combineReducers } from "redux";
import { createMapReducer } from "./mapReducer";

export default combineReducers({
    mapInfo: createMapReducer,
});