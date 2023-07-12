import { createSlice } from "@reduxjs/toolkit";

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '80974591256' },
  { id: 'id-2', name: 'Hermione Kline', number: '80974438912' },
  { id: 'id-3', name: 'Eden Clements', number: '80976451779' },
  { id: 'id-4', name: 'Annie Copeland', number: '80972279126' },
];

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: { items: defaultContacts },
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);           
        },
        deleteContact(state, action) {
            const idxContact = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(idxContact, 1); 
        },
    }
    

})

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

