import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Buyernav from '../Buyernav';

const ShirtDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Men's Classic White Cotton Shirt",
      price: "₹1000.00",
      image: "https://ramrajcotton.in/cdn/shop/files/2_caa6a8d2-2ae7-4a59-a46f-409377b96422.jpg?v=1717566673&width=300",
      label: "WHITE COTTON",
      description: "Classic white cotton shirt, a wardrobe essential for formal and casual wear.",
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: "Men's Blue Striped Casual Shirt",
      price: "₹1,200.00",
      image: "https://ramrajcotton.in/cdn/shop/files/default_1a955a92-46ca-478f-b797-5478d3301032.jpg?v=1720248133&width=300",
      label: "BLUE STRIPED",
      description: "Comfortable and stylish blue striped shirt, perfect for a casual outing.",
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      name: "Men's Black Formal Slim-Fit Shirt",
      price: "₹1,300.00",
      image: "https://ramrajcotton.in/cdn/shop/files/Default_e6d6d72a-601a-4276-83a5-4f5f6284cfef.jpg?v=1719901215&width=300",
      label: "BLACK FORMAL",
      description: "Elegant black slim-fit shirt for a sophisticated look.",
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 4,
      name: "Men's Green Checked Cotton Shirt",
      price: "₹1150.00",
      image: "https://ramrajcotton.in/cdn/shop/files/Default_a84dcb8f-f686-43b2-b6b4-99f1120e3025.jpg?v=1722237699&width=300",
      label: "GREEN CHECKED",
      description: "Casual green checked cotton shirt, ideal for a relaxed day out.",
      sizes: ['S', 'M', 'L', 'XL']
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
        <div style={styles.imageGallery}>
          <img src={product.image} alt={product.name} style={styles.thumbnail} />
          <img src={product.image} alt={product.name} style={styles.thumbnail} />
          <img src={product.image} alt={product.name} style={styles.thumbnail} />
          <img src={product.image} alt={product.name} style={styles.thumbnail} />
        </div>

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

export default ShirtDetail;
