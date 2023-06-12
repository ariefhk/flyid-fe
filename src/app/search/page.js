'use client';

import { useSelector, useDispatch } from 'react-redux';

import { getAirportFrom, getAirportTo, getFligthClass, getDerpatureDate, getArrivalDate } from '../../store/flight';

import { getTotalPassenger } from '@/store/passenger';

export default function SearchFlight() {
    const from = useSelector(getAirportFrom);
    const to = useSelector(getAirportTo);
    const flightClas = useSelector(getFligthClass);
    const derpature = useSelector(getDerpatureDate);
    const arrival = useSelector(getArrivalDate);
    const totalPassenger = useSelector(getTotalPassenger);

    return (
        <div className='flex h-screen items-center justify-center gap-8 bg-slate-200'>
            <h1>From: {from}</h1>
            <h1>To: {to}</h1>
            <h1>Flight Class: {flightClas}</h1>
            <h1>Derpature: {derpature}</h1>
            <h1>Arrival: {arrival}</h1>
            <h1>Total Passenger: {totalPassenger}</h1>
        </div>
    );
}
