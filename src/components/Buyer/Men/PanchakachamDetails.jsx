import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Buyernav from '../Buyernav';

const PanchakachamDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Traditional White Cotton Panchakacham",
      price: "₹1500.00",
      image: "https://ramrajcotton.in/cdn/shop/products/Untitled-1_0016_DSC09242.jpg?v=1659763176&width=600",
      label: "WHITE",
      description: "Traditional white cotton panchakacham, perfect for rituals and traditional ceremonies.",
      sizes: ['M', 'L', 'XL']
    },
    {
      id: 2,
      name: "Men's Golden Yellow Silk Panchakacham",
      price: "₹1,700.00",
      image: "https://ramrajcotton.in/cdn/shop/files/Untitled-1_0034_01.jpg?v=1727173579&width=300",
      label: "GOLDEN YELLOW",
      description: "Luxurious golden yellow silk panchakacham, ideal for weddings and special occasions.",
      sizes: ['M', 'L', 'XL']
    },
    
  ];

  const product = products.find((prod) => prod.id === parseInt(id));

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
        {/* Left side: Image Thumbnails */}
        <div style={styles.imageGallery}>
          <img src={product.image} alt={product.name} style={styles.thumbnail} />
          <img src={product.image} alt={product.name} style={styles.thumbnail} />
          <img src={product.image} alt={product.name} style={styles.thumbnail} />
          <img src={product.image} alt={product.name} style={styles.thumbnail} />
        </div>

        {/* Main Product Info */}
        <div style={styles.productInfo}>
          <img src={product.image} alt={product.name} style={styles.mainImage} />
          <div style={styles.productDetails}>
            <h2>{product.name}</h2>
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

            {/* Add to Cart and Buy Now Buttons */}
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

export default PanchakachamDetails;
