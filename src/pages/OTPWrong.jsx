'use client';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Image from 'next/image';
import PasswordInput from '@/components/PasswordInput';
import AskAccountButton from '@/components/AskAccountButton';
import Button from '@/components/Button';
import AlertBottom from '@/components/AlertBottom';
import { useState } from 'react';

export default function OTP() {
    const [visibleAlert, setVisibleAlert] = useState(false);
    const handleVisibleAlert = () => setVisibleAlert(!visibleAlert);

    return (
        <section className='h-full w-full bg-white '>
            <nav>
                <div className='item-right flex pl-40 pt-8 font-medium'>
                    <div className='pr-128'>
                        <Image src={`./images/logo.svg`} alt='' width={110} height={110} quality={100} />
                    </div>
                </div>
                <div className='flex h-60 items-center justify-center gap-8'>
                    <div className='bg-black/2 w-1/2 rounded-xl p-8 pt-60'>
                        <div className='flex text-xl font-bold'>
                            <h1>Masukkan kode OTP</h1>
                        </div>
                        <div className='text-l flex justify-center pt-10'>
                            <h1>Ketik 6 digit kode yang dikirim ke j*****@gmail.com</h1>
                        </div>
                        <div className='flex justify-center space-x-6 pt-12 outline-gray-900'>
                            <Input id='' placeholder='' />
                            <Input id='' placeholder='' />
                            <Input id='' placeholder='' />
                            <Input id='' placeholder='' />
                            <Input id='' placeholder='' />
                            <Input id='' placeholder='' />
                        </div>
                        <div className='text-l font-medium flex justify-center pt-5 text-red-600'>
                        <AskAccountButton
                                suffix={'Kirim Ulang'}
                                onClick={() => console.log('Ini diganti Fungsi')}
                            />
                        </div>
                        <div className='flex w-auto justify-center pt-20'>
                            <Button onClick={() => handleVisibleAlert()}>Simpan</Button>
                            <AskAccountButton onClick={() => console.log('Ini diganti Fungsi')} />
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}
