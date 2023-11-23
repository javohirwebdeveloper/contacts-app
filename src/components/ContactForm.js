import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    relationship: 'All',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      relationship: 'All',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number:
        </label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={contact.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="relationship" className="form-label">
          Choose Relationship:
        </label>
        <select
          className="form-select"
          id="relationship"
          name="relationship"
          value={contact.relationship}
          onChange={handleChange}
        >
          <option value="All">All</option>
          <option value="Family">Family</option>
          <option value="Friends">Friends</option>
          <option value="Relatives">Relatives</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Save Contact
      </button>
    </form>
  );
};

export default ContactForm;
