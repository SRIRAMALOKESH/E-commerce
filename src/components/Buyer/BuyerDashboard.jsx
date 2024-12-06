// BuyerDashboard.jsx
import React from 'react';

import Products from '../Pages/Products/Products';
import Footer from '../Footer/Footer';
import Slider from '../Pages/Slider/Slider';

 // Adjust the import path as necessary

const BuyerDashboard = () => {
 

  // Get the logged-in buyer's info from localStorage
 

  // CSS styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      minHeight: '100vh',
    },
    content: {
      marginTop: '30px',
    },
  };

  return (
    <div style={styles.container}>
      
      
      <div style={styles.content}>
        <Slider />
        <Products />
        <Footer />
      </div>
    </div>
  );
};

export default BuyerDashboard;
