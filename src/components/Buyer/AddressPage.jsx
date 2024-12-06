import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Buyernav from './Buyernav';

// Mock function to simulate reverse geocoding from lat/lng to an address.
const reverseGeocode = async (lat, lng) => {
  return {
    street: '123 Live Location Street',
    city: 'Geo City',
    state: 'Geo State',
    postalCode: '123456',
    country: 'India',
  };
};

// Mock function to get address based on pincode.
const fetchAddressByPincode = async (pincode) => {
  return {
    street: '123 Pincode Street',
    city: 'Pincode City',
    state: 'Pincode State',
    postalCode: pincode,
    country: 'India',
  };
};

const AddressPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = location.state || [];

  const [address, setAddress] = useState({
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
  });

  const [savedAddresses, setSavedAddresses] = useState([]);
  const [showSavedAddresses, setShowSavedAddresses] = useState(false);

  // Fetch saved addresses from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedAddresses')) || [];
    setSavedAddresses(saved);

    // Autofill with user data if available
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setAddress((prev) => ({
        ...prev,
        fullName: user.fullName || prev.fullName,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
      }));
    }
  }, []);

  // Check if the user is logged in
  const isLoggedIn = () => !!localStorage.getItem('loggedInUser');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  // Fetch address from live location
  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const locationAddress = await reverseGeocode(latitude, longitude);
        setAddress((prev) => ({
          ...prev,
          ...locationAddress,
        }));
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  // Fetch address by pincode
  const handlePincodeChange = async (e) => {
    const pincode = e.target.value;
    setAddress({ ...address, postalCode: pincode });
    if (pincode.length === 6) {
      const pincodeAddress = await fetchAddressByPincode(pincode);
      setAddress((prev) => ({
        ...prev,
        ...pincodeAddress,
      }));
    }
  };

  // Save address and navigate to the payment page
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn()) {
      const updatedAddresses = [...savedAddresses, address];
      localStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));
      setSavedAddresses(updatedAddresses);
      // Pass the cartItems to the payment page
      navigate('/payment', { state: { cartItems } });
    } else {
      alert('Please log in to proceed to the payment page.');
      navigate('/login');
    }
  };

  const handleSelectSavedAddress = (selectedAddress) => {
    setAddress(selectedAddress);
    setShowSavedAddresses(false);
  };

  const handleDeleteAddress = (index) => {
    const updatedAddresses = savedAddresses.filter((_, i) => i !== index);
    localStorage.setItem('savedAddresses', JSON.stringify(updatedAddresses));
    setSavedAddresses(updatedAddresses);
  };

  const styles = {
    container: {
      padding: '20px',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      maxWidth: '700px',
      margin: '0 auto',
      backgroundColor: '#f4f7f6',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      padding: '25px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      border: '1px solid #ddd',
    },
    input: {
      padding: '14px',
      fontSize: '16px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      transition: 'border 0.3s ease',
    },
    inputFocus: {
      border: '1px solid #007BFF',
    },
    button: {
      padding: '14px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    locationButton: {
      padding: '14px',
      backgroundColor: '#28A745',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
    locationButtonHover: {
      backgroundColor: '#218838',
    },
    savedAddressesButton: {
      padding: '14px',
      backgroundColor: '#6c757d',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      width: '100%',
      transition: 'background-color 0.3s ease',
    },
    savedAddressList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginTop: '20px',
    },
    savedAddress: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px',
      backgroundColor: '#f1f1f1',
      borderRadius: '8px',
      border: '1px solid #ddd',
    },
    selectButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '8px 15px',
      cursor: 'pointer',
      borderRadius: '5px',
      fontSize: '14px',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      padding: '8px 15px',
      cursor: 'pointer',
      borderRadius: '5px',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>
      <Buyernav />
      <h2>Enter Your Address</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={address.fullName}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={address.email}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={address.phone}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="street"
          placeholder="Street"
          value={address.street}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="city"
          placeholder="City"
          value={address.city}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="state"
          placeholder="State"
          value={address.state}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={address.postalCode}
          onChange={handlePincodeChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="country"
          value={address.country}
          readOnly
        />
        <button style={styles.button} type="submit">Proceed to Payment</button>
      </form>
      <div>
        <button
          style={styles.locationButton}
          type="button"
          onClick={handleUseLocation}
        >
          Use Current Location
        </button>
      </div>

      <button
        style={styles.savedAddressesButton}
        onClick={() => setShowSavedAddresses(!showSavedAddresses)}
      >
        {showSavedAddresses ? 'Hide Saved Addresses' : 'Show Saved Addresses'}
      </button>

      {showSavedAddresses && (
        <div style={styles.savedAddressList}>
          <h3>Saved Addresses</h3>
          {savedAddresses.length === 0 ? (
            <p>No saved addresses.</p>
          ) : (
            savedAddresses.map((savedAddress, index) => (
              <div key={index} style={styles.savedAddress}>
                <div>
                  <p>{savedAddress.street}, {savedAddress.city}, {savedAddress.state}, {savedAddress.postalCode}, {savedAddress.country}</p>
                  <p>{savedAddress.fullName}, {savedAddress.phone}</p>
                </div>
                <div>
                  <button
                    style={styles.selectButton}
                    onClick={() => handleSelectSavedAddress(savedAddress)}
                  >
                    Select
                  </button>
                  <button
                    style={styles.deleteButton}
                    onClick={() => handleDeleteAddress(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AddressPage;
