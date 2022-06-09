export default function Radius(props) {
    const p = props;
    return (
        <div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Radius</span>
                </label>
                <input type="number" placeholder="Type here..." className="input text-primary input-bordered w-full max-w-xs" />
                <button className="btn btn-wide mt-5" onClick={p.nextFormStep}>Add Map Radius</button>
            </div>
        </div>
    )
}
