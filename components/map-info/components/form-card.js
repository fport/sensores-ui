export default function FormCard({ children, currentStep, prevFormStep }) {
    return (
        <div >
            {currentStep < 3 && (
                <>
                    {currentStep > 0 && (
                        <button
                            className="btn btn-error"
                            onClick={prevFormStep}
                            type="button"
                        >
                            back
                        </button>
                    )}

                    <span >Step {currentStep + 1} of 3</span>
                </>
            )}
            {children}
        </div>
    );
}
