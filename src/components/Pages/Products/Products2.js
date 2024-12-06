import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products2 = () => {
    const navigate = useNavigate();

    const products = [
        {
            image: 'https://ramrajcotton.in/cdn/shop/products/2_d54fbb72-38b3-43c5-b5ba-0e86f088a313.jpg?v=1666327776&width=600',
            brand: 'RamRaj',
            name: 'Mens Matching Border Dhoti & Half Sleeves Shirt Set Trendy CC9',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/4_a3f1f072-1330-44cf-83c8-af8d9de25cbf.jpg?v=1716009335&width=600',
            brand: 'RamRaj',
            name: 'Mens Double Dhoti White with Gold Jari 1" Good Will',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/products/2_4fed02f8-2d01-40dc-a3d0-e3101d854c28.jpg?v=1666327555&width=600',
            brand: 'RamRaj',
            name: 'Mens Matching Border Dhoti & Half Sleeves Shirt Set Trendy CC8',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/2_4c746c90-1a2f-4efa-b9b6-24c8e5c3c186.jpg?v=1724763376&width=600',
            brand: 'RamRaj',
            name: 'Mens Matching Border Dhoti & Shirt Set Half Green C36',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/products/1_d4acccc0-ad70-476f-9dde-b45a98c77499.jpg?v=1666326820&width=600',
            brand: 'RamRaj',
            name: 'Mens Matching Border Dhoti & Half Sleeves Shirt Set Trendy CC4',
        },
    ];

    const handleViewAll = () => {
        navigate('/men/Dhotis');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Men's Dhotis</h2>
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
    viewAllButtonHover: {
        backgroundColor: '#4CAF50',
        color: '#fff',
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

export default Products2;
