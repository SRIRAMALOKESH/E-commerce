import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buyernav from '../Buyernav';

const Lehengas = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const products = [
    {
      id: 1,
      name: "Women's Red Embroidered Bridal Lehenga",
      price: "₹10,500.00",
      image: "https://example.com/images/lehenga1.jpg",
      label: "BRIDAL",
      color: 'Red',
      size: 'Free Size',
      description: "Elegant red bridal lehenga with intricate embroidery, ideal for weddings and special events.",
    },
    {
      id: 2,
      name: "Women's Blue Silk Party Wear Lehenga",
      price: "₹7,800.00",
      image: "https://example.com/images/lehenga2.jpg",
      label: "PARTY WEAR",
      color: 'Blue',
      size: 'Free Size',
      description: "Classic blue silk lehenga perfect for parties, with a stylish and comfortable design.",
    },
    {
      id: 3,
      name: "Women's Green Georgette Lehenga with Mirror Work",
      price: "₹9,500.00",
      image: "https://example.com/images/lehenga3.jpg",
      label: "MIRROR WORK",
      color: 'Green',
      size: 'Free Size',
      description: "Stylish green georgette lehenga adorned with mirror work, for a glamorous look.",
    },
    // Add more lehenga products as needed
  ];

  const handleColorFilter = (color) => {
    setSelectedColor(color);
  };

  const handleSizeFilter = (size) => {
    setSelectedSize(size);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedColor && selectedSize) {
      return product.color === selectedColor && product.size === selectedSize;
    }
    if (selectedColor) {
      return product.color === selectedColor;
    }
    if (selectedSize) {
      return product.size === selectedSize;
    }
    return true;
  });

  return (
    <div>
      <Buyernav />
      <div style={{ display: 'flex', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Filters Sidebar */}
        <aside style={{ width: '20%', paddingRight: '20px', backgroundColor: '#f8f8f8', borderRight: '1px solid #ddd' }}>
          <h3>Filters</h3>
          <div style={{ marginBottom: '20px' }}>
            <h4>Color</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ cursor: 'pointer' }} onClick={() => handleColorFilter('Red')}>Red</li>
              <li style={{ cursor: 'pointer' }} onClick={() => handleColorFilter('Blue')}>Blue</li>
              <li style={{ cursor: 'pointer' }} onClick={() => handleColorFilter('Green')}>Green</li>
              <li style={{ cursor: 'pointer' }} onClick={() => handleColorFilter('Pink')}>Pink</li>
              <li style={{ cursor: 'pointer' }} onClick={() => handleColorFilter('Yellow')}>Yellow</li>
            </ul>
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
          <h2>Women's Lehengas</h2>
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
                  <Link to={`/women/lehengas/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div
                      style={{
                        backgroundColor: 'darkblue',
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

export default Lehengas;
