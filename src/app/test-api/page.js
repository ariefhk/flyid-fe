'use client';

import { useEffect } from 'react';
import axios from 'axios';

export default function TestApi() {
    const URL = 'https://airplaneapikel1-production.up.railway.app/api/v1/flight/searchflight';

    useEffect(() => {
        const fetchFlight = async ({ from, to, departure_date, departure_time, returnDate }) => {
            try {
                const objectTemplate = {
                    from,
                    to,
                    departure_date,
                    departure_time,
                    returnDate,
                };
                const response = await axios.post(URL, objectTemplate);
                // return response.data.data.flight;
                console.log(response.data.data.flight);
            } catch (error) {
                return error.message;
            }
        };
        fetchFlight({
            from: 'Yogyakarta',
            to: 'Bali',
            departure_date: '2023-06-20',
            departure_time: '07:00',
            returnDate: '2023-06-26',
        });
    }, []);

    return <div>page</div>;
}
