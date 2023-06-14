'use client';

import Input from '@/components/Input';
import Label from '@/components/Label';
import Image from 'next/image';
import PasswordInput from '@/components/PasswordInput';
import AskAccountButton from '@/components/AskAccountButton';
import Button from '@/components/Button';
import AlertBottom from '@/components/AlertBottom';
import { useState } from 'react';

export default function Login() {
    const [visibleAlert, setVisibleAlert] = useState(false);
    const handleVisibleAlert = () => setVisibleAlert(!visibleAlert);

    return (
        <section className='h-screen  bg-white'>
            <div className='grid h-full w-full grid-cols-12'>
                <div className='col-span-6'>
                    <div className='relative h-full'>
                        <Image src={`/images/Ulang_Sandi.jpg`} alt='' fill={true} style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                </div>
                <div className='relative col-span-6'>
                    <AlertBottom
                        visibleAlert={visibleAlert}
                        handleVisibleAlert={handleVisibleAlert}
                        className='bg-alert-3'
                        text={'Tautan invalid atau kadaluarsa'}
                    />
                    <div className='padding-py-px flex h-full items-center justify-self-end ps-20'>
                        <div className='flex w-[452px] flex-col gap-5 '>
                            <h1 className='text-heading-2 mb-2 font-poppins text-2xl font-bold'>Masuk</h1>
                            <div className='flex flex-col'>
                                <Label htmlFor='email'>Email/No Telepon</Label>
                                <Input id='email' placeholder='Contoh: johndoe@gmail.com' />
                            </div>
                            <div className='flex flex-col'>
                                <Label htmlFor='password' className='mb-1 flex justify-between text-body-3'>
                                    Password{' '}
                                    <span className='cursor-pointer text-body-6 font-medium text-pur-4 hover:text-pur-2'>
                                        Lupa Kata Sandi
                                    </span>
                                </Label>
                                <PasswordInput id='password' placeholder='Masukkan password' />
                            </div>
                            <Button onClick={() => handleVisibleAlert()}>Masuk</Button>
                            <AskAccountButton
                                prefix={'Belum punya akun?'}
                                suffix={'Daftar Disini'}
                                onClick={() => console.log('Ini diganti Fungsi')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
