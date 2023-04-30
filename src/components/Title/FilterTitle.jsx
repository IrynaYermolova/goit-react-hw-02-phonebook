import React from 'react';
import css from '../Title/Title.module.css';
import propTypes from 'prop-types';

export function FilterTitle({filterTitle}) {
  return (
    <div>
          <h3 className={css.filterTitle}>{filterTitle}</h3>
    </div>
  )
}
FilterTitle.propTitle = {
  title: propTypes.string.isRequired,
};