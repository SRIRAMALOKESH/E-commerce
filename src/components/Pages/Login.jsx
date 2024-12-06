import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Retrieve registered buyers from localStorage
const getRegisteredBuyers = () => {
  const buyers = localStorage.getItem('registeredBuyers');
  return buyers ? JSON.parse(buyers) : [];
};

const Login = () => {
  const [identifier, setIdentifier] = useState(''); // Can be username or email
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const registeredBuyers = getRegisteredBuyers();

    // Check if buyer can login with either email or username
    const buyer = registeredBuyers.find(
      (b) => (b.email === identifier || b.username === identifier) && b.password === password
    );
    if (buyer) {
      localStorage.setItem('loggedInUser', JSON.stringify(buyer)); // Save buyer info to localStorage
      navigate('/buyer'); // Redirect to buyer dashboard
      return;
    }

    // Check for admin credentials (hardcoded for example)
    if (identifier === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', email: identifier }));
      navigate('/admin'); // Redirect to admin dashboard
      return;
    }

    // Check for artisan credentials (hardcoded for example)
    if (identifier === 'artisan@example.com' && password === 'artisan123') {
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'artisan', email: identifier }));
      navigate('/artisan'); // Redirect to artisan dashboard
      return;
    }

    // Check for marketing specialist credentials (hardcoded for example)
    if (identifier === 'marketing@example.com' && password === 'marketing123') {
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'marketing', email: identifier }));
      navigate('/marketing'); // Redirect to marketing specialist dashboard
      return;
    }

    // If credentials do not match any role
    setErrorMessage('Invalid username/email or password. Please try again.');
  };

  // CSS styles
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
      padding: '30px',
      width: '350px',
      textAlign: 'center',
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
      fontSize: '16px',
    },
    button: {
      background: '#f76c6c',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background 0.3s',
      marginTop: '10px',
    },
    buttonHover: {
      background: '#f34a4a',
    },
    errorMessage: {
      color: 'red',
      margin: '10px 0',
    },
    signupButton: {
      background: '#5cb85c',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '15px',
      width: '100%',
    },
    homeButton: {
      background: '#007bff',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px',
      width: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Login</h2>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username or Email</label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
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
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.background = styles.buttonHover.background)}
            onMouseOut={(e) => (e.currentTarget.style.background = styles.button.background)}
          >
            Login
          </button>
        </form>
        <button
          style={styles.signupButton}
          onClick={() => navigate('/signup')}
        >
          Sign Up (Buyers Only)
        </button>
        <button
          style={styles.homeButton}
          onClick={() => navigate('/')} // Navigates to the home/main page
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Login;
