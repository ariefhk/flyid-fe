'use client';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import { FiArrowLeft, FiFilter } from 'react-icons/fi';
import { IoSearchSharp, IoLocationSharp } from 'react-icons/io5';
import RiwayatPesananKanan from '@/components/RiwayatPesananKanan';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function History() {
    const router = useRouter();

    const dataShape = [
        {
            booking_id: 1,
            status: 'issued',
            booking_date: '2023-02-28',
            booking_code: '6723y2GHK',
            amount: 2,
            price_with_tax: 9850000,
            ticket_type: 'two way',
            flight: [
                {
                    flight_id: 3,
                    airline: 'Jet Air',
                    airport_from_code: 'CGK',
                    airport_from_location: 'Jakarta',
                    airport_to_code: 'DPS',
                    airport_to_location: 'Bali',
                    departure_date: '2023-03-03',
                    departure_time: '07:00',
                    arrival_date: '2023-03-03',
                    arrival_time: '11:00',
                    description: 'Baggage 20 kg Cabin baggage 7 kg In Flight Entertainment',
                    flight_class: '',
                },
                // {
                //     flight_id: 4,
                //     airline: 'Garuda',
                //     airport_from_code: 'DPS',
                //     airport_from_location: 'Bali',
                //     airport_to_code: 'CGK',
                //     airport_to_location: 'Jakarta',
                //     departure_date: '2023-03-05',
                //     departure_time: '19:00',
                //     arrival_date: '2023-03-05',
                //     arrival_time: '21:00',
                //     description: 'Baggage 20 kg Cabin baggage 7 kg In Flight Entertainment',
                //     flight_class: '',
                // },
            ],
            passenger: [
                {
                    passenger_id: 12345,
                    type: 'adults',
                    title: 'Mr.',
                    name: 'Arief Rachman Hakim',
                    family_name: '',
                    birtday: '2002-05-22',
                    nationality: 'Indonesia',
                    nik_paspor: '12345',
                    issued_country: 'indonesia',
                    expired: '2023-03-05',
                    seat: 'B5',
                },
            ],
        },
        {
            booking_id: 2,
            booking_code: '6723y2GHK',
            booking_date: '2023-03-01',
            status: 'cancelled',
            amount: 2,
            price_with_tax: 9850000,
            ticket_type: 'one way',
            flight: [
                {
                    flight_id: 1,
                    airline: 'Jet Air',
                    airport_from_code: 'CGK',
                    airport_from_location: 'Jakarta',
                    airport_to_code: 'MLB',
                    airport_to_location: 'Melbourne',
                    departure_date: '2023-03-03',
                    departure_time: '07:00',
                    arrival_date: '2023-03-03',
                    arrival_time: '11:00',
                    description: 'Baggage 20 kg Cabin baggage 7 kg In Flight Entertainment',
                    flight_class: '',
                },
            ],
            passenger: [
                {
                    passenger_id: 12124,
                    type: 'adults',
                    title: 'Mr.',
                    name: 'Harry Potter',
                    family_name: '',
                    birtday: '2002-05-22',
                    nationality: 'Indonesia',
                    nik_paspor: '12345',
                    issued_country: 'england',
                    expired: '2023-03-05',
                    seat: 'A5',
                },
                {
                    passenger_id: 131213,
                    type: 'adults',
                    title: 'Miss.',
                    name: 'Hermione',
                    family_name: '',
                    birtday: '2002-05-22',
                    nationality: 'Indonesia',
                    nik_paspor: '12345',
                    issued_country: 'england',
                    expired: '2023-03-05',
                    seat: 'A5',
                },
            ],
        },
        {
            booking_id: 3,
            status: 'unpaid',
            booking_code: '6723y2GHK',
            booking_date: '2023-03-01',
            amount: 2,
            price_with_tax: 9850000,
            ticket_type: 'one way',
            flight: [
                {
                    flight_id: 1,
                    airline: 'Jet Air',
                    airport_from_code: 'CGK',
                    airport_from_location: 'Jakarta',
                    airport_to_code: 'MLB',
                    airport_to_location: 'Melbourne',
                    departure_date: '2023-03-03',
                    departure_time: '07:00',
                    arrival_date: '2023-03-03',
                    arrival_time: '11:00',
                    description: 'Baggage 20 kg Cabin baggage 7 kg In Flight Entertainment',
                    flight_class: '',
                },
            ],
            passenger: [
                {
                    passenger_id: 12124,
                    type: 'adults',
                    title: 'Mr.',
                    name: 'Harry Potter',
                    family_name: '',
                    birtday: '2002-05-22',
                    nationality: 'Indonesia',
                    nik_paspor: '12345',
                    issued_country: 'england',
                    expired: '2023-03-05',
                    seat: 'A5',
                },
                {
                    passenger_id: 131213,
                    type: 'adults',
                    title: 'Miss.',
                    name: 'Hermione',
                    family_name: '',
                    birtday: '2002-05-22',
                    nationality: 'Indonesia',
                    nik_paspor: '12345',
                    issued_country: 'england',
                    expired: '2023-03-05',
                    seat: 'A5',
                },
            ],
        },
    ];

    return (
        <>
            <Navbar />

            <div className='container mx-auto grid max-w-screen-lg grid-cols-12 gap-3 font-poppins'>
                <h1 className='col-span-12 mb-[24px] mt-[47px] font-poppins text-head-1 font-bold'>Riwayat Pemesanan</h1>
                <div className='col-span-12 grid grid-cols-12 gap-[18px]'>
                    <div
                        className='col-span-10 flex cursor-pointer items-center gap-4 rounded-rad-3 bg-pur-3 py-[13px] font-poppins text-title-2 font-medium text-white'
                        onClick={() => router.push('/')}>
                        <FiArrowLeft className='ml-[21px]  h-6 w-6 ' />
                        <p>Beranda</p>
                    </div>
                    <div className='col-span-2 flex items-center gap-4'>
                        <Button className='flex items-center gap-2 rounded-rad-4 border-[1px] border-pur-4 px-2 py-[4px] text-title-2'>
                            <FiFilter className='h-5 w-5 text-net-3 ' /> Filter
                        </Button>
                        <IoSearchSharp className='h-6 w-6 text-pur-4' />
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-[27px] max-w-screen-lg font-poppins'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-7 flex flex-col gap-4'>
                        {/* february */}
                        <div>
                            <h1 className='text-title-2 font-bold'>Februari</h1>
                            {dataShape &&
                                dataShape.map((data, index) => {
                                    if (2 === dayjs(data.booking_date).month() + 1) {
                                        return (
                                            <div
                                                key={index}
                                                className='mt-3 flex w-max cursor-pointer flex-col gap-4 rounded-rad-3 border-2   border-transparent p-4 shadow-low hover:border-2 hover:border-pur-5'>
                                                {/* status */}
                                                <p className='w-max rounded-rad-4 bg-alert-1 px-3 py-1 text-body-6 text-white'>
                                                    {data.status}
                                                </p>
                                                {/* status */}

                                                {/* locations */}
                                                <div className=' flex items-center gap-4 '>
                                                    <div className='flex gap-2'>
                                                        <IoLocationSharp className='h-[24px] w-[24px] text-net-3' />
                                                        <div>
                                                            <p className='text-body-6 font-bold'>Jakarta</p>
                                                            <p className='text-body-3 font-medium'>5 Maret 2023</p>
                                                            <p className='text-body-3 font-medium'>19:10</p>
                                                        </div>
                                                    </div>
                                                    <div className=' '>
                                                        <p className='text-center text-body-4 text-net-3'>4h</p>
                                                        <div className='relative h-[8px] w-[233px]'>
                                                            <Image alt='' src={'./images/arrow.svg'} fill />
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-2'>
                                                        <IoLocationSharp className='h-[24px] w-[24px] text-net-3' />
                                                        <div>
                                                            <p className='text-body-6 font-bold'>Melbourne</p>
                                                            <p className='text-body-3 font-medium'>5 Maret 2023</p>
                                                            <p className='text-body-3 font-medium'>19:10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* locations */}

                                                {/* divider */}
                                                <div className=' border border-net-2'></div>
                                                {/* divider */}

                                                {/* booking code */}
                                                <div className='flex items-center justify-between'>
                                                    <div>
                                                        <h3 className='text-body-5 font-bold'>Booking Code:</h3>
                                                        <p className='text-body-5 font-normal'>6723y2GHK</p>
                                                    </div>
                                                    <div>
                                                        <h3 className='text-body-5 font-bold'>Class:</h3>
                                                        <p className='text-body-5 font-normal'>Economy</p>
                                                    </div>
                                                    <div>
                                                        <h3 className='text-body-5 font-bold text-pur-5'>IDR 9.850.000</h3>
                                                    </div>
                                                </div>
                                                {/* booking code */}
                                            </div>
                                        );
                                    }
                                })}
                        </div>
                        {/* february */}

                        {/* March */}
                        <div>
                            <h1 className='text-title-2 font-bold'>Maret</h1>
                            {dataShape &&
                                dataShape.map((data, index) => {
                                    if (3 === dayjs(data.booking_date).month() + 1) {
                                        return (
                                            <div
                                                key={index}
                                                className='mt-3 flex w-max cursor-pointer flex-col gap-4 rounded-rad-3 border-2   border-transparent p-4 shadow-low hover:border-2 hover:border-pur-5'>
                                                {/* status */}
                                                <p className='w-max rounded-rad-4 bg-alert-1 px-3 py-1 text-body-6 text-white'>
                                                    {data.status}
                                                </p>
                                                {/* status */}

                                                {/* locations */}
                                                <div className=' flex items-center gap-4 '>
                                                    <div className='flex gap-2'>
                                                        <IoLocationSharp className='h-[24px] w-[24px] text-net-3' />
                                                        <div>
                                                            <p className='text-body-6 font-bold'>Jakarta</p>
                                                            <p className='text-body-3 font-medium'>5 Maret 2023</p>
                                                            <p className='text-body-3 font-medium'>19:10</p>
                                                        </div>
                                                    </div>
                                                    <div className=' '>
                                                        <p className='text-center text-body-4 text-net-3'>4h</p>
                                                        <div className='relative h-[8px] w-[233px]'>
                                                            <Image alt='' src={'./images/arrow.svg'} fill />
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-2'>
                                                        <IoLocationSharp className='h-[24px] w-[24px] text-net-3' />
                                                        <div>
                                                            <p className='text-body-6 font-bold'>Melbourne</p>
                                                            <p className='text-body-3 font-medium'>5 Maret 2023</p>
                                                            <p className='text-body-3 font-medium'>19:10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* locations */}

                                                {/* divider */}
                                                <div className=' border border-net-2'></div>
                                                {/* divider */}

                                                {/* booking code */}
                                                <div className='flex items-center justify-between'>
                                                    <div>
                                                        <h3 className='text-body-5 font-bold'>Booking Code:</h3>
                                                        <p className='text-body-5 font-normal'>6723y2GHK</p>
                                                    </div>
                                                    <div>
                                                        <h3 className='text-body-5 font-bold'>Class:</h3>
                                                        <p className='text-body-5 font-normal'>Economy</p>
                                                    </div>
                                                    <div>
                                                        <h3 className='text-body-5 font-bold text-pur-5'>IDR 9.850.000</h3>
                                                    </div>
                                                </div>
                                                {/* booking code */}
                                            </div>
                                        );
                                    }
                                })}
                        </div>
                        {/* March */}
                    </div>
                    <div className='col-span-5'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center justify-between'>
                                <h1 className='text-title-3  font-bold '>Detail Pesanan</h1>
                                <p className='w-max rounded-rad-4 bg-alert-1 px-3 py-1 text-body-6 text-white'>Issued</p>
                            </div>
                            <h1 className=' text-title'>
                                Booking Code : <span className='font-bold text-pur-5'>6723y2GHK</span>
                            </h1>
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='text-title-2 font-bold'>19:10</h2>
                                    <p className='text-body-6 font-normal'>5 Maret 2023</p>
                                    <p className='text-body-6 font-normal'>Soekarno Hatta</p>
                                </div>
                                <div>
                                    <h3 className='font-bold text-pur-3'>Keberangkaran</h3>
                                </div>
                            </div>
                            {/* divider */}
                            <div className='mb-2 mt-4 flex justify-center'>
                                <div className='w-1/2 border border-net-2'></div>
                            </div>
                            {/* divider */}

                            <div className='flex items-center gap-4'>
                                <div className='relative h-[24px] w-[24px]'>
                                    <Image src={'./images/flight_badge.svg'} fill alt='' />
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div>
                                        <h1 className='text-body-6 font-bold'>Jet Air - Economy</h1>
                                        <h2 className='text-body-5 font-bold'>JT - 203</h2>
                                    </div>
                                    <div>
                                        <h3 className='text-body-5 font-bold'>Informasi :</h3>
                                        <p className='text-body-5 font-normal'>Penumpang 1: Mr.Arief</p>
                                        <p className='text-body-5 font-normal'>ID: 1234567</p>
                                        <p className='text-body-5 font-normal'>Penumpang 2: Mr.Alexa</p>
                                        <p className='text-body-5 font-normal'>ID: 1234567</p>
                                    </div>
                                </div>
                            </div>
                            {/* divider */}
                            <div className='mb-2 mt-4 flex justify-center'>
                                <div className='w-1/2 border-[1px] border-t-net-2'></div>
                            </div>
                            {/* divider */}
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='text-title-2 font-bold'>21:10</h2>
                                    <p className='text-body-6 font-normal'>Melbourne International Airport</p>
                                    <p className='text-body-6 font-normal'>Soekarno Hatta</p>
                                </div>
                                <div>
                                    <h3 className='font-bold text-pur-3'>Kedatangan</h3>
                                </div>
                            </div>
                            {/* divider */}
                            <div className='mb-2 mt-4 flex justify-center'>
                                <div className='w-full border-[1px] border-t-net-2'></div>
                            </div>
                            {/* divider */}
                            <h1 className='text-body-6 font-bold'>Rincian Harga : </h1>
                            <div className='flex justify-between'>
                                <div className='text-body-6'>
                                    <p>2 Adults</p>
                                    <p>1 Baby</p>
                                    <p>TAX</p>
                                </div>
                                <div className='text-body-6'>
                                    <p>IDR 9.550.000</p>
                                    <p>IDR 0</p>
                                    <p>IDR 300.000</p>
                                </div>
                            </div>
                            {/* divider */}
                            <div className='mb-2 mt-4 flex justify-center'>
                                <div className='w-full border-[1px] border-t-net-2'></div>
                            </div>
                            {/* divider */}
                            <div className='flex justify-between text-title-3 font-bold'>
                                <p>Total</p>
                                <p className='text-pur-5'>IDR 9.850.000</p>
                            </div>
                            <Button className='w-full rounded-rad-3 bg-pur-4 py-[18px] text-head-1 font-medium text-white'>
                                Simpan
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
