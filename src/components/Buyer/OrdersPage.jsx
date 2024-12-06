import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BuyerNav from "./Buyernav";

const OrdersPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location.state || {}; // Get the username passed from the previous page
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const userOrders = allOrders.filter((order) => order.username === username);
    setOrders(userOrders);
  }, [username]);

  const handleOrderClick = (order) => {
    navigate("/ordertrackingpage", { state: { order } }); // Redirect to OrderTrackingPage with order details
  };

  const handleCancelOrder = (index, e) => {
    e.stopPropagation(); // Prevent triggering the card's click handler

    // Remove the canceled order based on its index in the orders array
    const updatedOrders = [...orders];  // Create a copy of the orders array
    updatedOrders.splice(index, 1); // Remove the order at the given index
    setOrders(updatedOrders);

    // Update the orders in localStorage by removing the canceled order
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedAllOrders = allOrders.filter((order) => order.username === username); // Filter only the user's orders
    updatedAllOrders.splice(index, 1); // Remove the order from the user's list
    localStorage.setItem("orders", JSON.stringify(updatedAllOrders));

    alert("Order has been canceled.");
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#2C3E50",
      fontSize: "28px",
      fontWeight: "700",
    },
    orderCard: {
      backgroundColor: "#ffffff",
      border: "1px solid #e0e0e0",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    orderCardHover: {
      transform: "scale(1.02)",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
    },
    orderHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    },
    orderTitle: {
      color: "#007bff",
      margin: 0,
      fontSize: "20px",
      fontWeight: "600",
    },
    orderDate: {
      color: "#6c757d",
      fontSize: "14px",
    },
    orderDetails: {
      marginTop: "10px",
    },
    orderInfo: {
      marginBottom: "10px",
    },
    orderInfoText: {
      margin: "5px 0",
      fontSize: "16px",
      color: "#495057",
    },
    orderItems: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "15px",
    },
    itemCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "150px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    itemImage: {
      width: "100%",
      height: "auto",
      borderRadius: "4px",
      marginBottom: "10px",
    },
    itemDetails: {
      textAlign: "center",
    },
    itemName: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#212529",
      marginBottom: "5px",
    },
    itemPrice: {
      fontSize: "14px",
      color: "#007bff",
    },
    cancelButton: {
      backgroundColor: "#dc3545",
      color: "#fff",
      padding: "8px 12px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      marginTop: "15px",
    },
    noOrders: {
      textAlign: "center",
      color: "#6c757d",
      fontSize: "18px",
      marginTop: "20px",
    },
    footer: {
      textAlign: "center",
      padding: "10px",
      backgroundColor: "#fff",
      marginTop: "40px",
      borderTop: "1px solid #ddd",
    },
  };

  return (
    <div>
      <BuyerNav />
      <div style={styles.container}>
        <h2 style={styles.header}>{username} Orders</h2>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div
              key={order.id || index}
              style={styles.orderCard}
              onClick={() => handleOrderClick(order)} // Attach click handler
            >
              <div style={styles.orderHeader}>
                <h3 style={styles.orderTitle}>Order #{index + 1}</h3>
                <span style={styles.orderDate}>
                  Order Date: {order.orderDate}
                </span>
              </div>
              <div style={styles.orderDetails}>
                <div style={styles.orderInfo}>
                  <p style={styles.orderInfoText}>
                    <strong>Payment Method:</strong> {order.paymentMethod}
                  </p>
                  <p style={styles.orderInfoText}>
                    <strong>Amount Paid:</strong> ₹{order.totalAmount}
                  </p>
                </div>
                <div style={styles.orderItems}>
                  {order.items.map((item, idx) => (
                    <div key={idx} style={styles.itemCard}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={styles.itemImage}
                      />
                      <div style={styles.itemDetails}>
                        <p style={styles.itemName}>{item.name}</p>
                        <p style={styles.itemPrice}>₹{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                style={styles.cancelButton}
                onClick={(e) => handleCancelOrder(index, e)} // Pass the index of the order
              >
                Cancel Order
              </button>
            </div>
          ))
        ) : (
          <p style={styles.noOrders}>No orders found.</p>
        )}
      </div>
      <div style={styles.footer}>
        <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default OrdersPage;
