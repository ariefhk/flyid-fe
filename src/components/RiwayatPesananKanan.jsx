'use client';
import Image from 'next/image';

export default function RiwayatPesananKanan() {
    return (
        <div className='grid-2 grid-2 ml-[3px] mt-[50px] flex h-[718px] w-[370px] bg-white outline outline-gray-100'>
            <div className='grid-2'>
                <div className='flex '>
                    <div className='ml-[12px] mt-[36px] flex w-[452px] text-[18px] font-bold'>
                        <h1>Detail Pesanan</h1>
                        <h1 className='ml-[140px] h-[28px] w-[70px] rounded-[16px] bg-alert-1 text-center text-[14px] font-semibold text-white'>
                            Issued
                        </h1>
                    </div>
                </div>
                <div className='ml-[12px] mt-[8px] text-[18px] '>
                    <h1>
                        Booking Code: <span className='font-bold text-pur-4'>6723y2GHK</span>
                    </h1>
                </div>
                <div className='ml-[12px] mt-[10px] flex text-[14px]'>
                    <h1 className='font-bold'>
                        19:10
                        <p className='font-normal'>05 Maret</p>
                    </h1>
                    <h1 className='ml-[190px] h-[28px] w-[70px] rounded-[16px] text-center text-[14px] font-bold text-pur-3 '>
                        Keberangkatan
                    </h1>
                </div>
                <h1 className='text-semibold ml-[12px] text-[14px] '>Soekarno Hatta - Terminal 1A Domestik</h1>
                <div className='ml-[12px] flex'>
                    <hr className='mt-[16px] h-[2px] w-[328px] border-0 bg-gray-200 ' />
                </div>
                <div className='grid-2'>
                    <div className='flex'>
                        <Image
                            className='ml-[12px] mt-[11px]'
                            src={`./images/thubnail.svg`}
                            alt=''
                            width={24}
                            height={24}
                            quality={100}
                        />
                        <div className='ml-[12px] mt-[8px] text-[14px] '>
                            <h1 className='font-bold'>
                                Jet Air - Economy <br />
                                JT - 203
                            </h1>
                            <br />
                            <p className='mt- font-bold '>Informasi</p>
                            <p className='text-pur-4'>Penumpang 1: Mr. Harry Potter</p>
                            <p>ID: 1234567</p>
                            <p className='text-pur-4'>Penumpang 2: Miss Hermione</p>
                            <p>ID: 789658</p>
                        </div>
                    </div>
                </div>
                <div className='ml-[12px] flex'>
                    <hr className='mt-[8px] h-[2px] w-[328px] border-0 bg-gray-200 ' />
                </div>
                <div className='ml-[12px] mt-[10px] flex text-[14px]'>
                    <h1 className='font-bold'>
                        21:10
                        <p className='font-normal'>05 Maret</p>
                    </h1>
                    <h1 className='ml-[210px] h-[28px] w-[70px] rounded-[16px] text-center text-[14px] font-bold text-pur-3 '>
                        Kedatangan
                    </h1>
                </div>
                <h1 className='text-semibold ml-[12px]'>Melbourne International Airport</h1>
                <div className='ml-[16px] flex'>
                    <hr className='mt-[16px] h-[2px] w-[328px] border-0 bg-gray-200 ' />
                </div>
                <h1 className='ml-[12px] mt-[8px] font-bold text-[14px] '>Rincian Harga</h1>
                <div className='ml-[12px] mt-[4px] flex text-[14px]'>
                    <h1 className='font-normal'>2 Adults</h1>
                    <h1 className='ml-[210px]  font-normal'>IDR 9.550.000</h1>
                </div>
                <div className='ml-[12px] mt-[4px] flex text-[14px]'>
                    <h1 className='font-normal'>1  Baby</h1>
                    <h1 className='ml-[270px]  font-normal text-left'>IDR 0</h1>
                </div>
                <div className='ml-[12px] mt-[4px] flex text-[14px]'>
                    <h1 className='font-normal'>Tax</h1>
                    <h1 className='ml-[250px]  font-normal'>IDR 300.000</h1>
                </div>
                <div className='ml-[16px] flex'>
                    <hr className='mt-[16px] h-[2px] w-[328px] border-0 bg-gray-200 ' />
                </div>
                <div className='ml-[12px] mt-[13px] flex text-[16px] font-bold '>
                    <h1 >Total</h1>
                    <h1 className='ml-[200px] text-pur-4'>IDR 9.850.000</h1>
                </div>
                <button className='w-[350px] h-[62px] mt-[32px] rounded-[12px] bg-pur-4 ml-[12px] '>
                    <h1 className='text-white text-[20px] font-bold '>Cetak Tiket</h1>
                </button>

            </div>
            
        </div>
    );
}
