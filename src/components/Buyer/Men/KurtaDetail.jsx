import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Buyernav from '../Buyernav';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('38 cm');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // Added useNavigate for redirection

  const products = [
    {
      id: 1,
      name: "Mens Cotton Full Sleeves Maroon Medium Length Pocket Kurta FS7",
      price: "₹1,145.00",
      image: "https://ramrajcotton.in/cdn/shop/files/240721_ramraj_ecom3390_4c6cb1bc-96bb-49d6-8fca-6bb8b9e1d1cc.jpg?v=1722921264&width=600",
      label: "MEDIUM LENGTH",
      description: "This is a high-quality cotton kurta perfect for casual wear. Designed with comfort and style in mind.",
      sizes: ['38 cm', '40 cm', '42 cm', '44 cm']
    },
    {
        id: 2,
        name: "Mens Cotton Full Sleeves Dark Green Medium Length Pocket Kurta FS5",
        price: "₹1,145.00",
        image: "https://ramrajcotton.in/cdn/shop/files/4_1debcfdf-76ef-4309-83b4-72e535404724.jpg?v=1693304645&width=600",
        label: "MEDIUM LENGTH",
        description: "This is a high-quality cotton kurta perfect for casual wear. Designed with comfort and style in mind.",
        sizes: ['38 cm', '40 cm', '42 cm', '44 cm']
      },
      {
        id: 3,
        name: "Mens Cream Colour Full Sleeves Short Length Kurta",
        price: "₹1,145.00",
        image: "https://ramrajcotton.in/cdn/shop/products/NewProject_1_54ef7e57-5f53-4d5a-969d-dc3e869f360d.jpg?v=1675514127&width=600",
        label: "MEDIUM LENGTH",
        description: "This is a high-quality cotton kurta perfect for casual wear. Designed with comfort and style in mind.",
        sizes: ['38 cm', '40 cm', '42 cm', '44 cm']
      },
      {
        id: 4,
        name: "Mens Cotton Full Sleeves Yellow Medium Length Pocket Kurta FS1",
        price: "₹1,145.00",
        image: "https://ramrajcotton.in/cdn/shop/files/3_08d971b9-19f7-4bd5-91f0-c741279a7085.jpg?v=1693304510&width=600",
        label: "MEDIUM LENGTH",
        description: "This is a high-quality cotton kurta perfect for casual wear. Designed with comfort and style in mind.",
        sizes: ['38 cm', '40 cm', '42 cm', '44 cm']
      },
      {
        id: 5,
        name: "Mens Cotton Full Sleeves Parrot Green Medium Length Pocket Kurta FS2",
        price: "₹1,145.00",
        image: "https://ramrajcotton.in/cdn/shop/files/3_b87cc041-2b6e-45c4-b5cd-33a64a4e45bb.jpg?v=1693304557&width=600",
        label: "MEDIUM LENGTH",
        description: "This is a high-quality cotton kurta perfect for casual wear. Designed with comfort and style in mind.",
        sizes: ['38 cm', '40 cm', '42 cm', '44 cm']
      },

    // Additional products here...
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
    // Logic for adding the product to the cart
    // Redirect to the cart page
    navigate('/cart'); // Assuming /cart is the cart page route
  };

  const handleBuyNow = () => {
    // Logic for handling the immediate purchase
    // Redirect to the address page
    navigate('/addresspage'); // Assuming /address is the address page route
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
    marginBottom: '10px', // added some space between buttons
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

export default ProductDetail;
