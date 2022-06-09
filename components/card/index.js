export default function Card({ children }) {
    return (
        <div className="flex flex-col card w-96	h-fit bg-base-100 shadow-xl">
            <div className="card-body w-full h-full p-4">
                <div className="card-actions w-full	 h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}
