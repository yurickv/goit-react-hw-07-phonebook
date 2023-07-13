import {contactReducer} from './contSlice'
import { filterReducer } from "./filtrSlice";
import { configureStore } from '@reduxjs/toolkit';



export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});


