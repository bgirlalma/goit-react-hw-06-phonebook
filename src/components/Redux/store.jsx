import { configureStore } from "@reduxjs/toolkit";
import { contactsReduce } from './contactsSlice';
import { filterReduser } from './filterSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReduce,
        filters: filterReduser,
    }
})

