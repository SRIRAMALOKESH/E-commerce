import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buyernav from '../Buyernav';

const Festivalcollections = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const products = [
    {
      id: 1,
      name: "Embroidered Red Saree",
      price: "₹4,000.00",
      image: "https://example.com/images/festival-red-saree.jpg",
      label: "SAREE",
      color: 'Red',
      size: 'Free Size',
      description: "Elegant red saree with golden embroidery, perfect for festive celebrations.",
    },
    {
      id: 2,
      name: "Navy Blue Anarkali Gown",
      price: "₹5,200.00",
      image: "https://example.com/images/festival-anarkali.jpg",
      label: "ANARKALI",
      color: 'Blue',
      size: 'M',
      description: "Stylish navy blue Anarkali gown, ideal for a traditional yet trendy look at festivals.",
    },
    {
      id: 3,
      name: "Golden Lehenga Choli Set",
      price: "₹7,000.00",
      image: "https://example.com/images/festival-lehenga.jpg",
      label: "LEHENGA",
      color: 'Gold',
      size: 'L',
      description: "Beautiful golden lehenga choli set that adds a touch of glamour to your festive attire.",
    },
    {
      id: 4,
      name: "Green Kurta with Dupatta Set",
      price: "₹3,500.00",
      image: "https://example.com/images/festival-kurta.jpg",
      label: "KURTA SET",
      color: 'Green',
      size: 'S',
      description: "Classic green kurta with a dupatta, perfect for an elegant festive outfit.",
    },
    {
      id: 5,
      name: "Peach Sharara Suit",
      price: "₹4,500.00",
      image: "https://example.com/images/festival-sharara.jpg",
      label: "SHARARA",
      color: 'Peach',
      size: 'M',
      description: "Trendy peach sharara suit for a stylish and comfortable festive look.",
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
              {['Red', 'Blue', 'Gold', 'Green', 'Peach'].map((color) => (
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
          <h2>Women's Festival Collection</h2>
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
                  <Link to={`/women/festival/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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

export default Festivalcollections;
