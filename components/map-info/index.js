import { useState } from 'react';
import Stepper from '@c/stepper'
import Card from '@c/card'
import { SelectStep } from './components'
import Router from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { addSensorToMap } from '../../redux/actions/sensorAction'

export default function MapInfo() {
    const dispatch = useDispatch();
    const mapInfoData = useSelector((state) => state.mapInfo);
    const { mapId, loading } = mapInfoData;
    const [formStep, setFormStep] = useState(0);
    const [s, setState] = useState({
        data: {
            cordX: null,
            cordY: null,
            radius: null,
            sensorCount: 0,
            sensorCurrentCount: 0,
            sensorName: "",
            sensorCordX: null,
            sensorCordY: null,
            sensorFrekans: null
        }
    })

    const changeMapInfoData = (node, value) => {
        let data = Object.assign({}, s.data)
        data[node] = value
        setState({
            data
        })
    }

    const addSensorToMapControl = () => {
        if (s.data.sensorCurrentCount <= parseInt(s.data.sensorCount)) {
            dispatch(addSensorToMap({
                sensorName: s.data.sensorName,
                sensorCordX: s.data.sensorCordX,
                sensorCordY: s.data.sensorCordY,
                sensorFrekans: s.data.sensorFrekans,
                mapId: mapId
            }));
            setState({
                data: {
                    ...s.data,
                    sensorCurrentCount: s.data.sensorCurrentCount + 1,
                    sensorName: "",
                    sensorCordX: 0,
                    sensorCordY: 0,
                    sensorFrekans: 0
                }
            })
        } else {
            Router.push('/result')
        }
    }

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    return (
        <div className='flex flex-col items-center jusify-center w-full h-full pt-8'>
            <Stepper step={formStep} />
            <Card>
                <SelectStep
                    formStep={formStep}
                    data={s.data}
                    changeMapInfoData={(node, value) => changeMapInfoData(node, value)}
                    addSensorToMap={() => addSensorToMapControl()}
                    prevFormStep={prevFormStep}
                    nextFormStep={nextFormStep} />
            </Card>
        </div>
    )
}
