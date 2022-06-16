export default function Cords(props) {
    const p = props;

    return (
        <div className="w-full items-center">
            <span className="flex w-full justify-center mb-6">Map placement center point</span>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">X coordinate</span>
                </label>
                <input
                    type="number"
                    placeholder="Type here..."
                    className="input text-primary input-bordered w-full "
                    value={p.data.cordX}
                    onChange={(e) => p.changeMapInfoData('cordX', e.target.value)}
                />
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Y coordinate</span>
                </label>
                <input
                    type="number"
                    placeholder="Type here..."
                    className="input text-primary input-bordered w-full "
                    value={p.data.cordY}
                    onChange={(e) => p.changeMapInfoData('cordY', e.target.value)}
                />
                <button
                    className="btn btn-wide mt-5 w-full"
                    onClick={p.nextFormStep}
                    disabled={!(p.data.cordY || p.data.cordY)}
                >
                    Add coordinats
                </button>
            </div>
        </div>
    )
}
