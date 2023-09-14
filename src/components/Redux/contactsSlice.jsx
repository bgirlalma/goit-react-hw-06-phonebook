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
        addContacts: {
            reducer(state, action) {
                state.push(action.payload)
            }, 
            prepare(text) {
                return {
                    payload: {
                        text,
                        id: nanoid(),
                        completed: false,
                    }
                }
            }
        },
      

        deleteContacts: (state, action) => {
           const deleteContactsById =  state.findIndex(contacts => contacts.id === action.payload);
           state.splice(deleteContactsById, 1)
        },  

        toggleCompleted(state, action) {
            for (const contacts of state) {
              if (contacts.id === action.payload) {
                contacts.completed = !contacts.completed;
                break;
              }
            }
          },
    }
})

// Генераторы экшенов
export const { addContacts, deleteContacts, toggleCompleted } = contactsSlice.actions;
// Редюсер слайса
export const contactsReduce = contactsSlice.reducer;