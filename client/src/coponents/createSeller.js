import React, { useState } from 'react';
import axios from 'axios';
import './CreateSeller.css';

const CreateSeller = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:4040/Seller/create-seller', {
        name,
        email,
        password,
      });
  
      console.log(response.data);
  
      // Reset form fields and error message
      setName('');
      setEmail('');
      setPassword('');
      setErrorMessage('');
    } catch (error) {
      // Handle error response
      console.error(error);
      setErrorMessage('Failed to create seller account. Please try again.');
    }
  };
  

  return (
    <div className="create-seller-container">
      <h2>Create Seller</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="input-field"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="input-field"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="submit-btn">Create Seller</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default CreateSeller;
