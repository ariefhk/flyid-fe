'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import Image from 'next/image';

export default function ResetPassword() {
    const router = useRouter();

    return (
        <div className='flex h-screen flex-col items-center justify-center gap-10 font-poppins'>
            <Image alt='' src={'/images/checks.svg'} width={200} height={200} loading='lazy' />
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-bold text-black'>Silahkan Cek Email Anda...</h1>
                <Button onClick={() => router.replace('/')}>Back to Home</Button>
            </div>
        </div>
    );
}
