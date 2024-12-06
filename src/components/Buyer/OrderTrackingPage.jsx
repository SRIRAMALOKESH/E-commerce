import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

function OrderTrackingPage() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // Initialize navigation hook

  useEffect(() => {
    // Fetch orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const calculateDeliveryDate = (orderDate, days) => {
    const date = new Date(orderDate);
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString();
  };

  const getOrderStatus = (orderDate) => {
    const orderDateObj = new Date(orderDate);
    const currentDate = new Date();
    const diffInDays = Math.floor((currentDate - orderDateObj) / (1000 * 60 * 60 * 24));

    if (diffInDays < 2) return "Order Confirmed";
    if (diffInDays < 5) return "Shipped";
    if (diffInDays < 7) return "Out for Delivery";
    return "Delivered";
  };

  const handleFeedbackClick = () => {
    navigate("/feedback"); // Redirect to feedback page
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Track Your Orders</h1>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} style={styles.orderCard}>
            <h3 style={styles.orderTitle}>Order #{index + 1}</h3>

            {/* Order Timeline */}
            <div style={styles.timelineContainer}>
              {["Order Confirmed", "Shipped", "Out for Delivery", "Delivered"].map(
                (status, idx) => (
                  <div key={idx} style={styles.timelineStep}>
                    <div
                      style={{
                        ...styles.timelineCircle,
                        backgroundColor:
                          getOrderStatus(order.orderDate) === status ||
                          idx <= ["Order Confirmed", "Shipped", "Out for Delivery", "Delivered"].indexOf(
                            getOrderStatus(order.orderDate)
                          )
                            ? "#27AE60"
                            : "#ddd",
                      }}
                    ></div>
                    <span style={styles.timelineLabel}>
                      {status}
                      <br />
                      <small>
                        {calculateDeliveryDate(
                          order.orderDate,
                          idx * 2 // Adjust days for each stage
                        )}
                      </small>
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Product Details */}
            {order.items && order.items.length > 0 ? (
              order.items.map((item, itemIndex) => (
                <div key={itemIndex} style={styles.productContainer}>
                  <img
                    src={item.image || "https://via.placeholder.com/80"}
                    alt={item.name || "Product Image"}
                    style={styles.productImage}
                  />
                  <div>
                    <p style={styles.productDetail}>
                      <strong>Name:</strong> {item.name || "Not available"}
                    </p>
                    <p style={styles.productDetail}>
                      <strong>Color:</strong> {item.color || "Not specified"}
                    </p>
                    <p style={styles.productDetail}>
                      <strong>Seller:</strong> {item.seller || "Unknown"}
                    </p>
                    <p style={styles.productDetail}>
                      <strong>Price:</strong> ₹{item.price || "0.00"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p style={styles.noItemsText}>No items found for this order.</p>
            )}

            <p style={styles.noReturnPolicy}>Product has no-return policy</p>

            {/* Interactive Options */}
            <div style={styles.optionsContainer}>
              <button style={styles.optionButton} onClick={handleFeedbackClick}>
                Rate & Review Product
              </button>
            </div>
          </div>
        ))
      ) : (
        <p style={styles.noOrdersText}>No orders found. Start shopping!</p>
      )}
    </div>
  );
}

const styles = {
  pageContainer: {
    padding: "20px",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    textAlign: "center",
    color: "#2C3E50",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  orderCard: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e3e6f0",
    marginBottom: "20px",
  },
  orderTitle: {
    color: "#34495E",
    fontSize: "20px",
    marginBottom: "20px",
    fontWeight: "600",
  },
  timelineContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  timelineStep: {
    textAlign: "center",
    flex: 1,
    position: "relative",
  },
  timelineCircle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    margin: "0 auto",
    marginBottom: "10px",
  },
  timelineLabel: {
    fontSize: "14px",
    color: "#7F8C8D",
  },
  productContainer: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    marginBottom: "10px",
  },
  productImage: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  productDetail: {
    color: "#7F8C8D",
    fontSize: "16px",
  },
  noItemsText: {
    fontSize: "14px",
    color: "#E74C3C",
    marginBottom: "10px",
  },
  noReturnPolicy: {
    fontSize: "14px",
    color: "#7F8C8D",
    marginBottom: "20px",
  },
  optionsContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-start",
  },
  optionButton: {
    backgroundColor: "#3498DB",
    color: "#ffffff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  noOrdersText: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "18px",
    color: "#95A5A6",
    fontStyle: "italic",
  },
};

export default OrderTrackingPage;
