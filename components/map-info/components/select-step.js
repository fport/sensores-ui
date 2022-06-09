import {
    Cords,
    Radius,
    Sensor,
    FormCard,
} from './index'
import Router from 'next/router'


export default function SelectStep(props) {
    const p = props;

    const redirectResult = () => {
        Router.push('/result')
    }

    return (
        <div>
            <FormCard currentStep={p.formStep} prevFormStep={p.prevFormStep}>
                {p.formStep >= 0 && (
                    <Cords formStep={p.formStep} nextFormStep={p.nextFormStep} />
                )}
                {p.formStep >= 1 && (
                    <Radius formStep={p.formStep} nextFormStep={p.nextFormStep} />
                )}
                {p.formStep >= 2 && (
                    <Sensor formStep={p.formStep} nextFormStep={p.nextFormStep} />
                )}

                {p.formStep > 2 && redirectResult()}
            </FormCard>
        </div>
    )
}
