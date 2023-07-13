import css from './List-style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/axiosOperation';
import { selectVisibleContacts } from "redux/selectors";


export const ContactList = () => {
    const dispatch = useDispatch();

    // Отримання даних контактів для відображення
    const contactsToMarkup = useSelector(selectVisibleContacts);

    return (
        <>
            {!contactsToMarkup.length && <b>This contact is not found</b>}
            <ul className={css.contactList}>
                {contactsToMarkup.map(({ id, name, phone }) => {
                    const handleDelete = () => dispatch(deleteContact(id));

                    return (
                        <li key={id} className={css.contactItem}>
                            {name}: {phone}
                            <button onClick={handleDelete} className={css.deleteButton}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};




