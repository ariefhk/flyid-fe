'use client';

export default function AskAccountButton({ prefix, suffix, onClick }) {
    return (
        <div className='flex justify-center'>
            <p className='font-normal font-poppins text-body-6'>
                {prefix}
                <span onClick={onClick} className='ml-2 font-bold cursor-pointer text-pur-4 hover:text-pur-2'>
                    {suffix}
                </span>
            </p>
        </div>
    );
}
