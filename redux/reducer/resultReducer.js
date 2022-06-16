import {
    GET_RESULT_REQUEST,
    GET_RESULT_SUCCESS,
    GET_RESULT_FAIL,
} from '../constants/resultConstant'

export const getResultReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_RESULT_REQUEST:
            return { loading: true }
        case GET_RESULT_SUCCESS:
            return { loading: false, result: action.payload }
        case GET_RESULT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}