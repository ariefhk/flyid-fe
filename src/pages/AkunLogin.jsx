'use client';
import Input from '@/components/InputProfil';
import Label from '@/components/LabelAkunProfil';
import Image from 'next/image';
import Button from '@/components/ButtonProfil';
import AlertBottom from '@/components/AlertBottom';
import { useState } from 'react';

export default function OTP() {
    const [visibleAlert, setVisibleAlert] = useState(false);
    const handleVisibleAlert = () => setVisibleAlert(!visibleAlert);

    return (
        <section className='h-full w-full bg-white '>
            <nav>
                {/* NAVIGASI */}
                <div className='item-right ml-[128px] flex pt-[15px] font-medium'>
                    <Image src={`./images/logo.svg`} alt='' width={98} height={53} quality={100} />
                    <div className='ml-[930px] mr-[136px] flex items-center justify-center space-x-[30px]'>
                    {/* COBA */}
                    <a href="#" className=''>
                        <img src={`./images/list.svg`} alt="" />
                        
                    </a>
                    {/* BATAS */}


                        <Image src={`./images/list.svg`} alt='' width={24} height={24} quality={100} />
                        <Image src={`./images/bell.svg`} alt='' width={24} height={24} quality={100} />
                        <Image src={`./images/user.svg`} alt='' width={24} height={24} quality={100} />
                    </div>
                </div>
                <div className='flex items-center justify-center pt-1'>
                    <hr className='mt-[16px] h-[2px] w-full border-0 bg-gray-200 ' />
                </div>
                {/* JUMBUTRON */}
                <div className='h-28 bg-white'>
                    <h1 className='flex pl-[260px] text-[20px] font-bold'>Akun</h1>
                    <div className='w-[936px] pl-[276px] pt-[32px] text-left'>
                        <div className='flex h-[50px] w-[936px] rounded-xl bg-pur-3 pl-10'>
                            <Image className='mr-[21px]' src={`./images/back.svg`} alt='' width={24} height={24} quality={100} />
                            <h1 className=' mr-[58px] pt-2 text-[20px] font-semibold text-white'>Beranda</h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-center pt-1'>
                        <hr className='mt-[17px] mt-1 h-[2px] w-full border-0 bg-gray-200 ' />
                    </div>
                </div>

                {/* BOX AKUN */}
                <div className='grid-2 flex'>
                    <div className='ml-[297px] mt-[47px] h-[189px] w-[370px] bg-white '>
                        <div className='ml-[21px] mt-[44px] flex items-center '>
                            <div className='flex space-x-[19px] font-medium text-[16x]'>
                                <Image src={`./images/ubahprofil.svg`} alt='' width={22} height={22} quality={100} />
                                <h1>Ubah Profil</h1>
                            </div>
                        </div>
                        <div className='ml-[21px] flex'>
                            <hr className='mt-[16px] h-[2px] w-[328px] border-0 bg-gray-200 ' />
                        </div>

                        <div className='ml-[21px] mt-[16px] flex items-center '>
                            <div className='flex space-x-[19px] font-medium text-[16x]'>
                                <Image src={`./images/pengaturan.svg`} alt='' width={22} height={22} quality={100} />
                                <h1>Pengaturan Akun</h1>
                            </div>
                        </div>
                        <div className='ml-[21px] flex'>
                            <hr className='mt-[16px] h-[2px] w-[328px] border-0 bg-gray-200 ' />
                        </div>
                        <div className='ml-[21px] mt-[16px] flex items-center '>
                            <div className='flex space-x-[19px] font-medium text-[16x]'>
                                <Image src={`./images/out.svg`} alt='' width={22} height={22} quality={100} />
                                <h1>Keluar</h1>
                            </div>
                        </div>
                        <div className='ml-[21px] flex'>
                            <hr className='mt-[16px] h-[2px] w-[328px] border-0 bg-gray-200 ' />
                        </div>
                    </div>

                    {/* BOX UBAH DATA PROFIL*/}

                    <div className='mt-[50px] w-[518px] h-[462px] bg-white ml-[47px] outline outline-gray-200 '>
                        <div className='flex w-[452px] mt-[40px] ml-[16px] flex-col gap-5 text-[15px]'>
                            <h1 className='text-heading-2 font-poppins text-[20px] font-bold'>Ubah Data Profil</h1>
                            <div className='rounded-t-xl h-1 w-[486px] bg-pur-3 h-[40px]'>
                                <h1 className='font-bold text-white text-[16px] ml-[16px] mt-[8px] align-center'>Data Diri</h1>
                            </div>
                            <div className='w-[400px] text-[16px] ml-[20px] '>
                                <div className='flex-col w-[454px] text-pur-5'>
                                    <Label htmlFor='name w-[400px]'>Nama Lengkap</Label>
                                    <Input id='name' placeholder='Nama Lengkap' />
                                </div>
                                <div className='flex flex-col w-[454px]'>
                                    <Label htmlFor='no_tlp'>Nomor Telepon</Label>
                                    <Input id='no_tlp' placeholder='+62' />
                                </div>
                                <div className='flex flex-col w-[454px]'>
                                    <Label htmlFor='email h-[12px] '>Email</Label>
                                    <Input id='email' placeholder='Johndee@gmail.com' />
                                </div>
                            </div>
                        </div>
                        <div className='flex ml-[184px]  w-[150px] pt-5 justify-center align-center bg'>
                            <Button onClick={() => handleVisibleAlert()}>Simpan</Button>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
