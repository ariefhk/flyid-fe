'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://raw.githubusercontent.com/ariefhk/experiment-raw-data/main/airports/airports.json';

export const fetchAirport = createAsyncThunk('flights/fetchAirport', async () => {
    try {
        const response = await axios.get(URL);

        return response.data;
    } catch (error) {
        return error.message;
    }
});

const initialState = {
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
    name: 'flights',
    initialState,
    reducers: {
        // For diff input comp
        filteredFromAirport: (state, action) => {
            const searchFromAirport = state.airports.filter((airport) =>
                airport.airport_location.toLowerCase().includes(action.payload.toLowerCase())
            );
            state.filteredFromAirport = searchFromAirport;
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

export const getAllAirport = (state) => state.flights.airports;
export const getAirportStatus = (state) => state.flights.status;
export const getfilteredFromAirport = (state) => state.flights.filteredFromAirport;
export const getfilteredToAirport = (state) => state.flights.filteredToAirport;
export const getAirportError = (state) => state.flights.error;
export const getAirportFrom = (state) => state.flights.from;
export const getAirportTo = (state) => state.flights.to;
export const getTotalPassenger = (state) => state.flights.passenger;
export const getFligthClass = (state) => state.flights.flightClass;

export default flightSlice.reducer;
