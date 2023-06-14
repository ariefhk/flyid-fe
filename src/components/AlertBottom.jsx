'use client';
import { useState, useEffect } from 'react';

export default function AlertBottom({ visibleAlert, handleVisibleAlert, className = 'bg-alert-1', text }) {
    // const [visibleAlert, setVisibleAlert] = useState(true);

    useEffect(() => {
        if (visibleAlert) {
            setTimeout(() => {
                handleVisibleAlert();
            }, 1750);
        }
    }, [visibleAlert, handleVisibleAlert]);

    return (
        <>
            {visibleAlert && (
                <div
                    className={`${className} absolute bottom-14 left-[50%] w-[273px] translate-x-[-50%] rounded-rad-3 py-4 text-center font-poppins text-body-c font-medium text-white`}>
                    {text}
                </div>
            )}
        </>
    );
}
