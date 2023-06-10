'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import HomeSearch from '@/components/HomeSearch';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { FiSearch } from 'react-icons/fi';
import ToggleRotate from '@/components/ToggleRotate';

// homeSearch start
import Label from '@/components/Label';
// import Input from './Input';
// import Button from './Button';
// import ToggleRotate from './ToggleRotate';
import ToggleSwitch from '@/components/ToggleSwitch';
import { MdFlightTakeoff, MdDateRange, MdAirlineSeatReclineNormal } from 'react-icons/md';
// homeSearch end

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getAllAirport,
    getfilteredFromAirport,
    getfilteredToAirport,
    getAirportFrom,
    getAirportTo,
    fetchAirport,
    getAirportStatus,
    flightSlice,
    getAirportError,
} from '../store/flight';

export default function Home() {
    const dispatch = useDispatch();
    const { filteredFromAirport, filteredToAirport, setFromAirport, setToAirport, switchFromToAirportPosition } =
        flightSlice.actions;

    // for filtered input
    const fromAirports = useSelector(getfilteredFromAirport);
    const toAirports = useSelector(getfilteredToAirport);

    // for selected from/to airport
    const from = useSelector(getAirportFrom);
    const to = useSelector(getAirportTo);
    const loading = useSelector(getAirportStatus);
    const error = useSelector(getAirportError);

    // handling local state input
    const [searchFrom, setSearchFrom] = useState('');
    const [searchTo, setSearchTo] = useState('');
    const [searchFromResults, setSearchFromResults] = useState([]);
    const [searchToResults, setSearchToResults] = useState([]);

    // handling focusing input
    const [focusFromInput, setFocusFromInput] = useState(false);
    const [focusToInput, setFocusToInput] = useState(false);

    // toggle rotate
    const [isToggle, setIsToggle] = useState(false);
    const handleToggleAction = () => {
        dispatch(switchFromToAirportPosition());
        setSearchTo(from);
        setSearchFrom(to);
        setIsToggle(!isToggle);
    };

    // handling input on change
    const handleFromInputChange = (event) => {
        setSearchFrom(event.target.value);
        dispatch(filteredFromAirport(event.target.value));
    };
    const handleToInputChange = (event) => {
        setSearchTo(event.target.value);
        dispatch(filteredToAirport(event.target.value));
    };

    // handling choosing one from/to airport
    const handleChooseFromAirport = (value) => {
        dispatch(setFromAirport(value));
        setFocusFromInput(false);
    };
    const handleChooseToAirport = (value) => {
        dispatch(setToAirport(value));
        setFocusToInput(false);
    };

    // handling effect for executing data
    useEffect(() => {
        if (loading === 'idle') {
            dispatch(fetchAirport());
        }
    }, [loading, dispatch]);

    useEffect(() => {
        const results = fromAirports;
        setSearchFromResults(results);
    }, [fromAirports]);

    useEffect(() => {
        const results = toAirports;
        setSearchToResults(results);
    }, [toAirports]);

    return (
        <>
            <Navbar className={'hidden lg:block'} />
            <div className=' mt-8 hidden h-[232px] grid-cols-12  lg:grid'>
                <div className='relative col-span-12 '>
                    <Image src={'./images/banner.svg'} alt='' fill={true} quality={100} />
                </div>
            </div>

            {/* home search desktop start */}
            <div className='container mx-auto mt-[-50px] hidden h-[292px] max-w-screen-lg lg:block'>
                <div className={` relative h-full w-full overflow-hidden rounded-rad-3 bg-white shadow-high`}>
                    <div className='mx-8 my-6'>
                        {/* home search title start */}
                        <h1 className='font-poppins text-head-1 font-bold'>
                            Pilih Jadwal Penerbangan spesial di <span className='text-pur-5'>Tiketku!</span>
                        </h1>
                        {/* home search title end */}

                        {/* home search menu start */}
                        <div className='mt-5 grid grid-cols-12'>
                            {/* menu left start */}
                            <div className='col-span-5 flex flex-col gap-7'>
                                <div className='flex gap-8'>
                                    {/* from start */}
                                    <div className='flex items-center gap-2'>
                                        <MdFlightTakeoff className='h-[24px] w-[24px] text-net-3' />
                                        <p className='font-poppins text-body-6 font-normal text-net-3'>From</p>
                                    </div>
                                    <div className='relative'>
                                        <Input
                                            className='border-[1px] border-l-0 border-r-0 border-t-0 border-b-net-2  py-3 font-poppins text-title-3 font-medium'
                                            // value={'Jakarta (JKTA)'}
                                            placeholder={'Silahkan pilih lokasi...'}
                                            value={searchFrom}
                                            onFocus={() => setFocusFromInput(true)}
                                            onChange={handleFromInputChange}
                                        />
                                        {focusFromInput && (
                                            <div className='absolute z-10 flex h-[100px] w-full flex-col  gap-2 overflow-y-scroll bg-white'>
                                                {searchFromResults.length ? (
                                                    searchFromResults.map((data, index) => (
                                                        <div
                                                            onClick={() => {
                                                                handleChooseFromAirport(data.airport_code);
                                                                setSearchFrom(`${data.airport_location} (${data.airport_code})`);
                                                            }}
                                                            key={index}
                                                            className='cursor-pointer bg-pur-3 p-3 font-poppins text-white'>
                                                            {data.airport_location} ({data.airport_code})
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className='text-head-1-5 pt-2 font-poppins font-semibold'>
                                                        <h1>Inputkan Lokasi...</h1>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* from end*/}
                                </div>
                                <div className='flex gap-8'>
                                    <div className='flex items-center gap-2'>
                                        <MdDateRange className='h-[24px] w-[24px] text-net-3' />
                                        <p className='font-poppins text-body-6 font-normal text-net-3'>Date</p>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div className=''>
                                            <Label
                                                className='font-poppins text-title-2 font-medium text-net-3'
                                                htmlFor={'derpature'}>
                                                Derpature
                                            </Label>
                                            <Input
                                                id={'derpature'}
                                                className='border-[1px] border-l-0 border-r-0 border-t-0 border-b-net-2  py-2 font-poppins text-title-3 font-medium'
                                                value={'1 Maret 2023'}
                                            />
                                        </div>
                                        <div>
                                            <div className='relative flex items-center justify-between'>
                                                <Label
                                                    className='font-poppins text-title-2 font-medium text-net-3'
                                                    htmlFor={'return'}>
                                                    Return
                                                </Label>
                                                <ToggleSwitch id={'toggle'} className={'absolute right-[-36px]'} />
                                            </div>
                                            <Input
                                                id={'return'}
                                                className='border-[1px] border-l-0 border-r-0 border-t-0 border-b-net-2 py-3  font-poppins text-body-6 font-medium text-pur-5'
                                                value={'Pilih Tanggal'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* menu left end */}

                            {/* toggleRotate start */}
                            <div className='col-span-2 flex items-start justify-center pt-5 '>
                                <ToggleRotate isToggle={isToggle} handleToggleAction={handleToggleAction} />
                            </div>
                            {/* toggleRotate start */}

                            {/* menu right start */}
                            <div className='col-span-5 flex flex-col gap-7'>
                                <div className='flex gap-8'>
                                    {/* to start */}
                                    <div className='flex items-center gap-3'>
                                        <MdFlightTakeoff className='h-[24px] w-[24px] text-net-3' />
                                        <p className='font-poppins text-body-6 font-normal text-net-3'>To</p>
                                    </div>

                                    <div className='relative'>
                                        <Input
                                            className='border-[1px] border-l-0 border-r-0 border-t-0 border-b-net-2 px-2 py-3 font-poppins text-title-3 font-medium text-black'
                                            // value={'Melbourne (MLB)'}
                                            placeholder={'Silahkan pilih lokasi...'}
                                            onFocus={() => setFocusToInput(true)}
                                            value={searchTo}
                                            onChange={handleToInputChange}
                                        />
                                        {focusToInput && (
                                            <div className='absolute z-10 flex h-[100px] w-full flex-col  gap-2 overflow-y-scroll bg-white'>
                                                {searchToResults.length ? (
                                                    searchToResults.map((data, index) => (
                                                        <div
                                                            onClick={() => {
                                                                handleChooseToAirport(data.airport_code);
                                                                setSearchTo(`${data.airport_location} (${data.airport_code})`);
                                                            }}
                                                            key={index}
                                                            className='cursor-pointer bg-pur-3 p-3 font-poppins text-white'>
                                                            {data.airport_location} ({data.airport_code})
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className='text-head-1-5 pt-2 font-poppins font-semibold'>
                                                        <h1>Inputkan Lokasi...</h1>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* to end */}
                                </div>
                                <div className='flex gap-8'>
                                    <div className='flex items-center gap-3'>
                                        <MdAirlineSeatReclineNormal className='h-[24px] w-[24px] text-net-3' />
                                        <p className='font-poppins text-body-6 font-normal text-net-3'>To</p>
                                    </div>

                                    <div className=''>
                                        <Label className='font-poppins text-title-2 font-medium text-net-3' htmlFor={'passenger'}>
                                            Passengers
                                        </Label>
                                        <Input
                                            id={'passenger'}
                                            className='border-[1px] border-l-0 border-r-0 border-t-0 border-b-net-2  py-2 font-poppins text-title-3 font-medium'
                                            value={'2 Penumpang'}
                                        />
                                    </div>
                                    <div className=''>
                                        <Label className='font-poppins text-title-2 font-medium text-net-3' htmlFor={'seat'}>
                                            Seat Class
                                        </Label>
                                        <Input
                                            id={'seat'}
                                            className='border-[1px] border-l-0 border-r-0 border-t-0 border-b-net-2  py-2 font-poppins text-title-3 font-medium'
                                            value={'Business'}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* menu right end */}
                        </div>
                        {/* home search menu end */}
                    </div>
                    <Button className='absolute bottom-0 w-full bg-pur-4 py-3 text-title-2 font-bold text-white hover:bg-pur-3'>
                        Cari Penerbangan
                    </Button>
                </div>
            </div>

            {/* home search desktop end */}

            {/* <Input value={searchTerm} onChange={handleChange} onFocus={() => setFocus(true)} placeholder={'Pilih Tujuan Anda'} />
            <div>
                {hasFocus && (
                    <div className='flex flex-col gap-5 m-5'>
                        {searchResults &&
                            searchResults.map((data, index) => (
                                <div
                                    onClick={() => {
                                        handleChooseAirport(data.airport_code);
                                        setSearchTerm(`${data.airport_name} (${data.airport_code})`);
                                    }}
                                    key={index}
                                    className='p-3 text-white w-max rounded-rad-2 bg-pur-3'>
                                    {data.airport_location} ({data.airport_code})
                                </div>
                            ))}
                    </div>
                )}
            </div>
            <div>
                <ToggleRotate isToggle={isToggle} handleToggleAction={handleToggleAction} />
            </div>
            <Input
                value={searchTo}
                onChange={handleChangeTo}
                onFocus={() => setFocusTo(true)}
                placeholder={'Pilih Tujuan Anda'}
            />
            <div>
                {hasFocusTo && (
                    <div className='flex flex-col gap-5 m-5'>
                        {searchResultsTo &&
                            searchResultsTo.map((data, index) => (
                                <div
                                    onClick={() => {
                                        handleChooseToAirport(data.airport_code);
                                        setSearchTo(`${data.airport_name} (${data.airport_code})`);
                                    }}
                                    key={index}
                                    className='p-3 text-white w-max rounded-rad-2 bg-pur-3'>
                                    {data.airport_location} ({data.airport_code})
                                </div>
                            ))}
                    </div>
                )}
            </div> */}
        </>
    );
}
