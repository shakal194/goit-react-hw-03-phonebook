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

<<<<<<< HEAD
  componentDidMount() {
    const contactList = localStorage.getItem('contactList');
    if (contactList) {
      try {
        const parseContactList = JSON.parse(contactList);
        this.setState({ contacts: parseContactList });
      } catch {
        this.setState({ contacts: [] });
      }
    }
  }
  //com
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contactList', JSON.stringify(this.state.contacts));
    }
  }

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filteredContacts = value => {
=======
  const filteredContacts = value => {
>>>>>>> 8213d79b060f4701034bba80904b689a1b162835
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
