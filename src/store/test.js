'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    // flightClass: 'Economy',
    isTestWay: false,
    one_way: {
        from: '',
        to: '',
    },
    two_way: {
        from: '',
        to: '',
    },
};

export const testSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        // define of flight Class
        setOneWayFrom: (state, action) => {
            state.one_way.from = action.payload;
            // state.one_way.to = action.payload.to;
        },
        setOneWayTo: (state, action) => {
            state.one_way.from = action.payload;
            // state.one_way.to = action.payload.to;
        },
        setOneWaySwitch: (state) => {
            const temp = state.one_way.from;
            state.one_way.from = state.one_way.to;
            state.one_way.to = temp;
        },
        setTwoWay: (state) => {
            state.two_way.from = state.one_way.to;
            state.two_way.to = state.one_way.from;
        },
        setDisableTwoWay: (state) => {
            state.two_way.from = '';
            state.two_way.to = '';
        },
    },
});

export const getOneWay = (state) => state.test.one_way;
export const getTwoWay = (state) => state.test.two_way;

export default testSlice.reducer;
