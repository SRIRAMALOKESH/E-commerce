import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Buyernav from '../Buyernav';

const Haldi = () => {
  const [searchColor, setSearchColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const products = [
    {
      id: 1,
      name: "Yellow Lehenga with Floral Embroidery",
      price: "₹3,500.00",
      image: "https://example.com/images/women-haldi1.jpg",
      label: "LEHENGA",
      color: 'Yellow',
      size: 'M',
      description: "Elegant yellow lehenga with delicate floral embroidery, perfect for a Haldi ceremony.",
    },
    {
      id: 2,
      name: "Yellow Saree with Golden Border",
      price: "₹2,800.00",
      image: "https://example.com/images/women-haldi2.jpg",
      label: "SAREE",
      color: 'Yellow',
      size: 'Free Size',
      description: "A vibrant yellow saree with a golden border for a graceful Haldi look.",
    },
    {
      id: 3,
      name: "Traditional Yellow Salwar Suit",
      price: "₹1,500.00",
      image: "https://example.com/images/women-haldi3.jpg",
      label: "SALWAR SUIT",
      color: 'Yellow',
      size: 'L',
      description: "Classic yellow salwar suit, comfortable and stylish for Haldi functions.",
    },
    {
      id: 4,
      name: "Yellow Anarkali Dress with Gota Work",
      price: "₹3,000.00",
      image: "https://example.com/images/women-haldi4.jpg",
      label: "ANARKALI",
      color: 'Yellow',
      size: 'S',
      description: "Beautiful yellow Anarkali with Gota work, adding an elegant touch to your Haldi outfit.",
    },
    {
      id: 5,
      name: "Yellow Kurta with Palazzo Set",
      price: "₹2,200.00",
      image: "https://example.com/images/women-haldi5.jpg",
      label: "KURTA SET",
      color: 'Yellow',
      size: 'M',
      description: "Trendy yellow kurta and palazzo set, designed to keep you comfortable and stylish for Haldi.",
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
              <li style={{ cursor: 'pointer' }} onClick={() => handleSizeFilter('S')}>S</li>
              <li style={{ cursor: 'pointer' }} onClick={() => handleSizeFilter('M')}>M</li>
              <li style={{ cursor: 'pointer' }} onClick={() => handleSizeFilter('L')}>L</li>
              <li style={{ cursor: 'pointer' }} onClick={() => handleSizeFilter('Free Size')}>Free Size</li>
            </ul>
          </div>
        </aside>

        {/* Products Section */}
        <main style={{ width: '80%' }}>
          <h2>Women's Haldi Collection</h2>
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
                  <Link to={`/women/haldi/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div
                      style={{
                        backgroundColor: 'goldenrod',
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

export default Haldi;
