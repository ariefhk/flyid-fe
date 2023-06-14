'use client';

export default function Button({
<<<<<<< HEAD
    className = 'rounded-rad-4 bg-purple-4 px-6 py-[14px] text-body-c font-medium text-white hover:bg-purple-2',
=======
    className = 'rounded-rad-4 bg-purple-600 px-6 py-[14px] w-full text-body-c font-medium text-white hover:bg-purple-2',
>>>>>>> tiyas-OTP
    text,
    children,
    ...rest
}) {
    return (
        <button {...rest} className={`${className} font-poppins`}>
            {text || children}
        </button>
    );
}
