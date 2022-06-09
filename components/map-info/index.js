import { useState } from 'react';
import Stepper from '@c/Stepper'
import Card from '@c/Card'
import { SelectStep } from './components'

export default function MapInfo() {
    const [formStep, setFormStep] = useState(0);

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    return (
        <div className='flex flex-col items-center jusify-center w-full my-10'>
            <Stepper step={formStep} />
            <Card>
                <SelectStep formStep={formStep} prevFormStep={prevFormStep} nextFormStep={nextFormStep} />
            </Card>
        </div>
    )
}
