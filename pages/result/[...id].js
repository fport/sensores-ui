import Layout from '@c/layout'
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from "react-redux";
import Router from 'next/router'
import axios from 'axios';

export default function SensorDetails() {
    const sensorsData = useSelector((state) => state.sensors);
    const { sensors } = sensorsData;
    const resultData = useSelector((state) => state.result);
    const { result } = resultData;
    const router = useRouter();
    const sensorName = router?.asPath?.split('/')[2]
    const selectedSensor = sensors?.find((s) => s.sensor_ad == decodeURI(sensorName))
    const selectedResultSensor = result?.find((s) => s.sensor_adi == decodeURI(sensorName))
    const [number, setNumber] = React.useState(Math.floor(Math.random() * 100 + 1));

    // add side effect to component
    React.useEffect(() => {
        if (selectedResultSensor.sensor_frekans) {
            // create interval
            const frekans = Math.abs(selectedResultSensor.sensor_frekans);

            const interval = setInterval(
                // set number every 5s

                () => {
                    const val = Math.floor(Math.random() * 100 + 1)
                    setNumber(val)
                    axios.post('/api/value', {
                        value: val,
                    })
                }, frekans * 1000

            );

            // clean up interval on unmount
            return () => {
                clearInterval(interval);
            };
        }
    }, [selectedResultSensor]);

    return (
        <Layout>
            <div className="indicator ">
                <span className="indicator-item indicator-center badge badge-primary" />
                <div className="flex flex-col items-start justify-center p-4 w-96 h-96 bg-base-300 ">
                    <span>Sensor Name : {selectedSensor?.sensor_ad}</span>
                    <span>Sensor Features : {selectedSensor?.sensor_ozellik}</span>
                    <span>Sensor Frequency : {selectedResultSensor?.sensor_frekans}</span>
                    <span>Sensor Location : {selectedResultSensor?.sensor_konum}</span>
                    <span>Sensor Value : {number}</span>
                    <button
                        className="btn btn-wide mt-5 w-full"
                        onClick={() => Router.push('/result')}
                    >
                        Go to Result
                    </button>
                </div>

            </div>
        </Layout>
    )
}
