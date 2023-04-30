import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactsForm/ContactsForm.module.css';
import propTypes from 'prop-types';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
    };
    
    handleSubmit = (evt) => {
        evt.preventDefault();
        const isContactExists = this.props.addContact({ id: nanoid(7), ...this.state });
        if (!isContactExists) {
             this.reset();
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    reset = () => {
       this.setState({
    name: '',
    number: '',
    })
   }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
                <input
                    onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
            value={this.state.name}
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Number
                <input
                    onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
            value={this.state.number}
            className={css.input}
          />
            </label>
            <button type="submit" className={css.button}>Add Contact</button>
      </form>
    );
  }
}
ContactsForm.propTypes = {
  name: propTypes.string,
  number: propTypes.string,
};
