import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from './contactForm';
import ContactList from './contactList';
import FilterContact from './filter';

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contactList')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = value => {
    const filterNormalize = value.toLowerCase();

    return contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const formSubmit = ({ name, number }) => {
    const isContact = contacts.find(contact => contact.name === name);

    if (isContact) {
      Notify.failure(`${name} is already in contact`);
      return contacts;
    } else {
      setContacts(state => {
        const newContact = {
          id: nanoid(),
          name,
          number,
        };
        return [newContact, ...state];
      });
    }
  };

  const contacDelete = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  return (
    <div className="container">
      <h1>Phone Book</h1>
      <ContactForm onSubmit={formSubmit} />

      <h2>Contacts</h2>
      <FilterContact
        title="Find contact by name"
        onChange={handleFilterChange}
        value={filter}
      />
      <ContactList
        filteredContacts={filteredContacts(filter)}
        onDelete={contacDelete}
      />
    </div>
  );
}

export { App };
