import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome for icons
import Buyernav from './Buyernav';

const AccountPage = () => {
  const navigate = useNavigate();

  const accountOptions = [
    { title: "Your Orders", description: "Track, return, cancel an order, download invoice or buy again", icon: "fa fa-shopping-bag", path: "/orders" },
    { title: "Login & security", description: "Edit login, name, and mobile number", icon: "fa fa-lock", path: "/login-security" },
    { title: "Your Addresses", description: "Edit, remove or set default address", icon: "fa fa-map-marker", path: "/addresspage" },
    { title: "Your business account", description: "Sign up for business-only pricing and deliveries", icon: "fa fa-building", path: "/business-account" },
    { title: "Your Payments", description: "View all transactions, manage payment methods", icon: "fa fa-credit-card", path: "/payments" },
    { title: "Archived Orders", description: "View and manage your archived orders", icon: "fa fa-archive", path: "/archived-orders" },
    { title: "Customer Service", description: "Browse help articles or contact us", icon: "fa fa-headset", path: "/customer-service" },
    { title: "Your Messages", description: "View or respond to messages from Amazon, Sellers, and Buyers", icon: "fa fa-envelope", path: "/messages" },
  ];

  const styles = {
    accountPage: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s ease',
    },
    optionHover: {
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    icon: {
      fontSize: '40px',
      color: '#007185',
      marginRight: '20px',
    },
    info: {
      h4: {
        fontSize: '18px',
        margin: '0',
      },
      p: {
        fontSize: '14px',
        color: '#555',
      },
    },
  };

  return (
    <div style={styles.accountPage}>
        <Buyernav/>
      <h2 style={styles.title}>Your Account</h2>
      <div style={styles.grid}>
        {accountOptions.map((option, index) => (
          <div 
            key={index} 
            style={styles.option} 
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = styles.optionHover.boxShadow}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            onClick={() => navigate(option.path)}
          >
            <i className={`${option.icon}`} style={styles.icon}></i>
            <div>
              <h4 style={styles.info.h4}>{option.title}</h4>
              <p style={styles.info.p}>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountPage;
