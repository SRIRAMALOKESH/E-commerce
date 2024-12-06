import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Buyernav from './Buyernav';

const LoginSecurity = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    username: '',
  });
  const [editField, setEditField] = useState(null);
  const [tempUser, setTempUser] = useState({ ...user });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = localStorage.getItem('loggedInUser');

    const currentUser = storedUsers.find((u) => u.username === loggedInUser);

    if (currentUser) {
      setUser(currentUser);
      setTempUser(currentUser);
    } else {
      console.warn('Logged-in user not found in localStorage.');
    }
  }, []);

  const updateUserInLocalStorage = (updatedUser) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = storedUsers.map((u) =>
      u.username === updatedUser.username ? updatedUser : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleSaveField = () => {
    const updatedUser = { ...user, [editField]: tempUser[editField] };
    setUser(updatedUser);
    updateUserInLocalStorage(updatedUser);
    setEditField(null);
  };

  const handleSaveAll = () => {
    setUser(tempUser);
    updateUserInLocalStorage(tempUser);
    setEditField(null);

    if (tempUser.password !== user.password) {
      alert('Password changed. Please log in again.');
      localStorage.removeItem('loggedInUser');
      navigate('/login');
    }
  };

  const handleInputChange = (field, value) => {
    setTempUser((prev) => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleCancel = () => {
    setTempUser(user);
    setEditField(null);
  };

  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '700px',
      margin: '20px auto',
      border: '1px solid #ddd',
      borderRadius: '8px',
      background: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      fontSize: '24px',
      marginBottom: '20px',
      fontWeight: '600',
      color: '#333',
    },
    section: {
      marginBottom: '20px',
      padding: '15px',
      borderBottom: '1px solid #ddd',
    },
    label: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
      fontSize: '16px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      marginTop: '8px',
      outline: 'none',
      transition: 'border 0.3s ease',
    },
    inputFocused: {
      borderColor: '#007BFF',
    },
    button: {
      padding: '8px 20px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    cancelButton: {
      backgroundColor: '#FF4136',
      marginLeft: '10px',
    },
    cancelButtonHover: {
      backgroundColor: '#d02a2a',
    },
    saveAllButton: {
      backgroundColor: '#28A745',
      color: '#fff',
      padding: '15px 0',
      borderRadius: '6px',
      cursor: 'pointer',
      width: '100%',
      marginTop: '20px',
      fontSize: '16px',
      fontWeight: '600',
    },
    passwordToggle: {
      cursor: 'pointer',
      color: '#007BFF',
      marginLeft: '10px',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <Buyernav />
      <h2 style={styles.header}>Login & Security</h2>

      {/* Firstname */}
      <div style={styles.section}>
        <div style={styles.label}>
          <span>Firstname</span>
          {editField === 'firstname' ? (
            <>
              <button
                style={{
                  ...styles.button,
                  ...styles.buttonHover,
                }}
                onClick={handleSaveField}
              >
                Save
              </button>
              <button
                style={{
                  ...styles.button,
                  ...styles.cancelButton,
                  ...styles.cancelButtonHover,
                }}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              style={{
                ...styles.button,
                ...styles.buttonHover,
              }}
              onClick={() => setEditField('firstname')}
            >
              Edit
            </button>
          )}
        </div>
        {editField === 'firstname' ? (
          <input
            type="text"
            value={tempUser.firstname}
            onChange={(e) => handleInputChange('firstname', e.target.value)}
            style={styles.input}
          />
        ) : (
          <p>{user.firstname}</p>
        )}
      </div>

      {/* Lastname */}
      <div style={styles.section}>
        <div style={styles.label}>
          <span>Lastname</span>
          {editField === 'lastname' ? (
            <>
              <button
                style={{
                  ...styles.button,
                  ...styles.buttonHover,
                }}
                onClick={handleSaveField}
              >
                Save
              </button>
              <button
                style={{
                  ...styles.button,
                  ...styles.cancelButton,
                  ...styles.cancelButtonHover,
                }}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              style={{
                ...styles.button,
                ...styles.buttonHover,
              }}
              onClick={() => setEditField('lastname')}
            >
              Edit
            </button>
          )}
        </div>
        {editField === 'lastname' ? (
          <input
            type="text"
            value={tempUser.lastname}
            onChange={(e) => handleInputChange('lastname', e.target.value)}
            style={styles.input}
          />
        ) : (
          <p>{user.lastname}</p>
        )}
      </div>

      {/* Email */}
      <div style={styles.section}>
        <div style={styles.label}>
          <span>Email</span>
          {editField === 'email' ? (
            <>
              <button
                style={{
                  ...styles.button,
                  ...styles.buttonHover,
                }}
                onClick={handleSaveField}
              >
                Save
              </button>
              <button
                style={{
                  ...styles.button,
                  ...styles.cancelButton,
                  ...styles.cancelButtonHover,
                }}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              style={{
                ...styles.button,
                ...styles.buttonHover,
              }}
              onClick={() => setEditField('email')}
            >
              Edit
            </button>
          )}
        </div>
        {editField === 'email' ? (
          <input
            type="email"
            value={tempUser.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            style={styles.input}
          />
        ) : (
          <p>{user.email}</p>
        )}
      </div>

      {/* Phone */}
      <div style={styles.section}>
        <div style={styles.label}>
          <span>Phone</span>
          {editField === 'phone' ? (
            <>
              <button
                style={{
                  ...styles.button,
                  ...styles.buttonHover,
                }}
                onClick={handleSaveField}
              >
                Save
              </button>
              <button
                style={{
                  ...styles.button,
                  ...styles.cancelButton,
                  ...styles.cancelButtonHover,
                }}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              style={{
                ...styles.button,
                ...styles.buttonHover,
              }}
              onClick={() => setEditField('phone')}
            >
              Edit
            </button>
          )}
        </div>
        {editField === 'phone' ? (
          <input
            type="tel"
            value={tempUser.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            style={styles.input}
          />
        ) : (
          <p>{user.phone}</p>
        )}
      </div>

      {/* Password */}
      <div style={styles.section}>
        <div style={styles.label}>
          <span>Password</span>
          {editField === 'password' ? (
            <>
              <button
                style={{
                  ...styles.button,
                  ...styles.buttonHover,
                }}
                onClick={handleSaveField}
              >
                Save
              </button>
              <button
                style={{
                  ...styles.button,
                  ...styles.cancelButton,
                  ...styles.cancelButtonHover,
                }}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              style={{
                ...styles.button,
                ...styles.buttonHover,
              }}
              onClick={() => setEditField('password')}
            >
              Change
            </button>
          )}
        </div>
        {editField === 'password' ? (
          <>
            <input
              type={showPassword ? 'text' : 'password'}
              value={tempUser.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              style={styles.input}
            />
            <span style={styles.passwordToggle} onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </>
        ) : (
          <p>{'********'}</p>
        )}
      </div>

      <button style={styles.saveAllButton} onClick={handleSaveAll}>
        Save All Changes
      </button>
    </div>
  );
};

export default LoginSecurity;
