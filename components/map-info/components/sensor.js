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
        <div className="form-control w-full ">
            <label className="label">
                <span className="flex w-full justify-center mb-6 label-text">Number of Sensors</span>
            </label>
            <input
                type="number"
                placeholder="Type here..."
                className="input text-primary input-bordered w-full "
                value={p.data.sensorCount}
                onChange={(e) => p.changeMapInfoData('sensorCount', e.target.value)}
            />
            <button
                className="btn btn-wide mt-5 w-full"
                onClick={p.nextFormStep}
                disabled={!(p.data.cordY || p.data.cordY) || !p.data.radius || !p.data.sensorCount}
            >
                Add Number of Sensors
            </button>
        </div>
    )
}
