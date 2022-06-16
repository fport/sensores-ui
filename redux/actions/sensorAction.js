import axios from 'axios'
import {
    GET_SENSORS_REQUEST,
    GET_SENSORS_SUCCESS,
    GET_SENSORS_FAIL
} from '../constants/sensorConstant'

// GET SENSORS
export const getSensors = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_SENSORS_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sensors`, {}, config)

        dispatch({
            type: GET_SENSORS_SUCCESS,
            payload: data.data
        })

        localStorage.setItem('sensors', JSON.stringify(data.data))
    } catch (error) {
        dispatch({
            type: GET_SENSORS_FAIL,
            payload:
                error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}