import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buyernav from '../Buyernav';

const Kurtas = () => {
  const [searchColor, setSearchColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const products = [
    {
      id: 1,
      name: "Mens Cotton Full Sleeves Maroon Medium Length Pocket Kurta FS7",
      price: "₹1,145.00",
      image: "https://ramrajcotton.in/cdn/shop/files/240721_ramraj_ecom3390_4c6cb1bc-96bb-49d6-8fca-6bb8b9e1d1cc.jpg?v=1722921264&width=600",
      label: "MEDIUM LENGTH",
      color: 'White',
      size: 'Medium',
      description: "This is a high-quality cotton kurta perfect for casual wear. Designed with comfort and style in mind."
    },
    {
      id: 2,
      name: "Mens Cotton Full Sleeves Dark Green Medium Length Pocket Kurta FS5",
      price: "From ₹980.00",
      image: "https://ramrajcotton.in/cdn/shop/files/4_1debcfdf-76ef-4309-83b4-72e535404724.jpg?v=1693304645&width=600",
      label: "MEDIUM LENGTH",
      color: 'White',
      size: 'Medium',
      description: "A solid white cotton kurta, offering a simple yet elegant design for everyday use."
    },
    {
      id: 3,
      name: "Mens Cream Colour Full Sleeves Short Length Kurta",
      price: "From ₹1,325.00",
      image: "https://ramrajcotton.in/cdn/shop/products/NewProject_1_54ef7e57-5f53-4d5a-969d-dc3e869f360d.jpg?v=1675514127&width=600",
      label: "SHORT LENGTH",
      color: 'Grey',
      size: 'Large',
      description: "A stylish grey striped kurta with a modern touch, perfect for casual and semi-formal occasions."
    },
    {
      id: 4,
      name: "Mens Cotton Full Sleeves Yellow Medium Length Pocket Kurta FS1",
      price: "From ₹1,200.00",
      image: "https://ramrajcotton.in/cdn/shop/files/3_08d971b9-19f7-4bd5-91f0-c741279a7085.jpg?v=1693304510&width=600",
      label: "SHORT LENGTH",
      color: 'Grey',
      size: 'Large',
      description: "A stylish grey striped kurta with a modern touch, perfect for casual and semi-formal occasions."
    },
    {
      id: 5,
      name: "Mens Cotton Full Sleeves Parrot Green Medium Length Pocket Kurta FS2",
      price: "From ₹1,250.00",
      image: "https://ramrajcotton.in/cdn/shop/files/3_b87cc041-2b6e-45c4-b5cd-33a64a4e45bb.jpg?v=1693304557&width=600",
      label: "SHORT LENGTH",
      color: 'Grey',
      size: 'Large',
      description: "A stylish grey striped kurta with a modern touch, perfect for casual and semi-formal occasions."
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
              <option value="Free Size">Free Size</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        </aside>

        {/* Products Section */}
        <main style={styles.productsContainer}>
          <h2 style={styles.productsHeading}>Men's Kurtas</h2>
          <div style={styles.productGrid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} style={styles.productCard}>
                  <Link to={`/men/kurtas/${product.id}`} style={styles.productLink}>
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

export default Kurtas;
