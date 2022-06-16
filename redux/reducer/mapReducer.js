import {
    MAP_CREATE_REQUEST,
    MAP_CREATE_SUCCESS,
    MAP_CREATE_FAIL,
    MAP_CLEAR_REQUEST,
    MAP_CLEAR_SUCCESS,
    MAP_CLEAR_FAIL,
} from '../constants/mapConstant'

export const createMapReducer = (state = {}, action) => {
    switch (action.type) {
        case MAP_CREATE_REQUEST:
            return { loading: true }
        case MAP_CREATE_SUCCESS:
            return { loading: false, mapId: action.payload }
        case MAP_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case MAP_CLEAR_REQUEST:
            return { loading: true }
        case MAP_CLEAR_SUCCESS:
            return { loading: false, mapId: action.payload }
        case MAP_CLEAR_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}