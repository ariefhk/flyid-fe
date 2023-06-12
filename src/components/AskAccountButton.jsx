'use client';

export default function AskAccountButton({ prefix, suffix, onClick }) {
    return (
        <div className='flex justify-center'>
            <p className='font-poppins text-body-c font-normal'>
                {prefix}
                <span onClick={onClick} className='ml-2 cursor-pointer font-bold  text-purple-4 hover:text-purple-2'>
                    {suffix}
                </span>
            </p>
        </div>
    );
}
