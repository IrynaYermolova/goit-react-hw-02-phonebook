import React from 'react'
import css from '../Title/Title.module.css';
import propTypes from 'prop-types';


export function Title({title}) {
  return (
    <div className={css.container}>
          <h2 className={css.title}>{title}</h2>
    </div>
  )
}

Title.propTitle = {
  title: propTypes.string.isRequired,
};