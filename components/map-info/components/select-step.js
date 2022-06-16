import {
    Cords,
    Radius,
    Sensor,
    FormCard,
    SetSensor
} from './index'
import Router from 'next/router'

export default function SelectStep(props) {
    const p = props;

    const redirectResult = () => {
        Router.push('/result')
    }

    return (
        <>
            <FormCard
                currentStep={p.formStep}
                prevFormStep={p.prevFormStep}
                nextFormStep={p.nextFormStep}
            >
                {p.formStep == 0 && (
                    <Cords
                        data={p.data}
                        changeMapInfoData={(node, value) => p.changeMapInfoData(node, value)}
                        formStep={p.formStep}
                        nextFormStep={p.nextFormStep}
                    />
                )}
                {p.formStep == 1 && (
                    <Radius
                        data={p.data}
                        changeMapInfoData={(node, value) => p.changeMapInfoData(node, value)}
                        formStep={p.formStep}
                        nextFormStep={p.nextFormStep}
                    />
                )}
                {p.formStep == 2 && (
                    <Sensor
                        data={p.data}
                        changeMapInfoData={(node, value) => p.changeMapInfoData(node, value)}
                        formStep={p.formStep}
                        nextFormStep={p.nextFormStep}
                    />
                )}
                {p.formStep == 3 && (
                    <SetSensor
                        data={p.data}
                        changeMapInfoData={(node, value) => p.changeMapInfoData(node, value)}
                        formStep={p.formStep}
                        nextFormStep={p.nextFormStep}
                    />
                )}
                {p.formStep > 3 && redirectResult()}
            </FormCard>
        </>
    )
}
