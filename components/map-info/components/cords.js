export default function Cords(props) {
    const p = props;
    return (
        <div>
            <span>Map placement center point</span>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">X coordinate</span>
                </label>
                <input type="number" placeholder="Type here..." className="input text-primary input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Y coordinate</span>
                </label>
                <input type="number" placeholder="Type here..." className="input text-primary input-bordered w-full max-w-xs" />
                <button className="btn btn-wide mt-5" onClick={p.nextFormStep}>Add coordinats</button>
            </div>
        </div>
    )
}
