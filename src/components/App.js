import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Appp = () => {
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState('All');
  const [sortType, setSortType] = useState('AZ');

  useEffect(() => {
    setActiveTab('All');
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, { ...newContact, id: Date.now() }]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const toggleFavorite = (id) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === id ? { ...contact, isFavorite: !contact.isFavorite } : contact
      )
    );
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const changeSortType = (type) => {
    setSortType(type);
  };

  const filteredContacts =
    activeTab === 'All'
      ? contacts
      : contacts.filter((contact) => contact.isFavorite);

  const sortedContacts = filteredContacts.sort((a, b) => {
    if (activeTab === 'All') {
      if (sortType === 'AZ') {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    } else {
      return b.isFavorite - a.isFavorite || a.firstName.localeCompare(b.firstName);
    }
  });

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Contact Manager</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'All' ? 'active' : ''}`}
            onClick={() => changeTab('All')}
            href="#"
          >
            All Contacts
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'Favourites' ? 'active' : ''}`}
            onClick={() => changeTab('Favourites')}
            href="#"
          >
            Favourites
          </a>
        </li>
      </ul>
      <div className="mt-3">
        <label className="mr-2">Sort By:</label>
        <select
          onChange={(e) => changeSortType(e.target.value)}
          value={sortType}
          className="form-select"
        >
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>
      </div>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={sortedContacts}
        deleteContact={deleteContact}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default Appp;
