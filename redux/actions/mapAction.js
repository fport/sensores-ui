import axios from 'axios'
import {
    MAP_CREATE_REQUEST,
    MAP_CREATE_SUCCESS,
    MAP_CREATE_FAIL,
    MAP_CLEAR_REQUEST,
    MAP_CLEAR_SUCCESS,
    MAP_CLEAR_FAIL,
} from '../constants/mapConstant'

// REGISTER
export const createMap = ({ cordX, cordY, radius }) => async (dispatch) => {
    try {
        dispatch({
            type: MAP_CREATE_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/set-map`, {
            'cords': `${cordX},${cordY}`,
            'rads': `${radius}`
        }, config)

        dispatch({
            type: MAP_CREATE_SUCCESS,
            payload: data.data.insertId
        })

        localStorage.setItem('mapInfo', JSON.stringify({
            'mapId': data.data.insertId
        }))
    } catch (error) {
        dispatch({
            type: MAP_CREATE_FAIL,
            payload:
                "oopps"
        })
    }
}
// CLEAR MAP ID
export const clearMapId = () => async (dispatch) => {
    try {
        dispatch({
            type: MAP_CLEAR_REQUEST
        })

        localStorage.clear()

        dispatch({
            type: MAP_CLEAR_SUCCESS,
            payload: null
        })
    } catch (error) {
        dispatch({
            type: MAP_CLEAR_FAIL,
            payload:
                'Oppps... Not clear map id'
        })
    }
}