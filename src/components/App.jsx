import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm'
import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList'
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/axiosOperation';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={appSlyle}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <ContactList />

    </div>
  )
};














const appSlyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,

  alignItems: 'center',
  fontSize: 40,
  color: '#010101'
}