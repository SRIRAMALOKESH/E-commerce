import React, { useEffect } from "react";
import BuyerNav from "../Buyernav";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  // Retrieve the logged-in user (buyer) details from localStorage
  const buyer = JSON.parse(localStorage.getItem('loggedInUser'));
  const username = buyer?.username;

  useEffect(() => {
    // Load cart items for the specific user when the component mounts
    if (username) {
      const savedCartItems = JSON.parse(localStorage.getItem(`cartItems_${username}`)) || [];
      setCartItems(savedCartItems);
    }
  }, [setCartItems, username]);

  useEffect(() => {
    // Save cart items to localStorage for the specific user whenever cartItems change
    if (username) {
      localStorage.setItem(`cartItems_${username}`, JSON.stringify(cartItems));
    }
  }, [cartItems, username]);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleBuyNow = () => {
    if (cartItems.length > 0) {
      navigate('/addresspage', { state: { cartItems } });
    } else {
      alert("Your cart is empty.");
    }
  };

  // Calculate the total price with quantity
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const redirectToProducts = () => {
    navigate('/products');
  };

  const styles = {
    container: {
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1000px',
      margin: '0 auto',
      backgroundColor: '#fafafa',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    productCard: {
      border: '1px solid #eee',
      borderRadius: '10px',
      padding: '20px',
      marginBottom: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    },
    productImage: {
      width: '80px',
      height: 'auto',
      borderRadius: '8px',
    },
    productInfo: {
      flex: '1',
      marginLeft: '20px',
    },
    productName: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '5px',
    },
    productPrice: {
      fontSize: '16px',
      color: '#007BFF',
      marginBottom: '10px',
    },
    quantityContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    quantityLabel: {
      marginRight: '10px',
      fontSize: '14px',
      color: '#555',
    },
    quantityInput: {
      width: '50px',
      padding: '8px',
      textAlign: 'center',
      fontSize: '14px',
      borderRadius: '5px',
      border: '1px solid #ddd',
    },
    removeButton: {
      padding: '8px 15px',
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.3s',
    },
    removeButtonHover: {
      backgroundColor: '#c82333',
    },
    buyButton: {
      padding: '12px 25px',
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    buyButtonHover: {
      backgroundColor: '#218838',
    },
    totalPrice: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#333',
      marginTop: '30px',
    },
    emptyCartMessage: {
      textAlign: 'center',
      marginTop: '50px',
      fontSize: '18px',
      color: '#555',
    },
    redirectButton: {
      padding: '12px 25px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      marginTop: '20px',
      fontSize: '16px',
      transition: 'background-color 0.3s',
    },
    redirectButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <BuyerNav />
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div style={styles.emptyCartMessage}>
          <p>No items in the cart.</p>
          <button
            style={styles.redirectButton}
            onClick={redirectToProducts}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.redirectButtonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.redirectButton.backgroundColor}
          >
            Browse Products
          </button>
        </div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={styles.productCard}>
            <img src={item.image} alt={item.name} style={styles.productImage} />
            <div style={styles.productInfo}>
              <h3 style={styles.productName}>{item.name}</h3>
              <p style={styles.productPrice}>Rs {item.price}</p>
              <div style={styles.quantityContainer}>
                <label style={styles.quantityLabel}>Quantity:</label>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                    if (newQuantity > 0) {
                      const updatedCartItems = cartItems.map((prod) =>
                        prod.id === item.id ? { ...prod, quantity: newQuantity } : prod
                      );
                      setCartItems(updatedCartItems);
                    } else {
                      alert("Quantity cannot be less than 1.");
                    }
                  }}
                  style={styles.quantityInput}
                />
              </div>
            </div>
            <button
              style={styles.removeButton}
              onClick={() => handleRemoveItem(item.id)}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.removeButtonHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.removeButton.backgroundColor}
            >
              Remove
            </button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <>
          <h3 style={styles.totalPrice}>
            Total: Rs {calculateTotal()}
          </h3>
          <button
            style={styles.buyButton}
            onClick={handleBuyNow}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.buyButtonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.buyButton.backgroundColor}
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
