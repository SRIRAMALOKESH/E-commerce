import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buyernav from '../Buyernav';

const Panchakacham = () => {
  const [searchColor, setSearchColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const products = [
    {
      id: 1,
      name: "Men's White Cotton Panchakacham with Zari Border",
      price: "₹1,500.00",
      image: "https://ramrajcotton.in/cdn/shop/products/Untitled-1_0016_DSC09242.jpg?v=1659763176&width=600",
      label: "ZARI BORDER",
      color: 'White',
      size: 'Free Size',
      description: "Traditional white cotton panchakacham with a zari border, perfect for festivals and cultural events.",
    },
    {
      id: 2,
      name: "Men's Yellow Panchakacham with Red Border",
      price: "₹1,800.00",
      image: "https://ramrajcotton.in/cdn/shop/files/Untitled-1_0034_01.jpg?v=1727173579&width=300",
      label: "RED BORDER",
      color: 'Yellow',
      size: 'Free Size',
      description: "A premium yellow panchakacham with red border, adding a touch of elegance to traditional attire.",
    },
    // Add additional products here...
  ];

  const handleSearchColorChange = (e) => {
    setSearchColor(e.target.value.toLowerCase());
  };

  const handleSizeFilterChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesColor = searchColor
      ? product.color.toLowerCase().includes(searchColor)
      : true;
    const matchesSize = selectedSize ? product.size === selectedSize : true;
    return matchesColor && matchesSize;
  });

  return (
    <div>
      <Buyernav />
      <div style={styles.pageContainer}>
        {/* Filters Sidebar */}
        <aside style={styles.sidebar}>
          <h3 style={styles.sidebarHeading}>Filters</h3>
          <div style={styles.filterGroup}>
            <h4 style={styles.filterTitle}>Search by Color</h4>
            <input
              type="text"
              placeholder="Enter color..."
              style={styles.searchInput}
              value={searchColor}
              onChange={handleSearchColorChange}
            />
          </div>
          <div style={styles.filterGroup}>
            <h4 style={styles.filterTitle}>Select Size</h4>
            <select
              style={styles.dropdown}
              value={selectedSize}
              onChange={handleSizeFilterChange}
            >
              <option value="">All Sizes</option>
              <option value="Free Size">Free Size</option>
            </select>
          </div>
        </aside>

        {/* Products Section */}
        <main style={styles.productsContainer}>
          <h2 style={styles.productsHeading}>Men's Panchakacham</h2>
          <div style={styles.productGrid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} style={styles.productCard}>
                  <Link to={`/men/panchakacham/${product.id}`} style={styles.productLink}>
                    <div style={styles.labelBadge}>{product.label}</div>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={styles.productImage}
                    />
                    <h3 style={styles.productName}>{product.name}</h3>
                    <p style={styles.productPrice}>{product.price}</p>
                  </Link>
                </div>
              ))
            ) : (
              <p style={styles.noProductsMessage}>No products found</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '20px',
  },
  sidebar: {
    width: '25%',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  sidebarHeading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  filterGroup: {
    marginBottom: '20px',
  },
  filterTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
  },
  dropdown: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
    backgroundColor: '#fff',
  },
  productsContainer: {
    width: '75%',
  },
  productsHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  productLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  labelBadge: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '5px 10px',
    fontSize: '14px',
    borderRadius: '3px',
    marginBottom: '10px',
    display: 'inline-block',
  },
  productImage: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '10px',
    borderRadius: '5px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  productPrice: {
    fontSize: '16px',
    color: '#333',
  },
  noProductsMessage: {
    fontSize: '18px',
    color: '#888',
    textAlign: 'center',
  },
};

export default Panchakacham;
