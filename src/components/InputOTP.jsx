'use client';

export default function Input({
    className = 'rounded-full w-15 h-15  border-gray-500 pt-1 py-[16px] text-body-c font-normal focus:border-purple-4 outline-gray-200',
    type = 'text justify-center',
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
