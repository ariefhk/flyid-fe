'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://airplaneapikel1-production.up.railway.app/api/v1/airport';

export const fetchAirport = createAsyncThunk('airport/fetchAirport', async () => {
    try {
        const response = await axios.get(URL);
        return response.data.data.airport;
    } catch (error) {
        return error.message;
    }
});

const initialState = {
    airports: [],
    filteredFromAirport: [],
    filteredToAirport: [],
    displayFromAirport: '',
    displayToAirport: '',
    fetchAirportStatus: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    fetchAirportError: null,
    codeFromAirport: '', //for search from flight ticket
    codeToAirport: '', //for search to flight ticket
};

export const airportSlice = createSlice({
    name: 'airport',
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
            const fromAirport = state.airports.filter((airport) => airport.airport_code === action.payload);

            state.codeFromAirport = fromAirport[0].airport_code;
            state.displayFromAirport = `${fromAirport[0].airport_location} (${fromAirport[0].airport_code})`;
        },

        // define to airport (one only)
        setToAirport: (state, action) => {
            const toAirport = state.airports.filter((airport) => airport.airport_code === action.payload);

            state.codeToAirport = toAirport[0].airport_code;
            state.displayToAirport = `${toAirport[0].airport_location} (${toAirport[0].airport_code})`;
        },

        // switch from/to position
        switchFromToAirportPosition: (state) => {
            const tempDisplay = state.displayFromAirport;
            state.displayFromAirport = state.displayToAirport;
            state.displayToAirport = tempDisplay;

            const tempCode = state.codeFromAirport;
            state.codeFromAirport = state.codeToAirport;
            state.codeToAirport = tempCode;
        },
    },
    extraReducers: (builder) => {
        // eslint-disable-next-line no-unused-vars
        builder.addCase(fetchAirport.pending, (state, action) => {
            state.fetchAirportStatus = 'loading';
        });
        builder.addCase(fetchAirport.fulfilled, (state, action) => {
            state.fetchAirportStatus = 'succeeded';
            state.airports = [...state.airports, ...action.payload];
        });
        builder.addCase(fetchAirport.rejected, (state, action) => {
            state.fetchAirportStatus = 'failed';
            state.fetchAirportError = action.error.message;
        });
    },
});

export const getAllAirport = (state) => state.airport.airports;
export const getAirportFetchError = (state) => state.airport.fetchAirportError;
export const getAirportFetchStatus = (state) => state.airport.fetchAirportStatus;
export const getFilteredFromAirport = (state) => state.airport.filteredFromAirport;
export const getFilteredToAirport = (state) => state.airport.filteredToAirport;
export const getDisplayFromAirport = (state) => state.airport.displayFromAirport;
export const getDisplayToAirport = (state) => state.airport.displayToAirport;
export const getCodeFromAirport = (state) => state.airport.codeFromAirport;
export const getCodeToAirport = (state) => state.airport.codeToAirport;

export default airportSlice.reducer;
