import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BuyerNav from '../Buyernav';
import Footer from '../Footer';

const MenPage = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  // Retrieve the logged-in user (buyer) details from localStorage
  const buyer = JSON.parse(localStorage.getItem('loggedInUser'));
  const username = buyer?.username;

  const featuredProducts = [
    { id: 1, name: 'Wedding Set', price: 1500, image: 'https://ramrajcotton.in/cdn/shop/files/6_63c1f465-87b3-4dd7-a7e2-1d70710a2844.jpg?v=1715868155&width=600' },
    { id: 2, name: 'Panchakacham', price: 400, image: 'https://ramrajcotton.in/cdn/shop/products/Untitled-1_0016_DSC09242.jpg?v=1659763176&width=600' },
    { id: 3, name: 'Shirts', price: 1200, image: 'https://ramrajcotton.in/cdn/shop/files/1_791c3cae-271b-4c2f-be61-b40c50c973dd.jpg?v=1719400572&width=600' },
    { id: 4, name: 'Dhotis', price: 1000, image: 'https://ramrajcotton.in/cdn/shop/files/Side_ec0ddc00-a197-4e45-8561-3f16b3ac820d.jpg?v=1719816312&width=600' },
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
      alert("Please log in to add items to your cart.");
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
      backgroundColor: '#007BFF',
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
      color: '#007BFF',
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
        <h1 style={styles.bannerText}>Men's Collection</h1>
        <button style={styles.shopButton} onClick={() => navigate('/shop')}>
          Shop Now
        </button>
      </div>

      <h2 style={styles.sectionTitle}>Categories</h2>
      <div style={styles.categories}>
        <div style={styles.category} onClick={() => navigate('/men/weddingsets')}>Wedding Set</div>
        <div style={styles.category} onClick={() => navigate('/men/shirts')}>Shirts</div>
        <div style={styles.category} onClick={() => navigate('/men/panchakacham')}>Panchakacham</div>
        <div style={styles.category} onClick={() => navigate('/men/Dhotis')}>Dhotis</div>
        <div style={styles.category} onClick={() => navigate('/men/kurtas')}>Kurtas</div>
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

export default MenPage;
