'use client';

import Input from '@/components/Input';
import Label from '@/components/Label';
import Image from 'next/image';
import PasswordInput from '@/components/PasswordInput';
import AskAccountButton from '@/components/AskAccountButton';
import Button from '@/components/Button';
import AlertBottom from '@/components/AlertBottom';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [alertType, setAlertType] = useState('');
    const handleVisibleAlert = (text, alertType) => {
        setAlertText(text);
        setAlertType(alertType);
        setVisibleAlert(!visibleAlert);
    };

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleLoginData = (event) => {
        setLoginData({ ...loginData, [event.target.name]: event.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        signIn('credentials', {
            email: loginData.email,
            password: loginData.password,
            redirect: false,
        }).then((res) => {
            if (res.error) {
                handleVisibleAlert(res.error, 'failed');
            }
            if (!res.error) {
                router.refresh();
                router.replace('/');
            }
        });
    };

    return (
        <section className='h-screen bg-white'>
            <div className='grid h-full w-full grid-cols-12'>
                <div className='col-span-6'>
                    <div className='relative h-full'>
                        <Image
                            src={`/images/Ulang_Sandi.jpg`}
                            alt=''
                            fill
                            style={{ objectFit: 'cover' }}
                            quality={100}
                            priority
                            // className='opacity-0 transition-opacity duration-[1s]'
                            // onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                        />
                    </div>
                </div>
                <div className='relative col-span-6'>
                    <AlertBottom
                        visibleAlert={visibleAlert}
                        handleVisibleAlert={handleVisibleAlert}
                        // className='bg-alert-3'
                        text={alertText}
                        type={alertType}
                    />
                    <div className='padding-py-px flex h-full items-center justify-self-end ps-20'>
                        <form onSubmit={handleLogin} className='flex w-[452px] flex-col gap-5 '>
                            <h1 className='text-heading-2 mb-2 font-poppins text-2xl font-bold'>Masuk</h1>
                            <div className='flex flex-col'>
                                <Label htmlFor='email'>Email/No Telepon</Label>
                                <Input
                                    id='email'
                                    placeholder='Contoh: johndoe@gmail.com'
                                    value={loginData.email}
                                    name={'email'}
                                    onChange={handleLoginData}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='mb-1 flex justify-between font-poppins'>
                                    <Label htmlFor='password' className=' text-body-3'>
                                        Password{' '}
                                    </Label>
                                    <span
                                        className='cursor-pointer text-body-6 font-medium text-pur-4 hover:text-pur-2'
                                        onClick={() => router.push('/reset-password')}>
                                        Lupa Kata Sandi
                                    </span>
                                </div>

                                <PasswordInput
                                    id='password'
                                    placeholder='Masukkan password'
                                    value={loginData.password}
                                    name={'password'}
                                    onChange={handleLoginData}
                                />
                            </div>
                            <Button type={'submit'}>Masuk</Button>
                            <AskAccountButton
                                prefix={'Belum punya akun?'}
                                suffix={'Daftar Disini'}
                                onClick={() => router.push('/register')}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
