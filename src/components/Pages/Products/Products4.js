import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products4 = () => {
    const navigate = useNavigate();

    const products = [
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/5_3dc670b4-c6d7-45c6-8f8e-94fd5114a6d9.jpg?v=1714994026&width=600',
            brand: 'Ramyyam',
            name: 'Women Elegant Look Cotton Print Half White Kurti Set - EK45',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/3_ed92eba5-1d97-4d1f-8418-b007d45f62c6.jpg?v=1697698100&width=600',
            brand: 'Ramyyam',
            name: 'Women Cotton Red Print & Embroidered Kurti Set PKS13',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/5_3d7e0e24-c6ee-4516-9011-cd5eb2913781.jpg?v=1697628624&width=600',
            brand: 'Ramyyam',
            name: 'Women Cotton Yellow Collar Neck Straight Cut Print & Embroidered Kurti Set PKS16',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/2_667196eb-d41a-4582-83ac-6399d54e9341.jpg?v=1692939748&width=600',
            brand: 'Ramyyam',
            name: 'Women Cotton Printed Round Neck Straight Cut Navy Kurti PK31',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/5_8bf483ac-9591-4311-b4d3-a4dfaae75360.jpg?v=1692939533&width=600',
            brand: 'Ramyyam',
            name: 'Women Cotton Flower Printed Round Neck Straight Cut Blue Kurti PK28',
        },
    ];

    const handleViewAll = () => {
        navigate('/women/kurtis');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Women's Kurtis</h2>
            <button onClick={handleViewAll} style={styles.viewAllButton}>
                View All Products <span style={styles.arrow}>&rarr;</span>
            </button>
            <div style={styles.grid}>
                {products.map((product, index) => (
                    <div key={index} style={styles.card}>
                        <img src={product.image} alt={product.name} style={styles.image} />
                        <h3 style={styles.brand}>{product.brand}</h3>
                        <p style={styles.description}>{product.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
    },
    heading: {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '10px',
        textAlign: 'center',
    },
    viewAllButton: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        padding: '8px 16px',
        fontSize: '13px',
        fontWeight: '500',
        color: '#4CAF50',
        backgroundColor: 'transparent',
        border: '2px solid #4CAF50',
        borderRadius: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'all 0.3s ease',
    },
    arrow: {
        transition: 'transform 0.3s ease',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
        textAlign: 'center',
    },
    image: {
        width: '80%',
        height: 'auto',
        borderRadius: '8px',
    },
    brand: {
        fontSize: '18px',
        margin: '10px 0 5px',
    },
    description: {
        fontSize: '14px',
        color: '#555',
    },
};

export default Products4;
