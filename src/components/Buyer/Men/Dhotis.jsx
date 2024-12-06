import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buyernav from '../Buyernav';

const Shirts = () => {
  const [searchColor, setSearchColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const products = [
    {
      id: 1,
      name: "Men's Cotton White Shirt",
      price: "₹1,000.00",
      image: "https://ramrajcotton.in/cdn/shop/files/2_caa6a8d2-2ae7-4a59-a46f-409377b96422.jpg?v=1717566673&width=300",
      label: "WHITE",
      color: 'White',
      size: 'M',
      description: "Classic white cotton shirt, perfect for formal and casual occasions.",
    },
    {
      id: 2,
      name: "Men's Cotton Blue Shirt",
      price: "₹1,200.00",
      image: "https://ramrajcotton.in/cdn/shop/files/default_1a955a92-46ca-478f-b797-5478d3301032.jpg?v=1720248133&width=300",
      label: "BLUE",
      color: 'Blue',
      size: 'L',
      description: "Stylish blue cotton shirt that adds a touch of elegance to your wardrobe.",
    },
    {
      id: 3,
      name: "Men's Checked Green Shirt",
      price: "₹1,150.00",
      image: "https://ramrajcotton.in/cdn/shop/files/Default_a84dcb8f-f686-43b2-b6b4-99f1120e3025.jpg?v=1722237699&width=300",
      label: "CHECKED",
      color: 'Green',
      size: 'M',
      description: "Comfortable checked green shirt, perfect for a casual day out.",
    },
    {
      id: 4,
      name: "Men's Cotton Black Shirt",
      price: "₹1,300.00",
      image: "https://ramrajcotton.in/cdn/shop/files/Default_e6d6d72a-601a-4276-83a5-4f5f6284cfef.jpg?v=1719901215&width=300",
      label: "BLACK",
      color: 'Black',
      size: 'L',
      description: "Elegant black shirt suitable for formal and semi-formal occasions.",
    },
    {
      id: 5,
      name: "Men's Cotton Maroon Shirt",
      price: "₹1,500.00",
      image: "https://ramrajcotton.in/cdn/shop/files/Default_2649339e-aac6-41f3-81bb-54a188d33899.jpg?v=1724302972&width=300",
      label: "MAROON",
      color: 'Maroon',
      size: 'M',
      description: "Sophisticated maroon shirt that enhances your overall style.",
    },
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
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div>
        </aside>

        {/* Products Section */}
        <main style={styles.productsContainer}>
          <h2 style={styles.productsHeading}>Men's Shirts</h2>
          <div style={styles.productGrid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} style={styles.productCard}>
                  <Link to={`/men/shirts/${product.id}`} style={styles.productLink}>
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

export default Shirts;
