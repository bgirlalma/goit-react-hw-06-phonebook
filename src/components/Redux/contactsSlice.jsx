import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

// начальное состояние 
const  contactsInitialState = {
    contacts: []
}

export const contactsSlice = createSlice({
    // Имя слайса
    name: "contacts",
    // Начальное состояние редюсера слайса
    initialState: contactsInitialState,
     // Объект редюсеров
    reducers: {
        addContacts: (state, action) => {
           state.contacts.push({
            id: nanoid(),
            name: action.payload.name,
            number: action.payload.number,
           })
        },
           

        deleteContacts: (state, action) => {
            state.contacts = state.contacts.filter(contacts => contacts.id !== action.payload);
        },  
    }
    
})

// Генераторы экшенов
export const { addContacts, deleteContacts, toggleCompleted } = contactsSlice.actions;
// Редюсер слайса
export const contactsReduce = contactsSlice.reducer;