'use client';

import SearchBar from './SearchBar';
import { FiLogIn } from 'react-icons/fi';
import SignInButton from './SignInButton';
import Image from 'next/image';
import Button from './Button';

export default function Navbar({ className }) {
    return (
        <div className={`${className} shadow-low`}>
            <div className=' container mx-auto flex max-w-screen-xl justify-between  py-[18px]'>
                <div className='flex items-center gap-9'>
                    <Image src={'./images/logo_tiketku.svg'} width={98} height={53} alt='' />
                    <SearchBar />
                </div>

                {/* <Button className='flex items-center justify-center gap-3 rounded-rad-3 bg-pur-4 px-4 py-[14px] text-white'>
                    <FiLogIn />
                    Masuk
                </Button> */}
                <SignInButton />
            </div>
        </div>
    );
}
