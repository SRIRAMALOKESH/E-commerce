import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome styles

const Buyernav = () => {
  const navigate = useNavigate();
  const buyer = JSON.parse(localStorage.getItem('loggedInUser'));

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#131a22',
      padding: '10px 20px',
      color: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: 'Arial, sans-serif',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '25px',
      flexGrow: 1,
      justifyContent: 'center',
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      cursor: 'pointer',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    search: {
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      fontSize: '16px',
      width: '300px',
      marginRight: '10px',
    },
    accountInfo: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      position: 'relative',
    },
    accountText: {
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },
    logoutButton: {
      backgroundColor: 'transparent',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
    },
    cartButton: {
      backgroundColor: 'transparent',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
    },
    cartIcon: {
      marginRight: '5px',
      fontSize: '20px',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      right: 0,
      backgroundColor: '#fff',
      color: '#000',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '4px',
      width: '250px',
      padding: '10px',
      display: showDropdown ? 'block' : 'none',
      zIndex: 2000,
    },
    dropdownSection: {
      marginBottom: '10px',
    },
    dropdownSectionTitle: {
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    dropdownItem: {
      marginBottom: '5px',
      cursor: 'pointer',
      color: '#007185',
    },
    logoButton: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
    },
  };

  // Handle search input change
  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      // Example products array - replace this with your actual product data
      const products = [
        { name: 'Shirt' },
        { name: 'Shoes' },
        { name: 'Pants' },
        { name: 'Hat' },
      ];

      // Filtering products based on the search query
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  // Handle when a user clicks on a search result
  const handleSearchResultClick = (item) => {
    // Navigate to the relevant product or category page based on the item clicked
    navigate(`/product/${item.name}`);
  };

  return (
    <div style={styles.navbar}>
      <button style={styles.logoButton} onClick={() => navigate('/buyer')}>
        E-Shop
      </button>
      <div style={styles.navLinks}>
        <span style={styles.navLink} onClick={() => navigate('/men')}>Men</span>
        <span style={styles.navLink} onClick={() => navigate('/women')}>Women</span>
        <div style={styles.searchContainer}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInput}
            placeholder="Search..."
            style={styles.search}
          />
          {/* Display filtered results dynamically below the input */}
          {searchQuery && filteredResults.length > 0 && (
            <div
              style={{
                position: 'absolute',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                width: '300px',
                zIndex: 1000,
              }}
            >
              {filteredResults.map((result, index) => (
                <div
                  key={index}
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #ddd',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleSearchResultClick(result)}
                >
                  {result.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        style={styles.accountInfo}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <span style={styles.accountText}>
          Hello, {buyer?.username} &nbsp;<i className="fa fa-caret-down"></i>
        </span>
        <div style={styles.dropdown}>
          <div style={styles.dropdownSection}>
            <div style={styles.dropdownSectionTitle}>Your Account</div>
            <div style={styles.dropdownItem} onClick={() => navigate('/account')}>Account</div>
            <div style={styles.dropdownItem} onClick={() => navigate('/orders')}>Orders</div>
            <div style={styles.dropdownItem} onClick={() => navigate('/feedback')}>Feedback</div>
            <div style={styles.dropdownItem} onClick={() => navigate('/')}>Sign Out</div>
          </div>
        </div>
        <button style={styles.cartButton} onClick={() => navigate('/cart')}>
          <i className="fa fa-shopping-cart" aria-hidden="true" title="Cart" style={styles.cartIcon}></i>
          Cart
        </button>
      </div>
    </div>
  );
};

export default Buyernav;
