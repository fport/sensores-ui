export default function ResultTable() {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full mt-10">
                    <thead>
                        <tr>
                            <th />
                            <th>Sensor Type</th>
                            <th>Sensor Location</th>
                            <th>Reporting Frequency</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Smoke</td>
                            <td>2 , 5</td>
                            <td>10</td>
                            <td>
                                <div className="dropdown dropdown-hover">
                                    <label tabIndex={0} className="btn m-1">Hover</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>CO2</td>
                            <td>5 , 1</td>
                            <td>10</td>
                            <td>
                                <div className="dropdown dropdown-hover">
                                    <label tabIndex={0} className="btn m-1">Hover</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Methane</td>
                            <td>7 , 8</td>
                            <td>10</td>
                            <td>
                                <div className="dropdown dropdown-hover">
                                    <label tabIndex={0} className="btn m-1">Hover</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Dust</td>
                            <td>1 , 6</td>
                            <td>10</td>
                            <td>
                                <div className="dropdown dropdown-hover">
                                    <label tabIndex={0} className="btn m-1">Hover</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Delete</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
