import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function SetSensor(props) {
    const p = props;
    const sensorInfoData = useSelector((state) => state.sensors);
    const { sensors, loading } = sensorInfoData;

    const createSensorOptions = () => {
        return sensors?.map((sensor, key) => <option key={key} value={sensor.sensor_ad}>{sensor.sensor_ad}</option>)
    }

    const calcProgress = () => {
        return `${p.data.sensorCurrentCount}/${p.data.sensorCount}`
    }

    const renderForm = useMemo(() => {
        return (
            <div className="flex flex-col h-full w-full ">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">Sensor to be added to the Total Map</div>
                        <div className="stat-value text-center">{calcProgress()}</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 h-full w-full ">
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Please choose a sensor</span>
                        </label>
                        <select
                            className="select select-primary w-full "
                            onChange={(e) => p.changeMapInfoData('sensorName', e.target.value)}
                            value={p.data.sensorName}
                        >
                            <option disabled selected value="">Choose a sensor</option>
                            {createSensorOptions()}
                        </select>
                    </div>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Sensor X coordinate</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Type here..."
                            className="input text-primary input-bordered w-full "
                            value={p.data.sensorCordX}
                            onChange={(e) => p.changeMapInfoData('sensorCordX', e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Sensor Y coordinate</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Type here..."
                            className="input text-primary input-bordered w-full "
                            value={p.data.sensorCordY}
                            onChange={(e) => p.changeMapInfoData('sensorCordY', e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Sensor Frekans</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Type here..."
                            className="input text-primary input-bordered w-full "
                            value={p.data.sensorFrekans}
                            onChange={(e) => p.changeMapInfoData('sensorFrekans', e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className="btn btn-wide mt-5 w-full"
                    onClick={() => p.addSensorToMap()}
                    disabled={!p.data.sensorName || !p.data.sensorCordX || !p.data.sensorCordY || !p.data.sensorFrekans}
                >
                    Add Sensor to Map
                </button>
            </div>
        )
    }, [p.data])

    return (
        <>
            {renderForm}
        </>
    )
}
