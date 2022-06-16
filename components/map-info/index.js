import { useState } from 'react';
import Stepper from '@c/stepper'
import Card from '@c/card'
import { SelectStep } from './components'

export default function MapInfo() {
    const [formStep, setFormStep] = useState(0);
    const [s, setState] = useState({
        data: {
            cordX: null,
            cordY: null,
            radius: null
        }
    })

    const changeMapInfoData = (node, value) => {
        let data = Object.assign({}, s.data)
        data[node] = value
        setState({
            data
        })
    }

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    return (
        <div className='flex flex-col items-center jusify-center w-full my-6'>
            <Stepper step={formStep} />
            <Card>
                <SelectStep
                    formStep={formStep}
                    data={s.data}
                    changeMapInfoData={(node, value) => changeMapInfoData(node, value)}
                    prevFormStep={prevFormStep} nextFormStep={nextFormStep} />
            </Card>
        </div>
    )
}
