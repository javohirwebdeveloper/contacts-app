import React from 'react';
import { Heart, HeartFill, Trash } from 'react-bootstrap-icons';

const ContactList = ({ contacts, deleteContact, toggleFavorite }) => {
  return (
    <ul className="list-group">
      {contacts.map((contact) => (
        <li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center">
          {contact.firstName} {contact.lastName} - {contact.phoneNumber} - {contact.relationship}
          <span
            className={`badge mx-2 ${
              contact.isFavorite ? 'bg-warning text-dark' : 'bg-secondary text-light'
            }`}
            onClick={() => toggleFavorite(contact.id)}
          >
            {contact.isFavorite ? <HeartFill /> : <Heart />}
          </span>
          <button onClick={() => deleteContact(contact.id)} className="btn btn-danger ml-2">
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
