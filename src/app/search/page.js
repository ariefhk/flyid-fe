'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import Navbar from '@/components/Navbar';
import HomeSearch from '@/components/HomeSearch';
import { getOneWay, getFlightClass, getTotalPassenger } from '@/store/flight';

const getDateInRange = () => {
    // const d1 = new Date('2023-05-28');
    const d1 = new Date();
    d1.setHours(0, 0, 0, 0);
    const d2 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate() + 7);

    return new Promise((resolve, reject) => {
        // const date = new Date(startDate.getTime());
        const date = new Date(d1.getTime());
        let angka = 1;
        const dates = [];

        while (date <= d2) {
            dates.push({
                id: angka + dates.length,
                date: new Date(date),
                active: false,
            });

            date.setDate(date.getDate() + 1);
        }

        resolve(dates);
    });
};

export default function SearchFlight() {
    const router = useRouter();
    // redux setup
    const { from, to, derpatureDateTime, arrivalDateTime } = useSelector(getOneWay);
    const totalPassenger = useSelector(getTotalPassenger);
    const flighClass = useSelector(getFlightClass);
    // redux setup

    // open homesearch
    const [openHomeSearch, setOpenHomeSearch] = useState(false);
    const handleOpenHomeSearch = () => setOpenHomeSearch(!openHomeSearch);
    // open homesearch

    const [values, setValues] = useState([]);
    const [selectDate, setSelectDate] = useState(0);
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];
    useEffect(() => {
        async function rangeOfDates() {
            const date = await getDateInRange();
            setValues(date);
        }
        rangeOfDates();
    }, []);

    const modifyDate = (value) => {
        // rangeOfDates = rangeOfDates.map((val) => (val.id === value.id ? (val.active = true) : val));
        let finValue = values.find((test) => test.active === true);

        if (finValue) {
            const rangeNew = values.map((val) => (val.id === finValue.id ? { ...val, active: false } : val));
            setValues(rangeNew);
        }

        const range = values.map((val) => (val.id === value.id ? { ...val, active: true } : val));

        setSelectDate(value);
    };

    console.log(selectDate);

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
                            <div key={index} className='col-span-1 cursor-pointer  px-2' onClick={() => modifyDate(val.date)}>
                                <div
                                    className={`${
                                        val.date === selectDate ? 'bg-[#A06ECE] text-white' : 'text-[#151515]'
                                    } flex flex-col items-center justify-center rounded-[8px] px-[22px] py-[4px] font-poppins`}>
                                    <h3 className='text-[14px] font-bold'>
                                        {val.date.toLocaleDateString('id-ID', { weekday: 'long' })}
                                    </h3>
                                    <p
                                        className={`${
                                            val.date === selectDate ? 'text-white' : 'text-[#8A8A8A]'
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
                    <div className='col-span-4  bg-green-200'>
                        <h1 className='font-poppins text-title-3 font-bold'>Your Flight</h1>
                        <div></div>
                    </div>
                    <div className='col-span-8 bg-red-200'>
                        <div>
                            <h1>Test</h1>
                        </div>
                    </div>
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
                                    onClick={() => handleOpenHomeSearch()}
                                />
                            }
                            handleActionHomeSearch={() => {
                                router.refresh();
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
