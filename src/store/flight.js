'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://airplaneapikel1-production.up.railway.app/api/v1/airport';

export const fetchAirport = createAsyncThunk('flights/fetchAirport', async () => {
    try {
        const response = await axios.get(URL);
        return response.data.data.airport;
    } catch (error) {
        return error.message;
    }
});

const initialState = {
    isArrival: false,
    airports: [],
    filteredFromAirport: [],
    filteredToAirport: [],
    from: '',
    to: '',
    derpatureDate: '',
    arrivalDate: '',
    passenger: 0,
    flightClass: '',
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
};

export const flightSlice = createSlice({
    name: 'flight',
    initialState,
    reducers: {
        // For diff input comp
        filteredFromAirport: (state, action) => {
            const searchFromAirport = state.airports.filter((airport) =>
                airport.airport_location.toLowerCase().includes(action.payload.toLowerCase())
            );

            // const searchFromAirport = state.airports;

            // console.log(searchFromAirport);
            state.filteredFromAirport = searchFromAirport;

            // console.log(state.airports);
        },

        // For diff input comp
        filteredToAirport: (state, action) => {
            const searchToAirport = state.airports.filter((airport) =>
                airport.airport_location.toLowerCase().includes(action.payload.toLowerCase())
            );
            state.filteredToAirport = searchToAirport;
        },

        // define from airport (one only)
        setFromAirport: (state, action) => {
            const from = state.airports.filter((airport) => airport.airport_code === action.payload);

            // console.log('this from ', `${from[0].airport_name} (${from[0].airport_code})`);
            state.from = `${from[0].airport_location} (${from[0].airport_code})`;
        },

        // define to airport (one only)
        setToAirport: (state, action) => {
            const from = state.airports.filter((airport) => airport.airport_code === action.payload);

            // console.log('this to ', `${from[0].airport_name} (${from[0].airport_code})`);
            state.to = `${from[0].airport_location} (${from[0].airport_code})`;
        },

        // switch from/to position
        switchFromToAirportPosition: (state, action) => {
            const temp = state.from;
            state.from = state.to;
            state.to = temp;
            console.log('from:', state.from, 'to: ', state.to);
        },

        // define amount of passenger
        setTotalPassenger: (state, action) => {
            state.passenger = action.payload;
        },

        // define of flight Class
        setFlightClass: (state, action) => {
            state.flightClass = action.payload;
        },

        //define datePickerCalenda
        setDerpatureDate: (state, action) => {
            state.derpatureDate = action.payload;
        },

        //define datePickerCalenda
        setArrivalDate: (state, action) => {
            state.arrivalDate = action.payload;
        },
        //define datePickerCalenda
        setIsArrival: (state, action) => {
            state.isArrival = action.payload;
        },
    },
    extraReducers: (builder) => {
        // eslint-disable-next-line no-unused-vars
        builder.addCase(fetchAirport.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAirport.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.airports = [...state.airports, ...action.payload];
        });
        builder.addCase(fetchAirport.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export const getAllAirport = (state) => state.flight.airports;
export const getAirportStatus = (state) => state.flight.status;
export const getfilteredFromAirport = (state) => state.flight.filteredFromAirport;
export const getfilteredToAirport = (state) => state.flight.filteredToAirport;
export const getAirportError = (state) => state.flight.error;
export const getAirportFrom = (state) => state.flight.from;
export const getAirportTo = (state) => state.flight.to;
export const getTotalPassenger = (state) => state.flight.passenger;
export const getFligthClass = (state) => state.flight.flightClass;
export const getDerpatureDate = (state) => state.flight.derpatureDate;
export const getArrivalDate = (state) => state.flight.arrivalDate;
export const getIsArrival = (state) => state.flight.isArrival;

// export const getAllAirport = (state) => state.flights.airports;
// export const getAirportStatus = (state) => state.flights.status;
// export const getfilteredFromAirport = (state) => state.flights.filteredFromAirport;
// export const getfilteredToAirport = (state) => state.flights.filteredToAirport;
// export const getAirportError = (state) => state.flights.error;
// export const getAirportFrom = (state) => state.flights.from;
// export const getAirportTo = (state) => state.flights.to;
// export const getTotalPassenger = (state) => state.flights.passenger;
// export const getFligthClass = (state) => state.flights.flightClass;

export default flightSlice.reducer;
