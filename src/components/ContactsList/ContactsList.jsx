import React from 'react';
import css from '../ContactsList/ContactList.module.css';
import propTypes from 'prop-types';

export function ContactsList({ contacts,deleteContact }) {
  return (
    <ul>
          {contacts.map(contact => {
              return (
                  <li key={contact.id} className={css.items}>
                      <span className={css.span}>{contact.name}</span>:
                      <span className={css.span}>{contact.number}</span>
                      <button className={css.itemBtn} onClick = {() => deleteContact(contact.id)}>Delete</button>
              </li>
          )
      })}
    </ul>
  )
}
ContactsList.propTypes = {
    contacts: propTypes.arrayOf(propTypes.shape),
};
