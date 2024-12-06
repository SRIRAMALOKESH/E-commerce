import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  // Function to get the list of registered buyers from localStorage
  const getRegisteredBuyers = () => {
    const buyers = localStorage.getItem('registeredBuyers');
    return buyers ? JSON.parse(buyers) : [];
  };

  // Handle the signup process
  const handleSignup = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const registeredBuyers = getRegisteredBuyers();

    // Validation for matching passwords
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Validation for a 10-digit phone number
    if (!/^\d{10}$/.test(phone)) {
      setErrorMessage('Please enter a valid 10-digit phone number');
      return;
    }

    // Check if the email is already registered
    const existingBuyerByEmail = registeredBuyers.find((buyer) => buyer.email === email);
    if (existingBuyerByEmail) {
      setErrorMessage('Email is already registered');
      return;
    }

    // Check if the username is already taken
    const existingBuyerByUsername = registeredBuyers.find((buyer) => buyer.username === username);
    if (existingBuyerByUsername) {
      setErrorMessage('Username is already taken');
      return;
    }

    // Register the new buyer
    const newBuyer = { firstname, lastname, username, email, phone, password };
    localStorage.setItem('registeredBuyers', JSON.stringify([...registeredBuyers, newBuyer]));

    // Save the current user for auto-fill purposes
    localStorage.setItem('currentUser', JSON.stringify(newBuyer));

    setSuccessMessage('Signup successful! Redirecting to login...');
    setTimeout(() => navigate('/login'), 2000);
  };

  // Inline styles for the component
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #ffecd2, #fcb69f)',
      fontFamily: 'Arial, sans-serif',
    },
    box: {
      background: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      width: '320px',
      // textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      fontSize: '14px',
    },
    button: {
      background: '#5cb85c',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      marginTop: '10px',
      width: '100%',
    },
    errorMessage: {
      color: 'red',
      margin: '8px 0',
    },
    successMessage: {
      color: 'green',
      margin: '8px 0',
    },
    secondaryButton: {
      background: '#007bff',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      marginTop: '10px',
      width: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Buyer Signup</h2>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
        <form onSubmit={handleSignup}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>First Name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Last Name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Signup
          </button>
        </form>
        <button style={styles.secondaryButton} onClick={() => navigate('/login')}>
          Already Registered? Login Here
        </button>
        <button style={styles.secondaryButton} onClick={() => navigate('/')}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Signup;
