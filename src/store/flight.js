'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { convertToDate, convertToTime } from '@/utils/converDateTime';
import axios from 'axios';

const URL = 'https://airplaneapikel1-production.up.railway.app/api/v1/airport';
const FLIGHT_URL = 'https://airplaneapikel1-production.up.railway.app/api/v1/flight/searchflight';

export const fetchAirport = createAsyncThunk('flight/fetchAirport', async () => {
    try {
        const response = await axios.get(URL);
        return response.data.data.airport;
    } catch (error) {
        return error.message;
    }
});

export const fetchFlight = createAsyncThunk(
    'flight/fetchFligth',
    async ({ from, to, departure_date, departure_time, returnDate }) => {
        try {
            const objectTemplate = {
                from,
                to,
                departure_date,
                departure_time,
                returnDate,
            };
            const response = await axios.post(FLIGHT_URL, objectTemplate);
            return response.data.data.flight;
        } catch (error) {
            return error.message;
        }
    }
);

const initialState = {
    // airport start
    airports: [],
    filteredFromAirport: [],
    filteredToAirport: [],
    displayFromAirport: '',
    displayToAirport: '',
    fetchAirportStatus: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    fetchAirportError: null,
    fromAirport: '', //for search from flight ticket
    toAirport: '', //for search to flight ticket
    // airport end

    // fligth start
    flights: {
        berangkat: [],
        pulang: [],
    },
    fetchFlightStatus: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    fetchFligthError: null,
    // fligth end

    // passenger start
    passengerType: {
        dewasa: 1,
        anak: 0,
        bayi: 0,
    },
    totalPassenger: 1,
    // passenger end

    // flight class start
    flightClass: 'Economy',
    // flight class end

    //one way/two way mode start
    isTwoWay: false,
    one_way: {
        from: '',
        to: '',
        derpature_date: '',
        derpature_time: '',
        arrival_date: '',
        arrival_time: '',
        derpatureDateTime: '',
        arrivalDateTime: '',
    },
    two_way: {
        from: '',
        to: '',
        derpature_date: '',
        derpature_time: '',
        derpatureDateTime: '',
        // arrivalDateTime: '',
    },
    //one way/two way mode end

    // display ui prototype start
    displayDerpatureDateTime: '',
    // display ui prototype end
};

