'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FiArrowLeft, FiChevronRight, FiBox, FiHeart, FiDollarSign } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

// dayjs
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);
// dayjs

import { getDateInRange } from '@/utils/getDateInRange';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import HomeSearch from '@/components/HomeSearch';
import { getOneWay, getFlightClass, getTotalPassenger, getDisplayDerpatureDatetime, flightSlice } from '@/store/flight';

export default function SearchFlight() {
    const router = useRouter();
    const dispatch = useDispatch();
    // redux setup
    const { from, to, derpatureDateTime, arrivalDateTime } = useSelector(getOneWay);
    const { setDerpatureDateTime } = flightSlice.actions;
    const totalPassenger = useSelector(getTotalPassenger);
    const flighClass = useSelector(getFlightClass);
    const displayDerpatureDateTime = useSelector(getDisplayDerpatureDatetime);
    // redux setup

    // open homesearch
    const [openHomeSearch, setOpenHomeSearch] = useState(false);
    const handleOpenHomeSearch = () => setOpenHomeSearch(!openHomeSearch);
    const [isSearchAgain, setIsSearchAgain] = useState(false);
    // open homesearch

    const [values, setValues] = useState([]);
    const [selectDate, setSelectDate] = useState(new Date(displayDerpatureDateTime) || '');

    useEffect(() => {
        const date = getDateInRange(displayDerpatureDateTime);
        setValues(date);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isSearchAgain) {
            const date = getDateInRange(displayDerpatureDateTime);
            setValues(date);
            setSelectDate(new Date(displayDerpatureDateTime));
            setIsSearchAgain(false);
        }
    }, [isSearchAgain, displayDerpatureDateTime]);

    const chooseDate = (value) => {
        setSelectDate(value);
        dispatch(setDerpatureDateTime(dayjs(value).tz('Asia/Jakarta').format()));
    };

    console.log('====================================');
    // const testDate = new Date(displayDerpatureDateTime);
    // const testDate2 = new Date(testDate.getTime());
    // const testDate3 = new Date(testDate2);
    // console.log(testDate3);
    // console.log('H1: ', selectDate);
    // if (values.length) {
    //     console.log('H2:', new Date(values[0].date).getDate() === new Date(selectDate).getDate());
    // }
    // console.log(new Date(values[0].date) === new Date(selectDate));
    // console.log(values);
    console.log('====================================');

    const dataShape = [
        {
            id: 1,
            airline: 'Super Air Jet', //airline_name
            airline_code: 'JT- 203', //airline_code
            flight_class: 'Economy',
            from: 'Soekarno-Hatta', //airport_name
            from_code: 'CGK', //airport_code
            to: 'Melbourne International Airport',
            to_code: 'MLB',
            derpature_date: '2023-03-03',
            derpature_time: '07:00',
            arrival_date: '2023-03-03',
            arrival_time: '11:00',
            price: 4950000,
            description: 'baggage 20 kg Cabin baggage 20 kg In Flight Entertainment',
        },
        {
            id: 2,
            airline: 'Super Air Jet',
            airline_code: 'JT- 203',
            flight_class: 'Economy',
            from: 'Soekarno-Hatta',
            from_code: 'CGK',
            to: 'Melbourne International Airport',
            to_code: 'MLB',
            derpature_date: '2023-03-03',
            derpature_time: '08:00',
            arrival_date: '2023-03-03',
            arrival_time: '12:00',
            price: 5950000,
            description: 'baggage 20 kg Cabin baggage 20 kg In Flight Entertainment',
        },
        {
            id: 3,
            airline: 'Super Air Jet',
            airline_code: 'JT- 203',
            flight_class: 'Economy',
            from: 'Soekarno-Hatta',
            from_code: 'CGK',
            to: 'Melbourne International Airport',
            to_code: 'MLB',
            derpature_date: '2023-03-03',
            derpature_time: '13:15',
            arrival_date: '2023-03-03',
            arrival_time: '17:15',
            price: 7225000,
            description: 'baggage 20 kg Cabin baggage 20 kg In Flight Entertainment',
        },
        {
            id: 4,
            airline: 'Super Air Jet',
            airline_code: 'JT- 203',
            flight_class: 'Economy',
            from: 'Soekarno-Hatta',
            from_code: 'CGK',
            to: 'Melbourne International Airport',
            to_code: 'MLB',
            derpature_date: '2023-03-03',
            derpature_time: '20:15',
            arrival_date: '2023-03-03',
            arrival_time: '23:30',
            price: 8010000,
            description: 'baggage 20 kg Cabin baggage 20 kg In Flight Entertainment',
        },
    ];

    return (
        <>
            <Navbar className={'hidden lg:block'} />
            <div className='container mx-auto grid max-w-screen-lg grid-cols-12 gap-3'>
                {/* search flight menu start */}
                <h1 className='col-span-12 mb-[24px] mt-[47px] font-poppins text-head-1 font-bold'>Pilih Penerbangan</h1>
                <div className='col-span-9 flex items-center gap-4 rounded-rad-3 bg-pur-3 font-poppins text-title-2 font-medium text-white'>
                    <FiArrowLeft className='ml-[21px] h-6 w-6' onClick={() => router.back()} />
                    <p>
                        {from} {' > '} {to} - {totalPassenger} Penumpang - {flighClass}
                    </p>
                </div>
                <div
                    className=' col-span-3 cursor-pointer rounded-rad-3 bg-alert-1 py-[13px] text-center font-poppins text-title-2 font-bold text-white'
                    onClick={() => handleOpenHomeSearch()}>
                    <p>Ubah Pencarian</p>
                </div>
                {/* search flight menu end */}

                {/* day of week start */}
                <div className='col-span-12 grid grid-cols-8 divide-x-2'>
                    {values.length ? (
                        values.map((val, index) => (
                            <div key={index} className='col-span-1 cursor-pointer  px-2' onClick={() => chooseDate(val.date)}>
                                <div
                                    className={`${
                                        new Date(val.date).getDate() === new Date(selectDate).getDate()
                                            ? 'bg-[#A06ECE] text-white'
                                            : 'text-[#151515]'
                                    } flex flex-col items-center justify-center rounded-[8px] px-[22px] py-[4px] font-poppins`}>
                                    <h3 className='text-[14px] font-bold'>
                                        {val.date.toLocaleDateString('id-ID', { weekday: 'long' })}
                                    </h3>
                                    <p
                                        className={`${
                                            new Date(val.date).getDate() === new Date(selectDate).getDate()
                                                ? 'text-white'
                                                : 'text-[#8A8A8A]'
                                        } text-[12px] font-normal`}>
                                        {val.date.toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>Loadinggg</h1>
                    )}
                </div>
                {/* day of week end */}

                {/* one way start  & list flight*/}
                <div className='col-span-12  mt-[40px] grid grid-cols-12 gap-10'>
                    <div className='col-span-12 flex justify-end'>
                        <Button className='flex items-center gap-2 rounded-rad-4 border border-pur-4 px-3 py-2 font-poppins text-body-3  font-medium text-pur-4'>
                            <RiArrowUpDownLine /> Termurah
                        </Button>
                    </div>
                    {/* left flight start */}
                    <div className='col-span-4'>
                        <h1 className='font-poppins text-title-3 font-bold'>Your Flight</h1>
                        <div className=' rounded-rad-4  px-6 py-6 font-poppins shadow-low'>
                            <h3 className='mb-[24px]'>Filter</h3>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center justify-between border border-b-[1px] border-l-0 border-r-0 border-t-0 border-net-2 py-2'>
                                    <p className='flex items-center gap-3'>
                                        <FiBox /> Transit
                                    </p>
                                    <FiChevronRight />
                                </div>
                                <div className='flex items-center justify-between border border-b-[1px] border-l-0 border-r-0 border-t-0 border-net-2 py-2'>
                                    <p className='flex items-center gap-3'>
                                        <FiHeart /> Fasilitas
                                    </p>
                                    <FiChevronRight />
                                </div>
                                <div className='flex items-center justify-between border border-b-[1px] border-l-0 border-r-0 border-t-0 border-net-2 py-2'>
                                    <p className='flex items-center gap-3'>
                                        <FiDollarSign /> Harga
                                    </p>
                                    <FiChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* left flight end */}

                    {/* right fligth start */}
                    <div className='col-span-8 bg-red-200'>
                        <div>{dataShape.length && dataShape.map((data, index) => <div key={index}></div>)}</div>
                    </div>
                    {/* right fligth end */}
                </div>
                {/* one way  end & list flight*/}
            </div>

            {/* ======= Modal and Pop  start ====== */}
            {/* homeSearch  start */}
            <div>
                {openHomeSearch && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'>
                        <HomeSearch
                            className={'h-[298px] w-[968px]'}
                            buttonAction={
                                <FiX
                                    className='absolute right-0 mr-3 mt-2 h-[28px] w-[28px]'
                                    onClick={() => {
                                        handleOpenHomeSearch();
                                        setIsSearchAgain(!isSearchAgain);
                                    }}
                                />
                            }
                            handleActionHomeSearch={() => {
                                router.refresh();
                                setIsSearchAgain(!isSearchAgain);
                                handleOpenHomeSearch();
                            }}
                        />
                    </div>
                )}
            </div>
            {/* homeSearch  end */}
            {/* ======= Modal and Pop  end ====== */}
        </>
    );
}
