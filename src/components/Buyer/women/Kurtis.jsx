import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buyernav from '../Buyernav';

const Kurtis = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const products = [
    {
      id: 1,
      name: "Women's Pink Printed Cotton Kurti",
      price: "₹1,200.00",
      image: "https://example.com/images/kurti1.jpg",
      label: "PRINTED",
      color: 'Pink',
      size: 'M',
      description: "Elegant pink cotton kurti with floral prints, perfect for casual outings.",
    },
    {
      id: 2,
      name: "Women's Blue Embroidered Rayon Kurti",
      price: "₹1,500.00",
      image: "https://example.com/images/kurti2.jpg",
      label: "EMBROIDERED",
      color: 'Blue',
      size: 'L',
      description: "Stylish blue rayon kurti with intricate embroidery for a chic look.",
    },
    {
      id: 3,
      name: "Women's Green Anarkali Kurti",
      price: "₹2,000.00",
      image: "https://example.com/images/kurti3.jpg",
      label: "ANARKALI",
      color: 'Green',
      size: 'Free Size',
      description: "Flowy green Anarkali kurti ideal for traditional events.",
    },
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
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap' }}>
              {['Pink', 'Blue', 'Green'].map((color) => (
                <li
                  key={color}
                  style={{
                    width: '30px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '50%',
                    backgroundColor: color.toLowerCase(),
                    cursor: 'pointer',
                    border: selectedColor === color ? '2px solid #333' : 'none',
                  }}
                  onClick={() => handleColorFilter(color)}
                />
              ))}
            </ul>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h4>Size</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {['S', 'M', 'L', 'Free Size'].map((size) => (
                <li key={size} style={{ cursor: 'pointer' }} onClick={() => handleSizeFilter(size)}>
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Products Section */}
        <main style={{ width: '80%' }}>
          <h2>Women's Kurtis Collection</h2>
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
                  <Link to={`/women/kurti/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div
                      style={{
                        backgroundColor: 'darkorange',
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

export default Kurtis;