export const flightSlice = createSlice({
    name: 'flight',
    initialState,
    reducers: {
        // airport reducer start
        filteredFromAirport: (state, action) => {
            const searchFromAirport = state.airports.filter((airport) =>
                airport.airport_location.toLowerCase().includes(action.payload.toLowerCase())
            );

            state.filteredFromAirport = searchFromAirport;
        },

        filteredToAirport: (state, action) => {
            const searchToAirport = state.airports.filter((airport) =>
                airport.airport_location.toLowerCase().includes(action.payload.toLowerCase())
            );
            state.filteredToAirport = searchToAirport;
        },

        setOneWayFrom: (state, action) => {
            const fromAirport = state.airports.filter((airport) => airport.airport_code === action.payload);

            if (state.isTwoWay) {
                state.two_way.to = fromAirport[0].airport_location;
            }

            state.displayFromAirport = `${fromAirport[0].airport_location} (${fromAirport[0].airport_code})`;
            state.one_way.from = fromAirport[0].airport_location;
        },
        setOneWayTo: (state, action) => {
            const toAirport = state.airports.filter((airport) => airport.airport_code === action.payload);

            if (state.isTwoWay) {
                state.two_way.from = toAirport[0].airport_location;
            }

            state.displayToAirport = `${toAirport[0].airport_location} (${toAirport[0].airport_code})`;
            state.one_way.to = toAirport[0].airport_location;
        },
        setOneWaySwitch: (state) => {
            const tempDisplay = state.displayFromAirport;
            state.displayFromAirport = state.displayToAirport;
            state.displayToAirport = tempDisplay;

            const temp = state.one_way.from;
            state.one_way.from = state.one_way.to;
            state.one_way.to = temp;

            if (state.isTwoWay) {
                const temp = state.two_way.from;
                state.two_way.from = state.two_way.to;
                state.two_way.to = temp;
            }
        },

        setIsTwoWay: (state, action) => {
            if (!action.payload) {
                state.two_way.from = '';
                state.two_way.to = '';
                state.two_way.derpatureDateTime = '';
                state.two_way.derpature_date = '';
                state.two_way.derpature_time = '';
                state.isTwoWay = action.payload;
                return;
            }

            state.two_way.from = state.one_way.to;
            state.two_way.to = state.one_way.from;
            state.two_way.derpature_date = state.one_way.arrival_date;
            state.two_way.derpature_time = state.one_way.arrival_time;
            state.two_way.derpatureDateTime = state.one_way.arrivalDateTime;
            state.isTwoWay = action.payload;
        },
        //define datePickerCalenda
        setDerpatureDateTime: (state, action) => {
            state.one_way.derpature_date = convertToDate(action.payload);
            state.one_way.derpature_time = convertToTime(action.payload);
            state.one_way.derpatureDateTime = action.payload;
            state.displayDerpatureDateTime = action.payload;
        },

        //define datePickerCalenda
        setArrivalDateTime: (state, action) => {
            if (state.isTwoWay) {
                state.two_way.derpature_date = convertToDate(action.payload);
                state.two_way.derpature_time = convertToTime(action.payload);
                state.two_way.derpatureDateTime = action.payload;
            }
            state.one_way.arrival_date = convertToDate(action.payload);
            state.one_way.arrival_time = convertToTime(action.payload);
            state.one_way.arrivalDateTime = action.payload;
        },
        // define of flight Class
        setFlightClass: (state, action) => {
            state.flightClass = action.payload;
        },
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
        setFetchFlightStatus: (state, action) => {
            state.fetchFlightStatus = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAirport.pending, (state) => {
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

        builder.addCase(fetchFlight.pending, (state, action) => {
            state.fetchAirportStatus = 'loading';
        });
        builder.addCase(fetchFlight.fulfilled, (state, action) => {
            state.fetchAirportStatus = 'succeeded';
            // console.log(action.payload);
            state.flights.berangkat = action.payload.berangkat;
            state.flights.pulang = action.payload.pulang;
            // state.airports = [...state.airports, ...action.payload];
        });
        builder.addCase(fetchFlight.rejected, (state, action) => {
            state.fetchAirportStatus = 'failed';
            state.fetchAirportError = action.error.message;
        });
    },
});

export const getAllAirport = (state) => state.flight.airports;
export const getAirportFetchError = (state) => state.flight.fetchAirportError;
export const getAirportFetchStatus = (state) => state.flight.fetchAirportStatus;
export const getFilteredFromAirport = (state) => state.flight.filteredFromAirport;
export const getFilteredToAirport = (state) => state.flight.filteredToAirport;
export const getDisplayFromAirport = (state) => state.flight.displayFromAirport;
export const getDisplayToAirport = (state) => state.flight.displayToAirport;
export const getLocationFromAirport = (state) => state.flight.fromAirport;
export const getLocationToAirport = (state) => state.flight.toAirport;
export const getOneWay = (state) => state.flight.one_way;
export const getTwoWay = (state) => state.flight.two_way;
export const getIsTwoWay = (state) => state.flight.isTwoWay;
export const getDerpatureDateTime = (state) => state.flight.one_way.derpatureDateTime;
export const getArrivalDateTime = (state) => state.flight.one_way.arrivalDateTime;
export const getFlightClass = (state) => state.flight.flightClass;
export const getTotalPassenger = (state) => state.flight.totalPassenger;
export const getDewasaPassenger = (state) => state.flight.passengerType.dewasa;
export const getAnakPassenger = (state) => state.flight.passengerType.anak;
export const getBayiPassenger = (state) => state.flight.passengerType.bayi;
export const getDisplayDerpatureDatetime = (state) => state.flight.displayDerpatureDateTime;
export const getFlights = (state) => state.flight.flights;
export const getFlightFetchStatus = (state) => state.flight.fetchFlightStatus;

export default flightSlice.reducer;
