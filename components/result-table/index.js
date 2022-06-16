import { useDispatch, useSelector } from "react-redux";
import { getResult } from "../../redux/actions/resultAction";
import { useEffect } from "react";
import Link from 'next/link'

export default function ResultTable() {
    const dispatch = useDispatch();
    const mapInfoData = useSelector((state) => state.mapInfo);
    const { mapInfo } = mapInfoData;
    const resultData = useSelector((state) => state.result);
    const { result, loading } = resultData;

    useEffect(() => {
        if (mapInfo) {
            dispatch(getResult({
                mapId: mapInfo.mapId
            }));
        }
    }, [])

    const renderResultTable = () => {
        return (
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full mt-10">
                    <thead>
                        <tr>
                            <th />
                            <th>Sensor Type</th>
                            <th>Sensor Location</th>
                            <th>Reporting Frequency</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result?.map((s, i) => (
                                <tr>
                                    <th>{i + 1}</th>
                                    <Link href={`/result/${s.sensor_adi}`}>
                                        <td className="cursor-pointer">{s.sensor_adi}</td>
                                    </Link>
                                    <td>{s.sensor_konum}</td>
                                    <td>{s.sensor_konum}</td>
                                    <td>
                                        <div className="dropdown dropdown-hover">
                                            <label tabIndex={0} className="btn m-1">Action</label>
                                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><a>Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            {
                loading
                    ? 'loading'
                    : renderResultTable()
            }
        </div>
    )
}
