import React, { useState, useEffect } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_14.jpg",
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_15.jpg",
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_12.jpg",
        "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_18.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div style={styles.sliderContainer}>
            <div style={{ ...styles.slider, transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} style={styles.slide}>
                        <img 
                            src={slide} 
                            alt={`Slide ${index + 1}`} 
                            style={styles.slideImage} 
                        />
                    </div>
                ))}
            </div>
            <button style={styles.prevButton} onClick={prevSlide}>❮</button>
            <button style={styles.nextButton} onClick={nextSlide}>❯</button>
        </div>
    );
};

const styles = {
    sliderContainer: {
        width: '100%',
        height: '600px',
        overflow: 'hidden',
        position: 'relative',
        marginTop: '60px', // Space below navbar
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
    },
    slider: {
        display: 'flex',
        transition: 'transform 0.8s ease-in-out'
    },
    slide: {
        minWidth: '100%',
        height: '600px'
    },
    slideImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '10px',
    },
    prevButton: {
        position: 'absolute',
        top: '50%',
        left: '20px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        padding: '15px',
        cursor: 'pointer',
        zIndex: 1,
        borderRadius: '50%',
        fontSize: '24px',
        transition: 'background-color 0.3s ease',
    },
    nextButton: {
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        padding: '15px',
        cursor: 'pointer',
        zIndex: 1,
        borderRadius: '50%',
        fontSize: '24px',
        transition: 'background-color 0.3s ease',
    },
};

export default Slider;
