import React, { useState, useEffect } from "react";
import BuyerNav from "./Buyernav";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems = [], username } = location.state || {}; // Retrieve username from location state
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes for the countdown
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("UPI");
  const [selectedUPIOption, setSelectedUPIOption] = useState("");
  const [giftCard, setGiftCard] = useState("");
  const [giftCardApplied, setGiftCardApplied] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // Countdown and CAPTCHA logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (selectedPaymentMethod === "COD") {
      generateCaptcha();
    }
  }, [selectedPaymentMethod]);

  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substring(2, 7).toUpperCase();
    setCaptcha(randomCaptcha);
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    const deliveryFee = total >= 2999 ? 0 : 50;
    const platformFee = 3;
    let amountPayable = total + deliveryFee + platformFee;

    if (giftCardApplied) {
      amountPayable -= 100;
    }

    return { total, deliveryFee, platformFee, amountPayable };
  };

  const { total, deliveryFee, platformFee, amountPayable } = calculateTotalPrice();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Handle payment actions
  const handleCODPayment = () => {
    if (captchaInput === "") {
      alert("Please enter the CAPTCHA");
    } else if (captchaInput !== captcha) {
      alert("Incorrect CAPTCHA. Please try again.");
      generateCaptcha();
    } else {
      saveOrder("COD");
    }
  };

  const saveOrder = (paymentMethod) => {
    const newOrder = {
      username,
      items: cartItems,
      totalAmount: amountPayable,
      paymentMethod,
      orderDate: new Date().toLocaleString(),
    };

    // Save order to local storage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    navigate("/orders", { state: { username } });
  };

  const handlePhonePeContinue = () => {
    navigate("/PhonepePaymentPage");
  };

  const applyGiftCard = () => {
    if (giftCard === "GIFT100") {
      setGiftCardApplied(true);
      alert("Gift card applied successfully!");
    } else {
      alert("Invalid gift card code.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <BuyerNav />
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        {/* Payment Section */}
        <div style={{ width: "65%" }}>
          <div style={{ backgroundColor: "#007bff", color: "#fff", padding: "10px", fontWeight: "bold", fontSize: "18px" }}>
            PAYMENT OPTIONS
          </div>
          <div style={{ backgroundColor: "#fffae5", padding: "10px", fontWeight: "bold", marginTop: "10px" }}>
            Complete payment in {formatTime(timeLeft)}
          </div>

          <ul style={{ listStyleType: "none", padding: 0 }}>
            {/* UPI Payment */}
            <li style={{ margin: "10px 0" }}>
              <input
                type="radio"
                name="payment"
                checked={selectedPaymentMethod === "UPI"}
                onChange={() => setSelectedPaymentMethod("UPI")}
              />{" "}
              UPI
              {selectedPaymentMethod === "UPI" && (
                <ul style={{ marginLeft: "20px", listStyleType: "none", padding: 0 }}>
                  <li>
                    <input
                      type="radio"
                      name="upiOption"
                      checked={selectedUPIOption === "PhonePe"}
                      onChange={() => setSelectedUPIOption("PhonePe")}
                    />{" "}
                    PhonePe
                    {selectedUPIOption === "PhonePe" && (
                      <button
                        onClick={handlePhonePeContinue}
                        style={{
                          backgroundColor: "#28a745",
                          color: "#fff",
                          padding: "10px",
                          borderRadius: "5px",
                          border: "none",
                          cursor: "pointer",
                          width: "100%",
                          marginTop: "10px",
                        }}
                      >
                        Continue
                      </button>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* COD Payment */}
            <li style={{ margin: "10px 0" }}>
              <input
                type="radio"
                name="payment"
                checked={selectedPaymentMethod === "COD"}
                onChange={() => setSelectedPaymentMethod("COD")}
              />{" "}
              Cash on Delivery (COD)
              {selectedPaymentMethod === "COD" && (
                <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                  <div style={{ marginBottom: "10px" }}>
                    CAPTCHA: <strong>{captcha}</strong>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter CAPTCHA"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
                  />
                  <button
                    onClick={handleCODPayment}
                    style={{
                      backgroundColor: "#ff5722",
                      color: "#fff",
                      padding: "10px",
                      marginTop: "10px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    Confirm Order
                  </button>
                </div>
              )}
            </li>
          </ul>

          {/* Gift Card Section */}
          <div style={{ marginTop: "20px" }}>
            <label>Apply Gift Card:</label>
            <input
              type="text"
              value={giftCard}
              onChange={(e) => setGiftCard(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
                marginBottom: "10px",
              }}
              placeholder="Enter gift card code"
            />
            <button
              onClick={applyGiftCard}
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Apply Gift Card
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "5px", width: "30%" }}>
          <h3>Order Summary</h3>
          <div>Total: ₹{total}</div>
          <div>Delivery Fee: ₹{deliveryFee}</div>
          <div>Platform Fee: ₹{platformFee}</div>
          <div style={{ fontWeight: "bold" }}>Amount Payable: ₹{amountPayable}</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
