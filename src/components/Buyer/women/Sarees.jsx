import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buyernav from '../Buyernav';

const Sarees = () => {
  const [searchColor, setSearchColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const products = [
    {
      id: 1,
      name: "Women's Silk Red Saree with Gold Zari",
      price: "₹2,500.00",
      image: "https://example.com/images/saree1.jpg",
      label: "ZARI BORDER",
      color: 'Red',
      size: 'Free Size',
      description: "Elegant red silk saree with a traditional gold zari border, perfect for festive occasions.",
    },
    {
      id: 2,
      name: "Women's Cotton Blue Checked Saree",
      price: "₹1,200.00",
      image: "https://example.com/images/saree2.jpg",
      label: "CHECKED",
      color: 'Blue',
      size: 'Free Size',
      description: "Classic blue cotton saree with checked patterns for a timeless traditional look.",
    },
    {
      id: 3,
      name: "Women's Green Georgette Embroidered Saree",
      price: "₹3,000.00",
      image: "https://example.com/images/saree3.jpg",
      label: "EMBROIDERED",
      color: 'Green',
      size: 'Free Size',
      description: "Stylish green georgette saree with intricate embroidery, adding a touch of elegance.",
    },
    // Add more saree products as needed
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
      <div style={{ display: 'flex', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Filters Sidebar */}
        <aside style={{ width: '20%', paddingRight: '20px', backgroundColor: '#f8f8f8', borderRight: '1px solid #ddd' }}>
          <h3>Filters</h3>
          <div style={{ marginBottom: '20px' }}>
            <h4>Search by Color</h4>
            <input
              type="text"
              placeholder="Search color..."
              value={searchColor}
              onChange={handleSearchColor}
              style={{
                width: '100%',
                padding: '8px',
                fontSize: '14px',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4>Size</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ cursor: 'pointer' }} onClick={() => handleSizeFilter('Free Size')}>Free Size</li>
            </ul>
          </div>
        </aside>

        {/* Products Section */}
        <main style={{ width: '80%' }}>
          <h2>Women's Sarees</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    border: '1px solid #ddd',
                    padding: '10px',
                    textAlign: 'center',
                    borderRadius: '5px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Link to={`/women/sarees/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div
                      style={{
                        backgroundColor: 'purple',
                        color: 'white',
                        padding: '5px 10px',
                        fontSize: '14px',
                        borderRadius: '3px',
                        marginBottom: '10px',
                        display: 'inline-block',
                      }}
                    >
                      {product.label}
                    </div>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
                    />
                    <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{product.name}</h3>
                    <p style={{ fontSize: '16px', color: '#333' }}>{product.price}</p>
                  </Link>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sarees;
