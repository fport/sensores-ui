import axios from 'axios'
import {
    GET_SENSORS_REQUEST,
    GET_SENSORS_SUCCESS,
    GET_SENSORS_FAIL,
    ADD_SENSOR_TO_MAP_REQUEST,
    ADD_SENSOR_TO_MAP_SUCCESS,
    ADD_SENSOR_TO_MAP_FAIL
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
                "oopps"
        })
    }
}

// ADD SENSOR TO MAP
export const addSensorToMap = ({ sensorName, sensorCordX, sensorCordY, sensorFrekans, mapId }) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_SENSOR_TO_MAP_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/set-map-sensors`, {
            "map_id": `${mapId}`,
            "sensor_adi": `${sensorName}`,
            "sensor_konum": `${sensorCordX},${sensorCordY}`,
            "sensor_frekans": `${sensorFrekans}`
        }, config)


        if (data?.insertId) {
            dispatch({
                type: ADD_SENSOR_TO_MAP_SUCCESS,
                payload: data.data
            })
        }

    } catch (error) {
        dispatch({
            type: ADD_SENSOR_TO_MAP_FAIL,
            payload:
                "oopps"
        })
    }
}