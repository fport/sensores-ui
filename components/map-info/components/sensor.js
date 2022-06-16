import { getSensors } from "../../../redux/actions/sensorAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export default function Sensor(props) {
    const p = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSensors());
    }, [])

    return (
        <div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Number of Sensors</span>
                </label>
                <input type="number" placeholder="Type here..." className="input text-primary input-bordered w-full max-w-xs" />
                <button className="btn btn-wide mt-5" onClick={p.nextFormStep}>Add Number of Sensors</button>
            </div>
        </div>
    )
}
