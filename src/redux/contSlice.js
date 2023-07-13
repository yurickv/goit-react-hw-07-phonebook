import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./axiosOperation";

const extraActions = [fetchContacts, addContact, deleteContact];
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    
    
  extraReducers:  builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(getActions('pending'), state => {
        state.isLoading = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
  // ______________Початкове рішення
  //   {
  //   [fetchContacts.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.items = payload;
  //     state.error = '';
  //   },
  //   [fetchContacts.error]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.error = payload;
  //   },

  //   [addContact.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [addContact.fulfilled]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.items = payload;
  //     state.error = '';
  //   },
  //   [addContact.error]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.error = payload;
  //   },

  //   [deleteContact.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [deleteContact.fulfilled]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.items = payload;
  //     state.error = '';
  //   },
  //   [deleteContact.error]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.error = payload;
  //   },
  // },

})


export const contactReducer = contactSlice.reducer;

