import React from 'react';
import css from '../Title/Title.module.css';
import propTypes from 'prop-types';

export function ContactsTitle({ contactsTitle }) {
  return (
    <div>
      <h2 className={css.title}>{contactsTitle}</h2>
    </div>
  );
}

ContactsTitle.propTitle = {
  title: propTypes.string.isRequired,
};