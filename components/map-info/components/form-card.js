export default function FormCard({ children, currentStep, prevFormStep, nextFormStep }) {
    return (
        <div className="flex flex-col items-center justify-between w-full mb-10">
            {currentStep < 3 && (
                <div className="flex w-full items-center justify-between">
                    {currentStep > 0 && (
                        <button
                            className=" btn btn-error btn-xs"
                            onClick={prevFormStep}
                            type="button"
                        >
                            back
                        </button>
                    )}
                    {currentStep < 3 && (
                        <button
                            className=" btn btn-success btn-xs"
                            onClick={nextFormStep}
                            type="button"
                        >
                            next
                        </button>
                    )}
                </div>
            )}
            <div className="flex mt-5">
                {children}
            </div>
        </div>
    );
}
