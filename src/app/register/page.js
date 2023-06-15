'use client';

import { useEffect, useState } from 'react';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Image from 'next/image';
import PasswordInput from '@/components/PasswordInput';
import AskAccountButton from '@/components/AskAccountButton';
import Button from '@/components/Button';
import AlertBottom from '@/components/AlertBottom';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Register() {
    const router = useRouter();
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [registerStatus, setRegisterStatus] = useState('idle');
    const [alertText, setAlertText] = useState('');
    const [alertType, setAlertType] = useState('');
    const handleVisibleAlert = (text, alertType) => {
        setAlertText(text);
        setAlertType(alertType);
        setVisibleAlert(!visibleAlert);
    };

    useEffect(() => {
        if (registerStatus === 'success') {
            // alert('Success Register, Your being redirected');
            router.push('/otp');
        }
        setRegisterStatus('idle');
    }, [registerStatus, router]);

    const [regisData, setRegisData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });

    const handleRegisData = (event) => {
        setRegisData({ ...regisData, [event.target.name]: event.target.value });
    };

    const registerUser = async ({ name, email, phone, password }) => {
        try {
            const URL = 'https://kel1airplaneapi-production.up.railway.app/api/v1/user/register';
            const res = await axios.post(URL, {
                name,
                email,
                phone,
                password,
            });
            console.log(res);
            handleVisibleAlert(res.data.message, 'success');
            return res.data;
        } catch (error) {
            // console.log(error);
            const text = error.response.data.message;
            // return error.response.data.message;

            handleVisibleAlert(text, 'failed');
            // return error.response.data.message;
        }
    };

    const handleRegis = async (e) => {
        e.preventDefault();
        try {
            if (regisData.name && regisData.email && regisData.password && regisData.phone) {
                const templateObj = {
                    name: regisData.name,
                    email: regisData.email,
                    phone: regisData.phone,
                    password: regisData.password,
                };
                const test = await registerUser(templateObj);
                console.log(regisData);
                // console.log('hehehe', test);
                if (test.status === 'Success') {
                    setRegisterStatus('success');
                }
            }
        } catch (error) {
            // handleVisibleAlert(error.message, 'failed');
        }
    };

    return (
        <section className='w-full h-screen bg-white'>
            <div className='grid w-full h-full grid-cols-12'>
                <div className='col-span-6'>
                    <div className='relative h-full'>
                        <Image src={`/images/Ulang_Sandi.jpg`} alt='' fill={true} style={{ objectFit: 'cover' }} quality={100} />
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
                    <div className='flex items-center h-full padding-py-px justify-self-end ps-20'>
                        <form className='flex w-[452px] flex-col gap-5 ' onSubmit={handleRegis}>
                            <h1 className='mb-2 text-2xl font-bold text-heading-2 font-poppins '>Daftar</h1>
                            <div className='flex flex-col'>
                                <Label htmlFor='name'>Nama </Label>
                                <Input
                                    id='name'
                                    placeholder='Nama Lengkap'
                                    name='name'
                                    value={regisData.name}
                                    onChange={handleRegisData}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <Label htmlFor='email'>Email</Label>
                                <Input
                                    id='email'
                                    name='email'
                                    placeholder='Contoh: Johndee@gmail.com'
                                    value={regisData.email}
                                    onChange={handleRegisData}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <Label htmlFor='phone'>No Telepon</Label>
                                <Input
                                    id='phone'
                                    placeholder='+62'
                                    name='phone'
                                    value={regisData.phone}
                                    onChange={handleRegisData}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <Label htmlFor='password' className='flex justify-between mb-1 text-body-4'>
                                    Passwords
                                </Label>
                                <PasswordInput
                                    id='password'
                                    name='password'
                                    placeholder='Buat Password'
                                    value={regisData.password}
                                    onChange={handleRegisData}
                                />
                            </div>
                            <Button type='submit'>Daftar</Button>
                            <AskAccountButton
                                prefix={'Sudah Punya Akun?'}
                                suffix={'Masuk Disini'}
                                onClick={() => router.push('/login')}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
