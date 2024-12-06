import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // For icons

const Footer = () => {
  const styles = {
    container: {
      backgroundColor: '#000', // Black background
      color: '#fff',
      padding: '40px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap', // Makes sure items wrap on smaller screens
      width: '100%', // Ensures it fits the page width
      boxSizing: 'border-box', // Ensures padding doesn't overflow
    },
    section: {
      flex: 1,
      minWidth: '200px', // Ensure each section has a minimum width
      padding: '0 20px',
    },
    sectionTitle: {
      color: '#f1c40f', // Changed to a gold/yellowish color for contrast
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    listItem: {
      color: '#ecf0f1', // Light grey for list items
      fontSize: '16px',
      marginBottom: '8px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    iconContainer: {
      display: 'flex',
      gap: '10px',
      marginTop: '20px',
    },
    icon: {
      color: '#fff',
      fontSize: '20px',
      cursor: 'pointer',
    },
    copyright: {
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '14px',
      color: '#fff',
      width: '100%',
    },
  };

  return (
    <footer style={{ width: '100%' }}> {/* Ensures full page width */}
      <div style={styles.container}>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>MY E-COMMERCE</h4>
          <p>
            At My E-Commerce, we offer a wide variety of products crafted with excellence. Our goal is to provide
            high-quality items that meet the needs of our valued customers.
          </p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>CATEGORIES</h4>
          <ul>
            <li><a href="/men" style={styles.listItem}>Men</a></li>
            <li><a href="/women" style={styles.listItem}>Women</a></li>
            
          </ul>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>MORE INFORMATION</h4>
          <ul>
            <li><a href="/about" style={styles.listItem}>About Us</a></li>
            <li><a href="/contact" style={styles.listItem}>Contact Us</a></li>
            <li><a href="/faq" style={styles.listItem}>FAQ</a></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>POLICIES</h4>
          <ul>
            <li><a href="/privacy" style={styles.listItem}>Privacy Policy</a></li>
            <li><a href="/terms" style={styles.listItem}>Terms & Conditions</a></li>
            <li><a href="/shipping" style={styles.listItem}>Shipping & Delivery</a></li>
            <li><a href="/refund" style={styles.listItem}>Refund Policy</a></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Follow Us</h4>
          <div style={styles.iconContainer}>
            <a href="https://facebook.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://instagram.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://youtube.com" style={styles.icon} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <p style={styles.copyright}>© 2024 D. Sri Rama Lokesh - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
