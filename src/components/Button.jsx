'use client';

export default function Button({
    className = 'rounded-rad-4 bg-purple-4 px-6 py-[14px] text-body-c font-medium text-white hover:bg-purple-2',
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
