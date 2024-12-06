import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logged out successfully');
    navigate('/'); // Redirect to the Home page
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/admin/dashboard" style={styles.navLink}>Dashboard</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/admin/userManagement" style={styles.navLink}>User Management</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/admin/ContentApprovel" style={styles.navLink}>Content Approval</Link>
        </li>
        <li style={styles.navItem}>
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: '15px',
    backgroundColor: '#1a1a1a',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    color: '#f0f0f0',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s, color 0.3s',
  },
  logoutButton: {
    color: '#f0f0f0',
    backgroundColor: 'transparent',
    border: '1px solid #f0f0f0',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s, color 0.3s',
  },
  hoverEffect: {
    navLink: {
      ':hover': {
        backgroundColor: '#575757',
        color: '#ffffff',
      },
    },
    logoutButton: {
      ':hover': {
        backgroundColor: '#f0f0f0',
        color: '#1a1a1a',
      },
    },
  },
};

export default AdminNav;
