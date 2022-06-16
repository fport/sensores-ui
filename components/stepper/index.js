import steps from './step.json'

export default function Stepper({ step }) {
    const stepCount = step;

    const renderStep = () => {
        const stepsArr = [];

        steps?.steps?.map(step => {
            stepsArr.push(<li key={step.name + step.id} className={`step${step.id <= stepCount ? ' step-primary' : ''}`}>{step.name}</li>)
        })

        return stepsArr;
    }
    return (
        <ul className="steps steps-vertical lg:steps-horizontal p-2">
            {renderStep()}
        </ul>
    )
}
