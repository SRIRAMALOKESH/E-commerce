import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products1 = () => {
    const navigate = useNavigate();

    const products = [
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/240721_ramraj_ecom3390_4c6cb1bc-96bb-49d6-8fca-6bb8b9e1d1cc.jpg?v=1722921264&width=600',
            brand: 'RamRaj',
            name: 'Mens Cotton Full Sleeves Maroon Medium Length Pocket Kurta FS7',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/4_1debcfdf-76ef-4309-83b4-72e535404724.jpg?v=1693304645&width=600',
            brand: 'RamRaj',
            name: 'Mens Cotton Full Sleeves Dark Green Medium Length Pocket Kurta FS5',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/products/NewProject_1_54ef7e57-5f53-4d5a-969d-dc3e869f360d.jpg?v=1675514127&width=600',
            brand: 'RamRaj',
            name: 'Mens Cream Colour Full Sleeves Short Length Kurta',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/3_08d971b9-19f7-4bd5-91f0-c741279a7085.jpg?v=1693304510&width=600',
            brand: 'RamRaj',
            name: 'Mens Cotton Full Sleeves Yellow Medium Length Pocket Kurta FS1',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/3_b87cc041-2b6e-45c4-b5cd-33a64a4e45bb.jpg?v=1693304557&width=600',
            brand: 'RamRaj',
            name: 'Mens Cotton Full Sleeves Parrot Green Medium Length Pocket Kurta FS2',
        },
    ];

    const handleViewAll = () => {
        navigate('/men/kurtas');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Men's Kurta</h2>
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

export default Products1;
