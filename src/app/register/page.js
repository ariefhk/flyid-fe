'use client';

import { useState } from 'react';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Image from 'next/image';
import PasswordInput from '@/components/PasswordInput';
import AskAccountButton from '@/components/AskAccountButton';
import Button from '@/components/Button';
import AlertBottom from '@/components/AlertBottom';

export default function Register() {
    const [visibleAlert, setVisibleAlert] = useState(false);
    const handleVisibleAlert = () => setVisibleAlert(!visibleAlert);

    return (
        <section className='h-screen w-full bg-white'>
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
                            <h1 className='text-heading-2 mb-2 font-poppins text-2xl font-bold '>Daftar</h1>
                            <div className='flex flex-col'>
                                <Label htmlFor='name'>Nama </Label>
                                <Input id='name' placeholder='Nama Lengkap' />
                            </div>
                            <div className='flex flex-col'>
                                <Label htmlFor='email'>Email</Label>
                                <Input id='email' placeholder='Contoh: Johndee@gmail.com' />
                            </div>
                            <div className='flex flex-col'>
                                <Label htmlFor='no_tlp'>No Telepon</Label>
                                <Input id='no_tlp' placeholder='+62' />
                            </div>
                            <div className='flex flex-col'>
                                <Label htmlFor='password' className='mb-1 flex justify-between text-body-4'>
                                    Passwords
                                </Label>
                                <PasswordInput id='password' placeholder='Buat Password' />
                            </div>
                            <Button onClick={() => handleVisibleAlert()}>Daftar</Button>
                            <AskAccountButton
                                prefix={'Sudah Punya Akun?'}
                                suffix={'Masuk Disini'}
                                onClick={() => console.log('Ini diganti Fungsi')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
