'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Testings() {
    const URL = 'https://airplaneapikel1-production.up.railway.app/api/v1/airline';

    useEffect(() => {
        const fetchAirport = async () => {
            try {
                const response = await axios.get(URL);

                console.log(response.data.data.airline);
                // return response.data.data.airline;
            } catch (error) {
                return error.message;
            }
        };
        fetchAirport();
    }, []);

    return <div>page</div>;
}
