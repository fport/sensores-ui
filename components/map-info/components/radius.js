import { useDispatch, useSelector } from "react-redux";
import { createMap } from "../../../redux/actions/mapAction";
import { useEffect } from "react";

export default function Radius(props) {
    const p = props;
    const dispatch = useDispatch();
    const mapInfoData = useSelector((state) => state.mapInfo);
    const { mapId, loading } = mapInfoData;

    const redirect = (e) => {
        e.preventDefault()
        dispatch(createMap({
            cordX: p.data.cordX,
            cordY: p.data.cordY,
            radius: p.data.radius
        }));
    }

    useEffect(() => {
        if (mapId && !loading) {
            p.nextFormStep()
        }
    }, [mapId])

    return (
        <div className="form-control w-full ">
            <label className="label">
                <span className="flex w-full justify-center mb-6 label-text">Radius</span>
            </label>
            <input
                type="number"
                placeholder="Type here..."
                className="input text-primary input-bordered w-full "
                value={p.data.radius}
                onChange={(e) => p.changeMapInfoData('radius', e.target.value)}
            />
            <button
                className="btn btn-wide mt-5 w-full"
                onClick={(e) => redirect(e)}
                disabled={!(p.data.cordY || p.data.cordY) || !p.data.radius}
            >
                Add Map Radius
            </button>
        </div>
    )
}
