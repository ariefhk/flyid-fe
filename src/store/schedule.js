'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isTwoWay: false,
    derpatureDateTime: '',
    arrivalDateTime: '',
    // derpatureDate: '',
    // derpatureTime: '',
    // arrivalDate: '',
    // arrivalTime: '',
};

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        //define datePickerCalenda
        setDerpatureDateTime: (state, action) => {
            state.derpatureDateTime = action.payload;
        },

        //define datePickerCalenda
        setArrivalDateTime: (state, action) => {
            state.arrivalDateTime = action.payload;
        },

        //define datePickerCalenda
        setIsTwoWay: (state, action) => {
            state.isTwoWay = action.payload;
        },
    },
});

export const getDerpatureDateTime = (state) => state.schedule.derpatureDateTime;
export const getArrivalDateTime = (state) => state.schedule.arrivalDateTime;
export const getIsTwoWay = (state) => state.schedule.isTwoWay;

export default scheduleSlice.reducer;
