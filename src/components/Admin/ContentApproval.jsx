import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AdminNav from './AdminNav';


const ContentApproval = () => {
  const { contentId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product by ID to approve/reject
    fetchProduct(contentId);
  }, [contentId]);

  const fetchProduct = (id) => {
    // Fetch product by id from the API (for now, using dummy data)
    setProduct({
      id: id,
      name: 'Embroidered Red Saree',
      description: 'Elegant red saree with golden embroidery, perfect for festive celebrations.',
      price: '₹4,000.00',
      status: 'Pending Approval',
    });
  };

  const approveProduct = () => {
    // Call API to approve the product
    console.log('Product approved');
    // Update status to approved in the backend
    setProduct((prev) => ({ ...prev, status: 'Approved' }));
  };

  const rejectProduct = () => {
    // Call API to reject the product
    console.log('Product rejected');
    // Update status to rejected in the backend
    setProduct((prev) => ({ ...prev, status: 'Rejected' }));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AdminNav />
      <div style={{ padding: '20px' }}>
        <h2>Content Approval</h2>
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <p>Status: {product.status}</p>
          <button onClick={approveProduct}>Approve</button>
          <button onClick={rejectProduct}>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default ContentApproval;
