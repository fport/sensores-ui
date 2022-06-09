export default function Sensor(props) {
    const p = props;
    return (
        <div>
            <button className='btn btn-success' onClick={() => p.nextFormStep()}>Next</button>
            Sensor</div>
    )
}
