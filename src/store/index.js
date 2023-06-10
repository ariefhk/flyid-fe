import { configureStore } from '@reduxjs/toolkit';
import flightSlice from './flight';

export const store = configureStore({
    reducer: {
        flights: flightSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // warn: fixing seriable check in payload datetime
        }),
});
