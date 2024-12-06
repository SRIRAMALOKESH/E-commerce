import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BuyerNav from "../Buyernav";

const DhotiDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("38 cm");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");

  // Retrieve logged-in user
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const dhotis = [
    {
      id: 1,
      name: "Traditional Cotton Dhoti - White",
      price: 850,
      image: "https://ramrajcotton.in/cdn/shop/files/4_a3f1f072-1330-44cf-83c8-af8d9de25cbf.jpg?v=1716009335&width=600",
      label: "TRADITIONAL WEAR",
      description: "A comfortable, classic cream-colored cotton dhoti perfect for traditional events.",
      sizes: ["38 cm", "40 cm", "42 cm", "44 cm"],
    },
    {
      id: 2,
      name: "Golden Border Cotton Dhoti",
      price: 1200,
      image: "https://ramrajcotton.in/cdn/shop/files/2_4c746c90-1a2f-4efa-b9b6-24c8e5c3c186.jpg?v=1724763376&width=600",
      label: "CASUAL WEAR",
      description: "Elegant cotton dhoti with a golden border, suitable for casual and semi-formal occasions.",
      sizes: ["38 cm", "40 cm", "42 cm", "44 cm"],
    },
    // Add more products as needed...
  ];

  // Find the product by ID
  const product = dhotis.find((item) => item.id === parseInt(id));
  if (!product) return <p>Product not found</p>;
  if (!mainImage) setMainImage(product.image); // Initialize the main image

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, parseInt(e.target.value) || 1)); // Ensure at least 1
  };

  const handleAddToCart = () => {
    if (!loggedInUser) {
      alert("Please log in to add items to your cart.");
      return;
    }

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || {};
    const userCart = cartItems[loggedInUser.username] || [];

    const cartItem = {
      productId: product.id,
      name: product.name,
      size: selectedSize,
      quantity,
      price: product.price,
      image: product.image,
    };

    const existingItemIndex = userCart.findIndex(
      (item) => item.productId === product.id && item.size === selectedSize
    );

    if (existingItemIndex > -1) {
      userCart[existingItemIndex].quantity += quantity; // Update quantity
    } else {
      userCart.push(cartItem); // Add new item
    }

    cartItems[loggedInUser.username] = userCart;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Item added to cart!");
    navigate("/cart");
  };

  const handleBuyNow = () => {
    if (!loggedInUser) {
      alert("Please log in to make a purchase.");
      return;
    }

    navigate("/addresspage", {
      state: {
        product: {
          ...product,
          size: selectedSize,
          quantity,
        },
      },
    });
  };

  return (
    <div>
      <BuyerNav />
      <div style={styles.container}>
        <div style={styles.imageGallery}>
          {[...Array(4)].map((_, idx) => (
            <img
              key={idx}
              src={product.image}
              alt={`Thumbnail ${idx + 1}`}
              style={styles.thumbnail}
              onClick={() => setMainImage(product.image)}
            />
          ))}
        </div>

        <div style={styles.productInfo}>
          <img src={mainImage} alt={product.name} style={styles.mainImage} />
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
                    backgroundColor: size === selectedSize ? "#4CAF50" : "#fff",
                    color: size === selectedSize ? "#fff" : "#000",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
            <p style={styles.price}>Price: ₹{product.price.toFixed(2)}</p>
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

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  imageGallery: {
    display: "flex",
    flexDirection: "column",
    marginRight: "20px",
  },
  thumbnail: {
    width: "80px",
    height: "80px",
    marginBottom: "10px",
    cursor: "pointer",
    border: "1px solid #ccc",
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
  },
  mainImage: {
    width: "100%",
    marginBottom: "20px",
    borderRadius: "5px",
  },
  productDetails: {
    paddingLeft: "20px",
  },
  sizeSelection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  sizeButton: {
    padding: "10px 20px",
    margin: "0 10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
  },
  price: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  quantityControl: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  quantityInput: {
    width: "60px",
    marginLeft: "10px",
    padding: "5px",
  },
  addToCartButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  buyNowButton: {
    backgroundColor: "#FFA500",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default DhotiDetails;
