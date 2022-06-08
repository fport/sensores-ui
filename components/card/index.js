export default function Card({ children }) {
    return (
        <div className="flex flex-col card w-96	h-52 bg-base-100 shadow-xl">
            <div className="card-body w-full h-full">
                <div className="card-actions w-full	 h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}
