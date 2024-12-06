import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buyernav from '../Buyernav';

const WeddingSets = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [searchColor, setSearchColor] = useState('');

  const products = [
    {
      id: 1,
      name: "Men's Traditional Off-White Wedding Set",
      price: "₹3,500.00",
      image: "https://ramrajcotton.in/cdn/shop/products/Untitleddesign_7.jpg?v=1680695187&width=900",
      label: "WHITE",
      color: 'White',
      size: 'L',
      description: "Elegant off-white wedding set with intricate embroidery, perfect for special occasions.",
    },
    {
      id: 2,
      name: "Men's Maroon Wedding Set with Golden Border",
      price: "₹4,200.00",
      image: "https://ramrajcotton.in/cdn/shop/files/03_1a60a270-740d-4263-b11f-d8d2ff70a8f4.jpg?v=1728998478&width=300",
      label: "MAROON",
      color: 'Maroon',
      size: 'M',
      description: "Luxurious maroon wedding set adorned with golden borders for a royal look.",
    },
    {
      id: 3,
      name: "Men's Black Wedding Set with Silver Embroidery",
      price: "₹4,500.00",
      image: "https://ramrajcotton.in/cdn/shop/files/01_1341cc5f-66d3-4dd7-9cea-c98b519e0c9a.jpg?v=1729066270&width=1000",
      label: "BLACK",
      color: 'Black',
      size: 'L',
      description: "Stylish black wedding set featuring beautiful silver embroidery, perfect for receptions.",
    },
    {
      id: 4,
      name: "Men's Blue Wedding Set with Floral Patterns",
      price: "₹3,800.00",
      image: "https://ramrajcotton.in/cdn/shop/files/03_87ffa56b-9616-418e-85f7-412b94709086.jpg?v=1728998716&width=300",
      label: "BLUE",
      color: 'Blue',
      size: 'M',
      description: "Charming blue wedding set with floral patterns, ideal for modern weddings.",
    },
    {
      id: 5,
      name: "Men's Cream Wedding Set with Zari Work",
      price: "₹4,000.00",
      image: "https://ramrajcotton.in/cdn/shop/products/34INCH_bef7395e-16c1-4e58-9838-4ab9b83bfa24.jpg?v=1633677487&width=300",
      label: "CREAM",
      color: 'Cream',
      size: 'L',
      description: "Traditional cream wedding set with exquisite zari work, perfect for cultural ceremonies.",
    },
  ];

  const handleSizeFilter = (size) => {
    setSelectedSize(size);
  };

  const handleSearchColor = (event) => {
    setSearchColor(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSize = selectedSize ? product.size === selectedSize : true;
    const matchesSearchColor = product.color.toLowerCase().includes(searchColor.toLowerCase());

    return matchesSize && matchesSearchColor;
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
              placeholder="Search color..."
              value={searchColor}
              onChange={handleSearchColor}
              style={styles.searchInput}
            />
          </div>
          <div style={styles.filterGroup}>
            <h4 style={styles.filterTitle}>Size</h4>
            <ul style={styles.filterList}>
              <li style={styles.filterItem} onClick={() => handleSizeFilter('M')}>M</li>
              <li style={styles.filterItem} onClick={() => handleSizeFilter('L')}>L</li>
            </ul>
          </div>
        </aside>

        {/* Products Section */}
        <main style={styles.productsContainer}>
          <h2 style={styles.productsHeading}>Men's Wedding Sets</h2>
          <div style={styles.productGrid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} style={styles.productCard}>
                  <Link to={`/men/weddingsets/${product.id}`} style={styles.productLink}>
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
    padding: '8px',
    fontSize: '14px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  filterList: {
    listStyleType: 'none',
    padding: 0,
  },
  filterItem: {
    cursor: 'pointer',
    padding: '5px 0',
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

export default WeddingSets;
