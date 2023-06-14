'use client';

import Navbar from '@/components/Navbar';
import { FiArrowLeft, FiEdit3, FiSettings, FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { useSession, signOut, signIn } from 'next-auth/react';

export default function Akun() {
    const { data: session, status } = useSession();
    const router = useRouter();

    return (
        <>
            <Navbar className={'hidden lg:block'} />
            <div className='container mx-auto grid max-w-screen-lg grid-cols-12 gap-3 font-poppins'>
                {/* search flight menu start */}
                <h1 className='col-span-12 mb-[24px] mt-[47px] font-poppins text-head-1 font-bold'>Akun</h1>
                <div className='col-span-12 flex items-center gap-4 rounded-rad-3 bg-pur-3 py-[13px] font-poppins text-title-2 font-medium text-white'>
                    <FiArrowLeft className='ml-[21px] h-6 w-6 cursor-pointer' onClick={() => router.push('/')} />
                    <p>Beranda</p>
                </div>

                <div className='col-span-4'>
                    <div className='group flex cursor-pointer items-center gap-4 rounded-rad-2 border-b-[1px] px-3 py-4 hover:bg-pur-3 '>
                        <FiEdit3 className='h-[18px] w-[18px] text-pur-4  group-hover:text-white' />
                        <p className='font-poppins text-title-2 font-medium text-black group-hover:text-white'>Ubah Profile</p>
                    </div>
                    <div className='group flex cursor-pointer items-center gap-4 rounded-rad-2 border-b-[1px] px-3 py-4 hover:bg-pur-3 '>
                        <FiSettings className='h-[18px] w-[18px] text-pur-4  group-hover:text-white' />
                        <p className='font-poppins text-title-2 font-medium text-black group-hover:text-white'>Pengaturan Akun</p>
                    </div>
                    <div
                        className='group flex cursor-pointer items-center gap-4 rounded-rad-2 border-b-[1px] px-3 py-4 hover:bg-pur-3 '
                        onClick={() => signOut()}>
                        <FiLogOut className='h-[18px] w-[18px] text-pur-4  group-hover:text-white' />
                        <p className='font-poppins text-title-2 font-medium text-black group-hover:text-white'>Keluar</p>
                    </div>
                </div>
                <div className='col-span-8'>
                    <h1>he</h1>
                </div>

                {/* search flight menu end */}
            </div>
        </>
    );
}
