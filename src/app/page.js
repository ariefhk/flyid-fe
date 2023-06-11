'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import HomeSearch from '@/components/HomeSearch';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { FiSearch } from 'react-icons/fi';
import ToggleRotate from '@/components/ToggleRotate';

import ChoosePassengerTypeModal from '@/components/ChoosePassengerModal';
import ChooseFlightClassModal from '@/components/ChooseFlightClassModal';

// homeSearch start
import Label from '@/components/Label';
// import Input from './Input';
// import Button from './Button';
// import ToggleRotate from './ToggleRotate';
import ToggleSwitch from '@/components/ToggleSwitch';
import { MdFlightTakeoff, MdDateRange, MdAirlineSeatReclineNormal } from 'react-icons/md';
// homeSearch end

// calendar start
import CalendarPicker from '@/components/CalendarPicker';
import CalendarRangePicker from '@/components/CalendarRangePicker';
// calendar end

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
    getFligthClass,
    getTotalPassenger,
} from '../store/flight';

// Formatting Dates
const formatToLocale = (date) => {
    if (!date) return false;

    const option = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    };
    return new Date(date).toLocaleDateString('id', option);
};

export default function Home() {
    const dispatch = useDispatch();
    const {
        filteredFromAirport,
        filteredToAirport,
        setFromAirport,
        setToAirport,
        switchFromToAirportPosition,
        setFlightClass,
        setTotalPassenger,
    } = flightSlice.actions;

    // passenger start
    const [openPassengerModal, setOpenPassengerModal] = useState(false);
    const handleOpenPassengerModal = () => setOpenPassengerModal(!openPassengerModal);
    const handleActionPassengerModal = () => {
        setOpenPassengerModal(!openPassengerModal);
    };
    // passenger end

    // flight class start
    // const flightClass = useSelector(getFligthClass);
    const [openFlightClassModal, setOpenFlightClassModal] = useState(false);
    const [pickedFlightClass, setPickedFlightClass] = useState('');
    const handleOpenFlightClassModal = () => setOpenFlightClassModal(!openFlightClassModal);
    const handleActionFlightClassModal = (flightClass) => {
        dispatch(setFlightClass(flightClass));
        setPickedFlightClass(flightClass);
        setOpenFlightClassModal(!openFlightClassModal);
    };
    // flight class end

    // calendar start
    const [isToggleCalendar, setIsToggleCalendar] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [openCalendarRange, setOpenCalendarRange] = useState(false);
    const [pickedDate, setPickedDate] = useState(new Date());
    const [pickedRangeDate, setPickedRangeDate] = useState(new Date());
    const handleOpenCalendar = () => setOpenCalendar(!openCalendar);
    const handleOpenCalendarRange = () => setOpenCalendarRange(!openCalendarRange);

    const fly = {
        derpatures: pickedDate,
        returns: new Date(pickedRangeDate[1]).getDate() === new Date(pickedRangeDate[0]).getDate() ? '' : pickedRangeDate[1],
    };

    const handlePickedDate = (date) => {
        setPickedDate(date);
        setPickedRangeDate((prev) => (prev === date ? [date] : date));
        handleOpenCalendar();
    };
    const handlePickedRangeDate = (date) => {
        setPickedRangeDate((prev) => (prev[0] !== pickedDate ? [pickedDate, date] : [pickedRangeDate[0], date]));
        handleOpenCalendarRange();
    };
    const handleCalendarToggleAction = () => {
        if (pickedRangeDate.length > 0) {
            setPickedRangeDate([]);
        }
        setIsToggleCalendar(!isToggleCalendar);
    };
    // calendar end

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
            <div className='container mx-auto mt-[-50px] hidden h-[292px]  max-w-screen-lg  lg:block'>
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
                                                readOnly
                                                value={formatToLocale(fly.derpatures)}
                                                onClick={handleOpenCalendar}
                                                className='cursor-pointer border-[1px] border-l-0 border-r-0 border-t-0  border-b-net-2 py-2 font-poppins text-title-3 font-medium'
                                            />
                                        </div>
                                        <div>
                                            <div className='relative flex items-center justify-between'>
                                                <Label
                                                    className='font-poppins text-title-2 font-medium text-net-3'
                                                    htmlFor={'return'}>
                                                    Return
                                                </Label>
                                                <ToggleSwitch
                                                    isToggle={isToggleCalendar}
                                                    handleToggleAction={handleCalendarToggleAction}
                                                    id={'toggle_calendar'}
                                                    className={'absolute right-[-36px]'}
                                                />
                                            </div>
                                            <Input
                                                id={'return'}
                                                readOnly
                                                value={!fly.returns ? 'Pilih Tanggal' : formatToLocale(fly.returns)}
                                                onClick={handleOpenCalendarRange}
                                                className={`${!isToggleCalendar ? 'invisible' : 'visible'} 
                        ${
                            !fly.returns ? 'text-[14px] font-normal text-pur-5' : 'text-body-6 font-medium text-black'
                        } cursor-pointer border-[1px] border-l-0 border-r-0 border-t-0 border-b-net-2  py-3 font-poppins  font-medium`}
                                                // value={'Pilih Tanggal'}
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
                                            readOnly
                                            onClick={handleOpenPassengerModal}
                                            className='cursor-pointer border-[1px] border-l-0 border-r-0 border-t-0  border-b-net-2 py-2 font-poppins text-title-3 font-medium'
                                            value={'2 Penumpang'}
                                        />
                                    </div>
                                    <div className=''>
                                        <Label className='font-poppins text-title-2 font-medium text-net-3' htmlFor={'seat'}>
                                            Seat Class
                                        </Label>
                                        <Input
                                            id={'seat'}
                                            readOnly
                                            onClick={handleOpenFlightClassModal}
                                            className='cursor-pointer border-[1px] border-l-0 border-r-0 border-t-0  border-b-net-2 py-2 font-poppins text-title-3 font-medium'
                                            value={pickedFlightClass}
                                            placeholder={'Pilih kelas pesawat'}
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

            {/* ======= Modal and Pop Up Calendar start ====== */}
            {/* handling open passenger modal start */}
            <div>
                {openPassengerModal && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'>
                        <ChoosePassengerTypeModal handleOpenPassengerModal={handleOpenPassengerModal} />
                    </div>
                )}
            </div>
            {/* handling open passenger modal end */}

            {/* handling open flight class modal start */}
            <div>
                {openFlightClassModal && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'>
                        <ChooseFlightClassModal
                            handleActionFlightClassModal={handleActionFlightClassModal}
                            handleOpenFlightClassModal={handleOpenFlightClassModal}
                        />
                    </div>
                )}
            </div>

            {/* handling open flight class modal end */}

            {/* handling open calendar start */}
            <div>
                {openCalendar && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'>
                        <CalendarPicker
                            initialDate={pickedDate}
                            handlePickedDate={handlePickedDate}
                            open={openCalendar}
                            handleOpen={handleOpenCalendar}
                        />
                    </div>
                )}
            </div>

            <div>
                {openCalendarRange && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60'>
                        <div className='relative h-screen w-screen'>
                            <CalendarRangePicker
                                initialRangeDate={pickedRangeDate}
                                handlePickedRangeDate={handlePickedRangeDate}
                                open={openCalendarRange}
                                handleOpen={handleOpenCalendarRange}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* ======= Modal and Pop Up Calendar end ====== */}
        </>
    );
}
