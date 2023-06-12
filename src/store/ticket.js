'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    flightClass: '',
};

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        // define of flight Class
        setFlightClass: (state, action) => {
            state.flightClass = action.payload;
        },
    },
});

export const getFlightClass = (state) => state.ticket.flightClass;

export default ticketSlice.reducer;
