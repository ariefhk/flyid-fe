'use client';

import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { FiArrowLeft, FiChevronRight, FiBox, FiHeart, FiDollarSign } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import Image from 'next/image';

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
import ChooseFilterTicketModal from '@/components/ChooseFilterTicketModal';
import {
    getOneWay,
    getTwoWay,
    getFlightClass,
    getTotalPassenger,
    getDisplayDerpatureDatetime,
    flightSlice,
    getFlights,
    fetchFlight,
    getFlightFetchStatus,
} from '@/store/flight';

const extractWord = (words) => {
    const text = words
        .split(/((?:\w+ ){3})/g)
        .filter(Boolean)
        .join('\n');
    const lines = text.split(/\n/);

    console.log('ini', text);
    const withBreaks = lines.flatMap((line, index) =>
        index > 0 ? [<br key={`br-${index}`} />, <Fragment key={index}>{line}</Fragment>] : [line]
    );

    return withBreaks;
};

export default function SearchFlight() {
    const router = useRouter();
    const dispatch = useDispatch();

    // modal filter ticket start
    const [openChooseFilterFlight, setOpenChooseFilterFlight] = useState(false);
    const handleOpenChooseFilterFlight = () => setOpenChooseFilterFlight(!openChooseFilterFlight);
    // modal filter ticket end

    // detail
    const [isDetail, setIsDetail] = useState(false);
    const [chosenDetailFlight, setChosenDetailFlight] = useState(0);
    const handleIsDetail = (id) => {
        setIsDetail(!isDetail);
        setChosenDetailFlight(id);
    };
    // detail
    // redux setup
    const oneWay = useSelector(getOneWay);
    const { from, to, derpature_date, derpature_time } = useSelector(getOneWay);
    const twoWay = useSelector(getTwoWay);
    const { setDerpatureDateTime, setFetchFlightStatus } = flightSlice.actions;
    const totalPassenger = useSelector(getTotalPassenger);
    const flighClass = useSelector(getFlightClass);
    const flights = useSelector(getFlights);
    const loadingFetchFligth = useSelector(getFlightFetchStatus);

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

    const myObj = {
        from: 'Jakarta',
        to: 'Bali',
        departure_date: '2023-06-12',
        departure_time: '07:00',
        returnDate: '',
    };

    // flight start
    useEffect(() => {
        // console.log('test', loadingFetchFligth);
        if (loadingFetchFligth === 'idle') {
            dispatch(
                // fetchFlight({
                //     from: from,
                //     to: to,
                //     departure_date: derpature_date,
                //     departure_time: derpature_time,
                //     returnDate: twoWay.derpature_date,
                // })
                fetchFlight(myObj)
            );
        }
        // const date = getDateInRange(displayDerpatureDateTime);
        // setValues(date);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, loadingFetchFligth]);
    // flight end

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
        dispatch(setFetchFlightStatus('idle'));
    };

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
            description: 'baggage 20 kg Cabin baggage 20kg In Flight Entertainment',
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

    console.log('====================================');
    // console.log(flights);
    console.log('one way: ', oneWay);
    console.log('two way: ', twoWay);
    console.log('====================================');

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
                            <div key={index} className='col-span-1 cursor-pointer px-2' onClick={() => chooseDate(val.date)}>
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
                <div className='col-span-12  mt-[40px] grid grid-cols-12 gap-10 font-poppins'>
                    <div className='col-span-12 flex justify-end'>
                        <Button
                            onClick={() => handleOpenChooseFilterFlight()}
                            className='flex items-center gap-2 rounded-rad-4 border border-pur-4 px-3 py-2 font-poppins text-body-3 font-medium text-pur-4'>
                            <RiArrowUpDownLine /> Termurah
                        </Button>
                    </div>
                    {/* left flight start */}
                    <div className='col-span-4'>
                        {/* <h1 className='font-bold font-poppins text-title-3'>Your Flight</h1>

                        <div className='px-6 py-3 my-4 rounded-rad-3 shadow-low'>
                            <h1 className='font-bold text-title-2'>One Way</h1>
                            <div></div>
                        </div> */}
                        {/* left filter start */}
                        <div className='rounded-rad-4 px-6 py-6 font-poppins shadow-low'>
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
                        {/* left filter end */}
                    </div>
                    {/* left flight end */}

                    {/* right fligth start */}
                    <div className='col-span-8 font-poppins'>
                        <div className='flex flex-col gap-4'>
                            {dataShape.length &&
                                dataShape.map((data, index) => (
                                    <div key={index} className='flex flex-col gap-2 rounded-rad-3 p-4 shadow-low'>
                                        {/* list top start */}
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <div className='relative h-[24px] w-[24px] '>
                                                    <Image src={'./images/flight_badge.svg'} fill alt='' />
                                                </div>
                                                <h3 className='text-body-5 font-medium'>
                                                    {data.airline} - {data.flight_class}
                                                </h3>
                                            </div>
                                            <div onClick={() => handleIsDetail(data.id)}>
                                                {isDetail ? (
                                                    <IoIosArrowDropup className='h-[28px] w-[28px] text-net-3' />
                                                ) : (
                                                    <IoIosArrowDropdown className='h-[28px] w-[28px] text-net-3' />
                                                )}
                                            </div>
                                        </div>
                                        {/* list top end */}
                                        {/* list bottom start */}
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-4'>
                                                <div>
                                                    <p className='text-body-6 font-bold'>{data.derpature_time}</p>
                                                    <p className='text-body-3 font-medium'>{data.from_code}</p>
                                                </div>
                                                <div className='flex flex-col items-center justify-center'>
                                                    <p className='text-body-4 text-net-3'>4h 0m</p>
                                                    <div className='relative h-[8px] w-[233px]'>
                                                        <Image alt='' src={'./images/arrow.svg'} fill />
                                                    </div>
                                                    <p className='text-body-4 text-net-3'>Direct</p>
                                                </div>
                                                <div>
                                                    <p className='text-body-6 font-bold'>{data.arrival_time}</p>
                                                    <p className='text-body-3 font-medium'>{data.to_code}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-[6px] text-title-2'>
                                                <p className='font-bold text-pur-4'>IDR {data.price}</p>
                                                <Button className='rounded-rad-3 bg-pur-4 py-1 font-medium text-white'>
                                                    Pilih
                                                </Button>
                                            </div>
                                        </div>
                                        {/* list bottom end */}

                                        {isDetail && chosenDetailFlight === data.id && (
                                            <div className='mt-5 border-[1px] border-b-0 border-l-0 border-r-0 border-t-net-3'>
                                                <h1 className='mb-1 mt-[22px] text-body-6 font-bold text-pur-5'>
                                                    Detail Penerbangan
                                                </h1>
                                                {/* detail flight from start */}
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <h2 className='text-title-2 font-bold'>{data.derpature_time}</h2>
                                                        <p className='text-body-6 font-normal'>{data.derpature_date}</p>
                                                        <p className='text-body-6 font-normal'>{data.from}</p>
                                                    </div>
                                                    <div>
                                                        <h3 className='font-bold text-pur-3'>Keberangkaran</h3>
                                                    </div>
                                                </div>
                                                {/* divided start */}
                                                <div className='mb-2 mt-4 flex justify-center'>
                                                    <div className='w-1/2 border-[1px] border-t-net-2'></div>
                                                </div>
                                                {/* divided end */}

                                                <div className='flex items-center gap-4'>
                                                    <div className='relative h-[24px] w-[24px]'>
                                                        <Image src={'./images/flight_badge.svg'} fill alt='' />
                                                    </div>
                                                    <div className='flex flex-col gap-4'>
                                                        <div>
                                                            <h1 className='text-body-6 font-bold'>
                                                                {data.airline} - {data.flight_class}
                                                            </h1>
                                                            <h2 className='text-body-5 font-bold'>{data.airline_code}</h2>
                                                        </div>
                                                        <div>
                                                            <h3 className='text-body-5 font-bold'>Informasi :</h3>
                                                            <p className='text-body-5 font-normal'>
                                                                {extractWord(data.description)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* divided start */}
                                                <div className='mb-2 mt-4 flex justify-center'>
                                                    <div className='w-1/2 border-[1px] border-t-net-2'></div>
                                                </div>
                                                {/* divided end */}
                                                {/* detail flight from start */}
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <h2 className='text-title-2 font-bold'>{data.arrival_time}</h2>
                                                        <p className='text-body-6 font-normal'>{data.arrival_date}</p>
                                                        <p className='text-body-6 font-normal'>{data.to}</p>
                                                    </div>
                                                    <div>
                                                        <h3 className='font-bold text-pur-3'>Kedatangan</h3>
                                                    </div>
                                                </div>
                                                {/* divided start */}
                                                {/* detail flight from end */}
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
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
                                dispatch(setFetchFlightStatus('idle'));
                            }}
                        />
                    </div>
                )}
            </div>
            {/* homeSearch  end */}

            {/* filtet flight start */}
            <div>
                {openChooseFilterFlight && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'>
                        <ChooseFilterTicketModal open={openChooseFilterFlight} handleOpen={handleOpenChooseFilterFlight} />
                    </div>
                )}
            </div>
            {/* filtet flight end */}
            {/* ======= Modal and Pop  end ====== */}
        </>
    );
}
