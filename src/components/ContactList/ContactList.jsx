import css from './List-style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contSlice';

export const ContactList = () => {
    const dispatch = useDispatch();
    // отримання переліку контактів із state.contacts для відображення
    const contacts = useSelector(state => state.contacts.items);

    // Отримання даних для пошуку по імені контакту із state.filter для відображення
    const filterName = useSelector(state => state.filter.value);

    // Дані контактів для відображення
    const contactsToMarkup = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterName)
    );

    return (
        <ul className={css.contactList}>
            {contactsToMarkup.map(({ id, name, number }) => (
                <li key={id} className={css.contactItem}>
                    {name}: {formatPhoneNumber(number)}
                    <button onClick={() => dispatch(deleteContact(id))} className={css.deleteButton}>Delete</button>
                </li>
            ))}
        </ul>
    );
};





function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{1,3}|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        var intlCode = (match[1] ? `+${match[1]} ` : '');
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
}