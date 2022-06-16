import Layout from '@c/layout'
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";

export default function SensorDetails() {
    const sensorsData = useSelector((state) => state.sensors);
    const { sensors } = sensorsData;
    const resultData = useSelector((state) => state.result);
    const { result } = resultData;
    const router = useRouter();
    const sensorName = router?.asPath?.split('/')[2]
    const selectedSensor = sensors?.find((s) => s.sensor_ad == decodeURI(sensorName))
    const selectedResultSensor = result?.find((s) => s.sensor_adi == decodeURI(sensorName))

    return (
        <Layout>
            <div className="indicator ">
                <span className="indicator-item indicator-center badge badge-primary" />
                <div className="flex flex-col items-start justify-center p-4 w-96 h-96 bg-base-300 ">
                    <span>Sensor Name : {selectedSensor?.sensor_ad}</span>
                    <span>Sensor Features : {selectedSensor?.sensor_ozellik}</span>
                    <span>Sensor Frequency : {selectedResultSensor?.sensor_frekans}</span>
                    <span>Sensor Location : {selectedResultSensor?.sensor_konum}</span>
                </div>
            </div>
        </Layout>
    )
}
