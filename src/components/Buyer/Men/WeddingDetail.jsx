import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Buyernav from '../Buyernav';

const WeddingSetDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('Free Size');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const weddingSets = [
    {
      id: 1,
      name: "Men's Silk Wedding Set with Embroidered Shawl",
      price: "₹3,500.00",
      image: "https://ramrajcotton.in/cdn/shop/products/Untitleddesign_7.jpg?v=1680695187&width=900",
      label: "EMBROIDERED",
      description: "Premium silk wedding set with an intricately embroidered shawl, perfect for a traditional and regal look.",
      sizes: ['Free Size'],
    },
    {
      id: 2,
      name: "Men's Gold Brocade Wedding Set",
      price: "₹4,200.00",
      image: "https://ramrajcotton.in/cdn/shop/files/03_1a60a270-740d-4263-b11f-d8d2ff70a8f4.jpg?v=1728998478&width=300",
      label: "BROCADE",
      description: "Elegant wedding set with gold brocade fabric, ideal for a luxurious appearance.",
      sizes: ['Free Size'],
    },
    {
      id: 3,
      name: "Men's Classic White Wedding Set with Golden Border",
      price: "₹4,500.00",
      image: "https://ramrajcotton.in/cdn/shop/files/03_1a60a270-740d-4263-b11f-d8d2ff70a8f4.jpg?v=1728998478&width=300",
      label: "GOLDEN BORDER",
      description: "Traditional white wedding set with a subtle golden border, perfect for classic occasions.",
      sizes: ['Free Size'],
    },
    // Additional wedding sets here...
  ];

  const product = weddingSets.find((set) => set.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    navigate('/cart');
  };

  const handleBuyNow = () => {
    navigate('/addresspage');
  };

  return (
    <div>
      <Buyernav />
      <div style={styles.container}>
        <div style={styles.imageGallery}>
          <img src={product.image} alt={product.name} style={styles.thumbnail} />
          <img src={product.image} alt={product.name} style={styles.thumbnail} />
          <img src={product.image} alt={product.name} style={styles.thumbnail} />
        </div>

        <div style={styles.productInfo}>
          <img src={product.image} alt={product.name} style={styles.mainImage} />
          <div style={styles.productDetails}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div style={styles.sizeSelection}>
              <p>Size:</p>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  style={{
                    ...styles.sizeButton,
                    backgroundColor: size === selectedSize ? '#4CAF50' : '#fff',
                    color: size === selectedSize ? '#fff' : '#000',
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
            <p style={styles.price}>Price: {product.price}</p>
            <div style={styles.quantityControl}>
              <label>Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                style={styles.quantityInput}
                min="1"
              />
            </div>
            <button onClick={handleAddToCart} style={styles.addToCartButton}>
              Add to Cart
            </button>
            <button onClick={handleBuyNow} style={styles.buyNowButton}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  imageGallery: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '20px',
  },
  thumbnail: {
    width: '80px',
    height: '80px',
    marginBottom: '10px',
    cursor: 'pointer',
    border: '1px solid #ccc',
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  mainImage: {
    width: '100%',
    marginBottom: '20px',
    borderRadius: '5px',
  },
  productDetails: {
    paddingLeft: '20px',
  },
  sizeSelection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  sizeButton: {
    padding: '10px 20px',
    margin: '0 10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  price: {
    fontSize: '20px',
    marginBottom: '20px',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  quantityInput: {
    width: '60px',
    marginLeft: '10px',
    padding: '5px',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  buyNowButton: {
    backgroundColor: '#FFA500',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default WeddingSetDetail;
