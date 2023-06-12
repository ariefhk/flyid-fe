'use client';

export default function Label({ className = 'mb-1 text-body-b font-bold text-pur-5', htmlFor, children, ...rest }) {
    return (
        <label {...rest} htmlFor={htmlFor} className={`${className} font-poppins`}>
            {children}
        </label>
    );
}
