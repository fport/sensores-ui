import { combineReducers } from "redux";
import { createMapReducer } from "./mapReducer";
import { getSensorsReducer } from "./sensorReducer";

export default combineReducers({
    mapInfo: createMapReducer,
    sensors: getSensorsReducer,
});