import { useState } from 'react';
import Stepper from '@c/stepper'
import Card from '@c/card'
import { SelectStep } from './components'
import Router from 'next/router'

export default function MapInfo() {
    const [formStep, setFormStep] = useState(0);
    const [s, setState] = useState({
        data: {
            cordX: null,
            cordY: null,
            radius: null,
            sensorCount: 0,
            sensorCurrentCount: 1,
            sensorName: null,
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

    const addSensorToMap = () => {
        if (s.data.sensorCurrentCount < s.data.sensorCount) {
            setState({
                data: {
                    ...s.data,
                    sensorCurrentCount: s.data.sensorCurrentCount + 1,
                    sensorName: null,
                    sensorCordX: 0,
                    sensorCordY: 0,
                    sensorFrekans: 0
                }
            })
        } else if (s.data.sensorCurrentCount = s.data.sensorCount) {
            console.log('osman');
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
                    addSensorToMap={() => addSensorToMap()}
                    prevFormStep={prevFormStep}
                    nextFormStep={nextFormStep} />
            </Card>
        </div>
    )
}
