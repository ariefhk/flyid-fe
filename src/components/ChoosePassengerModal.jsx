'use client';
import Image from 'next/image';
// import Card from '@/components/Card';
// import Input from '@/components/Input';
// import Button from '@/components/Button';
import Card from './Card';
import Input from './Input';
import Button from './Button';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function ChoosePassengerTypeModal({ handleOpenPassengerModal }) {
    const passengerType = [
        {
            id: 1,
            category: 'Dewasa',
            src: './images/male.svg',
            description: '(12 tahun keatas)',
        },
        {
            id: 2,
            category: 'Anak',
            src: './images/female.svg',
            description: '(2 - 11 tahun)',
        },
        {
            id: 3,
            category: 'Bayi',
            src: './images/baby.svg',
            description: '(dibawah 2 tahun)',
        },
    ];

    return (
        <div className='h-[324px] w-[400px]'>
            <Card>
                <Card.Title handleCardShow={() => handleOpenPassengerModal()} className={'border-b-[1px] py-[10px]'} />

                <Card.Body className={'mt-3'}>
                    <div className='flex flex-col gap-2 px-5'>
                        {passengerType &&
                            passengerType.map((passenger) => (
                                <div
                                    key={passenger.id}
                                    className='flex items-center  justify-between border-b-[1px] border-b-net-2 py-2 font-normal'>
                                    <div className='flex items-start gap-3 '>
                                        <Image src={passenger.src} alt='' width={12} height={12} />
                                        <div className='p-0'>
                                            <h1 className='font-poppins text-body-6 font-bold'>{passenger.category}</h1>
                                            <p className='font-poppins text-body-6 font-normal text-net-3'>
                                                {passenger.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex h-[40px] items-center gap-1 '>
                                        <Button className='h-full rounded-rad-1 border border-net-2  bg-white px-2 text-net-3 hover:border-pur-4 hover:text-pur-5'>
                                            <FiMinus className='h-6 w-6' />
                                        </Button>
                                        <div className='h-full w-[60px]'>
                                            <Input
                                                type='number'
                                                className=' text-title-a h-full rounded-rad-1 border-[1px] border-net-2 px-2 text-center  focus:border-pur-5'
                                            />
                                        </div>
                                        <Button className='h-full rounded-rad-1 border border-net-2  bg-white px-2 text-net-3 hover:border-pur-4 hover:text-pur-5'>
                                            <FiPlus className='h-6 w-6' />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </Card.Body>
                <Card.Footer handleCardAction={() => console.log('Simpan Data')}>Simpan</Card.Footer>
            </Card>
        </div>
    );
}
