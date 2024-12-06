import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products3 = () => {
    const navigate = useNavigate();

    const products = [
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/1_f8ed7301-a225-410d-8b4c-f7391b8d3e53.jpg?v=1696135965&width=600',
            brand: 'Ramyyam',
            name: 'Semi Kora Cotton Allover Design Saree Light Orange & Pink with Zari Border SKCW03',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/02_1e0b4dda-ae5a-4a69-b843-9c3ef3de2789.jpg?v=1698209684&width=600',
            brand: 'Ramyyam',
            name: 'Women Semi Silk Navy with Contrast Green Border Saree SS54',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/02_da8eed98-00b2-4fed-b277-0f17b305059f.jpg?v=1714721285&width=600',
            brand: 'Ramyyam',
            name: 'Women Maroon Colour Stylish Art Silk Fancy Jari Border Saree SS104',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/04_a4f91c96-cb63-4a6e-b1f6-1485a5dc9a81.jpg?v=1714736691&width=600',
            brand: 'Ramyyam',
            name: 'Women Dark Blue Colour Stylish Art Silk Fancy Jari Border Saree SS105',
        },
        {
            image: 'https://ramrajcotton.in/cdn/shop/files/Default_d6160cca-6be1-463a-8ce1-d71686a74f0c.jpg?v=1722340043&width=600',
            brand: 'Ramyyam',
            name: 'Kerala Cream Gold Jari Weaving Saree KS97',
        },
    ];

    const handleViewAll = () => {
        navigate('/women/sarees');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Women's Sarees</h2>
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

export default Products3;
