'use client';

import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
    const router = useRouter();

    return (
        <>
            <Navbar className={'hidden lg:block'} />
            <div className=' mt-8 hidden h-[232px] grid-cols-12  lg:grid'>
                <div className='relative col-span-12 '>
                    <Image src={'./images/banner.svg'} alt='' fill={true} quality={100} />
                </div>
            </div>
            <HomeSearch className={'h-[298px] w-[968px]'} handleActionHomeSearch={() => router.push('/search')} />
        </>

    );
}
