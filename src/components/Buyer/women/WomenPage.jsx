import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import BuyerNav from '../Buyernav';

const WomenPage = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  // Retrieve the logged-in user (buyer) details from localStorage
  const buyer = JSON.parse(localStorage.getItem('loggedInUser'));
  const username = buyer?.username;

  const featuredProducts = [
    { id: 1, name: 'Saree', price: 2000, image: 'https://img.freepik.com/free-photo/portrait-indian-woman-with-flag_23-2150913220.jpg?ga=GA1.1.1757200948.1706766892&semt=ais_hybrid' },
    { id: 2, name: 'Lehenga', price: 5000, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNwzBJQ79oAEFFbEnbMf7LmxnsqVuQMUl1HE5-KjZy4LN0vALhAd7jwcvbkytOXYF7e2GtydK88Xkq_ant9eENgDpOovLogX1GveImcoZh&usqp=CAE' },
    { id: 3, name: 'Kurta', price: 1200, image: 'https://img.freepik.com/premium-photo/high-fashion-look-glamor-stylish-sexy-smiling-beautiful-traveler-happy-mood-young-woman-model-photo-pips-perfect-pighting-poses-model-name-sonakshi-sinha_1298691-8417.jpg?ga=GA1.1.1757200948.1706766892&semt=ais_hybrid' },
    { id: 4, name: 'Haldi', price: 1500, image: 'https://img.freepik.com/premium-photo/woman-sari-with-red-lip-gold-necklace_717440-32798.jpg?ga=GA1.1.1757200948.1706766892' },
  ];

  // Load cart for the specific user from localStorage when the component mounts
  useEffect(() => {
    if (username) {
      const savedCartItems = JSON.parse(localStorage.getItem(`cartItems_${username}`)) || [];
      setCartItems(savedCartItems);
    }
  }, [setCartItems, username]);

  // Save cart items for the specific user to localStorage whenever cartItems state changes
  useEffect(() => {
    if (username) {
      localStorage.setItem(`cartItems_${username}`, JSON.stringify(cartItems));
    }
  }, [cartItems, username]);

  const handleAddToCart = (product) => {
    if (!username) {
      alert('Please log in to add items to your cart.');
      navigate('/login'); // Redirect to login page if user is not logged in
      return;
    }

    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, product];
      localStorage.setItem(`cartItems_${username}`, JSON.stringify(updatedItems)); // Save to localStorage with username
      return updatedItems;
    });
    alert(`${product.name} added to your cart.`);
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`); // Navigate to the respective product page
  };

  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    banner: {
      backgroundImage: 'url("https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80")',
      backgroundSize: 'cover',
      height: '300px',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '20px',
    },
    bannerText: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    shopButton: {
      padding: '10px 20px',
      backgroundColor: '#FF1493',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    categories: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '20px 0',
    },
    category: {
      padding: '10px 20px',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ddd',
      borderRadius: '5px',
      cursor: 'pointer',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '24px',
      margin: '20px 0',
      textAlign: 'center',
    },
    products: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    productCard: {
      width: '22%',
      marginBottom: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '10px',
      textAlign: 'center',
      transition: 'transform 0.3s',
      cursor: 'pointer',
    },
    productImage: {
      width: '100%',
      height: 'auto',
    },
    productName: {
      fontSize: '16px',
      margin: '10px 0',
    },
    productPrice: {
      fontSize: '14px',
      color: '#FF1493',
    },
    addToCartButton: {
      padding: '8px',
      backgroundColor: '#28A745',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <BuyerNav />
      <div style={styles.banner}>
        <h1 style={styles.bannerText}>Women's Collection</h1>
        <button style={styles.shopButton} onClick={() => navigate('/shop')}>
          Shop Now
        </button>
      </div>

      <h2 style={styles.sectionTitle}>Categories</h2>
      <div style={styles.categories}>
        <div style={styles.category} onClick={() => navigate('/women/Sarees')}>Sarees</div>
        <div style={styles.category} onClick={() => navigate('/women/Lehenga')}>Lehenga</div>
        <div style={styles.category} onClick={() => navigate('/women/Kurtis')}>Kurtis</div>
        <div style={styles.category} onClick={() => navigate('/women/Festivalcollections')}>Festive Collections</div>
        <div style={styles.category} onClick={() => navigate('/women/Haldi')}>Haldi</div>
      </div>

      <h2 style={styles.sectionTitle}>Featured Products</h2>
      <div style={styles.products}>
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            style={styles.productCard}
            onClick={() => handleProductClick(product)} // Navigate to product page on card click
          >
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>Rs {product.price}</p>
            <button style={styles.addToCartButton} onClick={(e) => {
              e.stopPropagation(); // Prevent card click event from firing
              handleAddToCart(product); // Add to cart
            }}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WomenPage;
