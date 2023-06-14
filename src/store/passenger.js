'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    passengerType: {
        dewasa: 1,
        anak: 0,
        bayi: 0,
    },
    totalPassenger: 1,
};

export const passengerSlice = createSlice({
    name: 'passenger',
    initialState,
    reducers: {
        addDewasaPassenger: (state) => {
            state.passengerType.dewasa += 1;
            state.totalPassenger += 1;
        },
        addAnakPassenger: (state) => {
            state.passengerType.anak += 1;
            state.totalPassenger += 1;
        },
        addBayiPassenger: (state) => {
            state.passengerType.bayi += 1;
            state.totalPassenger += 1;
        },

        minusDewasaPassenger: (state) => {
            if (state.passengerType.dewasa > 1) {
                state.passengerType.dewasa -= 1;
                state.totalPassenger -= 1;
            }
        },
        minusAnakPassenger: (state) => {
            if (state.passengerType.anak > 0) {
                state.passengerType.anak -= 1;
                state.totalPassenger -= 1;
            }
        },
        minusBayiPassenger: (state) => {
            if (state.passengerType.bayi > 0) {
                state.passengerType.bayi -= 1;
                state.totalPassenger -= 1;
            }
        },
    },
});

export const getTotalPassenger = (state) => state.passenger.totalPassenger;
export const getDewasaPassenger = (state) => state.passenger.passengerType.dewasa;
export const getAnakPassenger = (state) => state.passenger.passengerType.anak;
export const getBayiPassenger = (state) => state.passenger.passengerType.bayi;

export default passengerSlice.reducer;
