import React, { useState } from "react";
import Buyernav from "./Buyernav";

function RazorpayPaymentPage() {
  const [amount, setAmount] = useState("");
  const [qrCodeVisible, setQrCodeVisible] = useState(false);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
      } else {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      }
    });
  };

  const payNow = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_9XbJPu0vOzevBn", // Replace with your Razorpay key ID
      amount: amount * 100, // Amount is in the smallest currency unit
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      image: "/path/to/your-logo.png", // Update with your logo's path
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);

        // Add order to localStorage
        const orderedItem = {
          name: "Sample Product", // Replace with actual product name
          description: "High-quality product",
          image: "/path/to/product-image.jpg", // Replace with actual image path
          price: amount,
        };

        const newOrder = {
          items: [orderedItem],
          totalAmount: amount,
          paymentMethod: "Razorpay",
          paymentId: response.razorpay_payment_id,
          orderDate: new Date().toLocaleString(),
        };

        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(newOrder);
        localStorage.setItem("orders", JSON.stringify(orders));

        // Navigate to Orders Page
        window.location.href = "/orders";
      },
      prefill: {
        name: "Your Name",
        email: "your-email@example.com",
        contact: "9876543210",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#6C4AB6",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const toggleQrCode = () => {
    setQrCodeVisible(!qrCodeVisible);
  };

  return (
    <div style={styles.pageContainer}>
      <div>
        <Buyernav />
      </div>
      <header style={styles.header}>
        <img
          src="/path/to/razorpay-logo.png"
          alt="Razorpay"
          style={styles.logo}
        />
      </header>
      <div style={styles.paymentContainer}>
        <h2 style={styles.title}>Pay via Razorpay</h2>
        <div style={styles.amountInputContainer}>
          <label style={styles.label}>Enter the amount to pay</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
            style={styles.amountInput}
          />
          <button style={styles.payNowButton} onClick={payNow}>
            PAY NOW
          </button>
          <button style={styles.qrButton} onClick={toggleQrCode}>
            {qrCodeVisible ? "HIDE QR CODE" : "SHOW QR CODE"}
          </button>
          {qrCodeVisible && (
            <div style={styles.qrContainer}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=your-upi-id&pn=Your%20Name&am=${amount}&cu=INR&mode=01`}
                alt="QR Code for UPI Payment"
                style={styles.qrImage}
              />
              <p style={styles.qrInstructions}>Scan the QR code to pay</p>
            </div>
          )}
        </div>
        <footer style={styles.footer}>
          <img
            src="/path/to/payment-options.png"
            alt="Payment Options"
            style={styles.footerImage}
          />
        </footer>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    height: "100vh",
    paddingTop: "20px",
  },
  header: {
    width: "100%",
    backgroundColor: "#540D6E",
    padding: "10px 0",
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    height: "30px",
  },
  paymentContainer: {
    width: "90%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    color: "#333",
    marginBottom: "20px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  amountInputContainer: {
    textAlign: "left",
    width: "100%",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#333",
  },
  amountInput: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  payNowButton: {
    width: "100%",
    backgroundColor: "#6C4AB6",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  },
  qrButton: {
    width: "100%",
    backgroundColor: "#888",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  },
  qrContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  qrImage: {
    width: "150px",
    height: "150px",
    marginBottom: "10px",
  },
  qrInstructions: {
    fontSize: "14px",
    color: "#666",
    textAlign: "center",
  },
  footer: {
    marginTop: "20px",
    textAlign: "center",
  },
  footerImage: {
    width: "80%",
  },
};

export default RazorpayPaymentPage;
