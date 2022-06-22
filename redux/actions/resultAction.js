import axios from 'axios'
import {
    GET_RESULT_REQUEST,
    GET_RESULT_SUCCESS,
    GET_RESULT_FAIL,
} from '../constants/resultConstant'

// GET RESULT
export const getResult = ({ mapId }) => async (dispatch) => {
    try {
        dispatch({
            type: GET_RESULT_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/map-sensors/${mapId}`, {}, config)

        dispatch({
            type: GET_RESULT_SUCCESS,
            payload: data.data
        })

        localStorage.setItem('result', JSON.stringify({
            'result': { ...data?.data }
        }))

    } catch (error) {
        dispatch({
            type: GET_RESULT_FAIL,
            payload:
                "oopps"
        })
    }
}