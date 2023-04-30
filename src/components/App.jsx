import React, { Component } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Title } from "./Title/Title";
import { FilterTitle } from "./Title/FilterTitle";
import { ContactsTitle } from "./Title/ContactsTitle";


export class App extends Component {
    
    state = {
        contacts: [],
        filter:""
  }
    handleAddContact = (contact) => {
        if (this.state.contacts.some((item) => item.name === contact.name)) {
            toast.error("Contact already exists")
            return true;
        }
        this.setState((prevState) => {
            return  {
            contacts:[...prevState.contacts,contact]
        }
        })
        return false;
    }
    
    handleDeleteContact = (id) => {
        this.setState((prevState) => {
            return {
                contacts:prevState.contacts.filter(contact => contact.id !== id)
            }
        })
    }

    handleChangeFilter = (evt) => {
        this.setState({filter:evt.target.value})
    }


    handleFilterContacts = () => {
        return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase().trim()))
    }

  render() {
    return (
        <>
            <div className='container'>
            <Title title = "Phonebook"/>
                <ContactsForm addContact={this.handleAddContact} />
        
            <ContactsTitle contactsTitle = "Contacts" />
            <FilterTitle filterTitle = "Find contacts by name" />
            <Filter value={this.state.filter} handleChange={this.handleChangeFilter} />
            <ContactsList contacts={this.handleFilterContacts()} deleteContact={this.handleDeleteContact} />
            <Toaster />
                </div>
              
        </>
    )
  }
}
