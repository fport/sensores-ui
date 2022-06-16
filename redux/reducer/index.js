import { combineReducers } from "redux";
import { createMapReducer } from "./mapReducer";
import { getSensorsReducer } from "./sensorReducer";
import { getResultReducer } from "./resultReducer";

export default combineReducers({
    mapInfo: createMapReducer,
    sensors: getSensorsReducer,
    result: getResultReducer
});