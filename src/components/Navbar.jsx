'use client';

import SearchBar from './SearchBar';

import SignInButton from './SignInButton';
import Image from 'next/image';

export default function Navbar({ className }) {
    return (
        <div className={`${className} shadow-low`}>
            <div className=' container mx-auto flex max-w-screen-xl justify-between  py-[18px]'>
                <div className='flex items-center gap-9'>
                    <Image src={'./images/logo_tiketku.svg'} width={98} height={53} alt='' />
                    <SearchBar />
                </div>

                <SignInButton />
            </div>
        </div>
    );
}
