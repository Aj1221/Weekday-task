// PersonalInfoForm.js

import React, { useState } from 'react';
import './PersonalInfoForm.css'; 

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    postalCode: '',
    address: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      city: '',
      postalCode: '',
      address: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirm: false,
    });
    alert('Form submitted successfully!');
  };

  return (
    <div className='outer'> 
    <div className="personal-info-form">
      <h2>Personal Information</h2>
      <div>      <form onSubmit={handleSubmit}>
       

        <div className="form-row">
          <div className="input-container">
          <label className="label">First Name</label>
          <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            
          </div>
          <div className="input-container">
          <label className="label">Last Name</label>
          <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="input-container">
            <label className="label">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            
          </div>
          <div className="input-container">
            <label className="label">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="input-container">
            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="input-container">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label className="label">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="input-container">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <p>Use this email to login to your <span className='companyName'>resumedone.io</span> account and receive notifications.</p>
        <div className="form-row">
          <button className='Savebtn' type="submit">Save</button>
        </div>
        <div className="form-row">
          <div className="checkbox-container">
            <input
            className='check'
              type="checkbox"
              id="confirmCheckbox"
              name="confirm"
              checked={formData.confirm}
              onChange={handleChange}
            />
            <label htmlFor="confirmCheckbox">Show my Profile to serious employers on <span className='companyName'>hirethebest.io </span>for free</label>
          </div>
        </div>
       
      </form>

      <div className='deletemodal'>
        <p className='deleteheading'> Delete Account</p>
        <p>If you delete your account you'll be permanently removing it from our systems - you can't undo it.</p>
        <p className='deleteconfirmation'> Yes,Delete my account</p>
      </div>
      </div>

    </div>
    <img alt='profile' className='profileImage' src="/assets/profile.png"></img>
    </div>
  );
};

export default PersonalInfoForm;
