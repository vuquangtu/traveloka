import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../features/hotelSlice";
import userReducer from "../features/userSlice";
import modalReducer from "../features/modalSlice";
import hotelsReducer from "../features/hotelsSlice";
import flightReducer from "../features/flightSlice";
import customerReducer from "../features/customerSlice";
import bookingReducer from "../features/bookingSlice";
import comboFlightReducer from "../features/comboFlightSlice";
import combosReducer from "../features/combosSlice";

import chartReducer from "../features/chartSlice";
import hotelTeraReducer from "../features/hotelTeraSlice";
import flightTeraReducer from "../features/flightTeraSlice";
import usersApi from "../features/usersApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import hotelsApi from "../features/hotelsApi";
import citiesApi from "../features/citiesApi";
import postdatasApi from "../features/postdataApi";
import roomsApi from "../features/room";
import hotelImgsApi from "../features/hotelImgsAps";
import hotel_utilitysApi from "../features/hotel_utilitysApi";
import hotel_utilitys2Api from "../features/hotel_utilitys2Api";
import roomImagesApiApi from "../features/roomImagesApi";
import roomUtilitesApi from "../features/roomUtilitesApi";
import dropdownSlice from "../headerSlice/dropdown";
import adultSlice from "../mainSlice/toggleAdult";
import dropdownSlice1 from "../mainSlice/dropdown";

import childrenSlice from "../mainSlice/toggleChildren";
import babySlice from "../mainSlice/toggleBaby";

export const store = configureStore({
  reducer: {
    dropdown: dropdownSlice,
    dropdown1: dropdownSlice1,

    adult: adultSlice,
    children: childrenSlice,
    baby: babySlice,
    user: userReducer,
    hotel: hotelReducer,
    modal: modalReducer,
    flight: flightReducer,
    hotels: hotelsReducer,
    customer: customerReducer,
    booking: bookingReducer,
    comboFlight: comboFlightReducer,
    combos: combosReducer,
    chart: chartReducer,
    hotelTera: hotelTeraReducer,
    flightTera: flightTeraReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [hotelsApi.reducerPath]: hotelsApi.reducer,
    [citiesApi.reducerPath]: citiesApi.reducer,
    [postdatasApi.reducerPath]: postdatasApi.reducer,
    [roomsApi.reducerPath]: roomsApi.reducer,
    [hotelImgsApi.reducerPath]: hotelImgsApi.reducer,
    [hotel_utilitysApi.reducerPath]: hotel_utilitysApi.reducer,
    [hotel_utilitys2Api.reducerPath]: hotel_utilitys2Api.reducer,
    [roomImagesApiApi.reducerPath]: roomImagesApiApi.reducer,
    [roomUtilitesApi.reducerPath]: roomUtilitesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      // getProducts.middleware,
      usersApi.middleware,
      hotelsApi.middleware,
      citiesApi.middleware,
      postdatasApi.middleware,
      roomsApi.middleware,
      hotelImgsApi.middleware,
      hotel_utilitysApi.middleware,
      hotel_utilitys2Api.middleware,
      roomImagesApiApi.middleware,
      roomUtilitesApi.middleware
    ),
});

export default store;

setupListeners(store.dispatch);
