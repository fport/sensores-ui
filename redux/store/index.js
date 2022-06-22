import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../reducer";

// initial states here
let initalState = {};

// middleware
const middleware = [thunk];


/* 
    If he has logged into localstorage before, we add it to localstorage and
    When the user returns to the application again, we take this data and
    reveal its initial state.
*/
if (typeof window !== 'undefined') {
    // Perform localStorage action
    const mapInfoFromStorage = localStorage.getItem('mapInfo')
        ? JSON.parse(localStorage.getItem('mapInfo'))
        : null

    const sensorsFromStorage = localStorage.getItem('sensors')
        ? JSON.parse(localStorage.getItem('sensors'))
        : null

    const resultFromStorage = localStorage.getItem('result')
        ? JSON.parse(localStorage.getItem('result'))
        : null

    const convertedResultFromStorage = resultFromStorage
        && resultFromStorage.result
        && Object.keys(resultFromStorage.result).map(key => resultFromStorage.result[key]);
    console.log('resultFromStorage', convertedResultFromStorage);

    initalState = {
        mapInfo: { mapInfo: mapInfoFromStorage },
        sensors: { sensors: sensorsFromStorage },
        result: { result: convertedResultFromStorage },
    }
}

// creating store
export const store = createStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);