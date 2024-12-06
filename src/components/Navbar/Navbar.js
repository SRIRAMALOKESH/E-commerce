import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const styles = {
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#333',
            padding: '10px 20px',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        },
        logoImage: {
            height: '40px',
            width: 'auto',
        },
        navLinks: {
            display: 'flex',
            listStyle: 'none',
            padding: 0,
        },
        navLinkItem: {
            margin: '0 15px',
        },
        navLink: {
            textDecoration: 'none',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'color 0.3s ease',
        },
        searchBar: {
            display: 'flex',
            alignItems: 'center',
        },
        searchInput: {
            padding: '5px',
            borderRadius: '4px',
            border: 'none',
        },
        searchButton: {
            marginLeft: '5px',
            padding: '6px 12px',
            backgroundColor: '#ff6f61',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
        },
        cartIcon: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '20px',
        },
    };

    return (
        <nav style={styles.navbar}>
            <div className="logo">
                <Link to="/">
                    <img 
                        src="https://img.freepik.com/premium-photo/3d-wood-icon-material-nature-illustration-logo_762678-47897.jpg?size=626&ext=jpg&uid=R161110760&ga=GA1.1.1757200948.1706766892&semt=ais_hybrid" 
                        alt="Your Logo" 
                        style={styles.logoImage} 
                    />
                </Link>
            </div>
            <ul style={styles.navLinks}>
                <li style={styles.navLinkItem}><Link style={styles.navLink} to="/">Home</Link></li>
                <li style={styles.navLinkItem}><Link style={styles.navLink} to="/shop">Shop</Link></li>
            </ul>
            <div style={styles.searchBar}>
                <input style={styles.searchInput} type="text" placeholder="Search products..." />
                <button style={styles.searchButton} type="submit">Search</button>
            </div>
            <ul style={styles.navLinks}>
                <li style={styles.navLinkItem}><Link style={styles.navLink} to="/login" >Login</Link></li>
                <li style={styles.navLinkItem}><Link style={styles.navLink} to="/signup">Signup</Link></li>
            </ul>
            
        </nav>
    );
};

export default Navbar;
