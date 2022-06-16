import {
    GET_SENSORS_REQUEST,
    GET_SENSORS_SUCCESS,
    GET_SENSORS_FAIL
} from '../constants/sensorConstant'

export const getSensorsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SENSORS_REQUEST:
            return { loading: true }
        case GET_SENSORS_SUCCESS:
            return { loading: false, sensors: action.payload }
        case GET_SENSORS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}