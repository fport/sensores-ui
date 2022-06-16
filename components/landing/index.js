import Link from 'next/link'
import Card from '@c/card'

import { clearMapId } from "../../redux/actions/mapAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Landing() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMapId());
    }, [])

    return (
        <Card>
            <div className='flex flex-col ai-between justify-between w-full h-full'>
                <p className="text-center grow-0 my-10">If you're ready, let's get started⚡️</p>
                <Link href='/create'>
                    <button className="btn gap-2 text-success-content">
                        <svg
                            width={16}
                            height={16}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m4.25 3 1.166-.624 8 5.333v1.248l-8 5.334-1.166-.624V3zm1.5 1.401v7.864l5.898-3.932L5.75 4.401z"
                            />
                        </svg>
                        Start
                    </button>
                </Link>
            </div>
        </Card>
    )
}
