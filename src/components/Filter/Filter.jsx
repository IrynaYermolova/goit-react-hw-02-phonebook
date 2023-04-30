
import React from 'react';
import css from '../ContactsForm/ContactsForm.module.css';
import propTypes from 'prop-types';

export function Filter({handleChange, value}) {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} name="filter" className={css.input} />
    </div>
  )
}
Filter.propTypes = {
   value: propTypes.string, 
};