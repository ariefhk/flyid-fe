'use client';

export default function Input({
    className = 'rounded-rad-4 border-neutral-2 px-6 py-[14px] h-[40px] text-body- font-normal focus:border-purple-4',
    type = 'text',
    id,
    placeholder,
    ...rest
}) {
    return (
        <input
            {...rest}
            id={id}
            placeholder={placeholder}
            type={type}
            className={`${className} w-full appearance-none border font-poppins outline-none`}
        />
    );
}
