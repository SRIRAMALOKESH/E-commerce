// src/App.jsx
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ArtisianDashboard from "./components/Artisian/ArtisianDashboard";
import MarketingDashboard from "./components/MarketingSpecialist/MarketingDashboard";
import Buyer from "./components/Buyer/Buyer";
import MenPage from "./components/Buyer/Men/MenPage";
import CartPage from "./components/Buyer/Cart/CartPage"; // Import the CartPage


import Buyernav from "./components/Buyer/Buyernav";
import AddressPage from "./components/Buyer/AddressPage";
import AccountPage from "./components/Buyer/AccountPage";
import LoginSecurity from "./components/Buyer/LoginSecurity";
import PaymentPage from "./components/Buyer/PaymentPage";
import WomenPage from "./components/Buyer/women/WomenPage";
import Kurtas from "./components/Buyer/Men/Kurtas";
import KurtaDetail from "./components/Buyer/Men/KurtaDetail";
import Dhotis from "./components/Buyer/Men/Dhotis";
import DhotiDetails from "./components/Buyer/Men/DhotiDetail";
import Panchakacham from "./components/Buyer/Men/Panchakacham";
import Shirts from "./components/Buyer/Men/Shirts";
import WeddingSets from "./components/Buyer/Men/WeddingSet";
import PanchakachamDetails from "./components/Buyer/Men/PanchakachamDetails";
import ShirtDetail from "./components/Buyer/Men/ShirtDetail";
import WeddingSetDetail from "./components/Buyer/Men/WeddingDetail";
import Sarees from "./components/Buyer/women/Sarees";
import Kurtis from "./components/Buyer/women/Kurtis";
import Lehenga from "./components/Buyer/women/Lehengas";
import Festivalcollections from "./components/Buyer/women/Festivalcollections";
import Haldi from "./components/Buyer/women/Haldi";
import PhonePePaymentPage from "./components/Buyer/PhonePePaymentPage";
import OrdersPage from "./components/Buyer/OrdersPage";
import FeedbackForm from "./components/Buyer/FeedbackForm";
import OrderTrackingPage from "./components/Buyer/OrderTrackingPage";
import AdminHome from "./components/Admin/AdminHome";
import AdminNav from "./components/Admin/AdminNav";
import UserManagement from "./components/Admin/UserManagement";
import ContentApproval from "./components/Admin/ContentApproval";



const App = () => {
  const [cartItems, setCartItems] = useState([]); // State to manage cart items

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/artisan" element={<ArtisianDashboard />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/marketingSpecialist" element={<MarketingDashboard />} />
        <Route path="/men" element={<MenPage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} /> 
        <Route path="/buyer" element={<Buyernav/>}/>
        <Route path="/addresspage" element={<AddressPage/>}/>
        <Route path="/account" element={<AccountPage />}/>
        <Route path="/login-security" element={<LoginSecurity/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/women" element={<WomenPage cartItems={cartItems} setCartItems={setCartItems} />}/>
        <Route path="/men/kurtas"  element={<Kurtas/>}/>
        <Route path="/men/kurtas/:id" element={<KurtaDetail />} />
        <Route path="/men/Dhotis" element={<Dhotis/>} />
        <Route path="/men/Dhotis/:id" element={<DhotiDetails />} />
        <Route path="/men/panchakacham" element={<Panchakacham/>} />
        <Route path="/men/panchakacham/:id" element={<PanchakachamDetails />} />
        <Route path="/men/shirts" element={<Shirts/>} />
        <Route path="/men/shirts/:id" element={<ShirtDetail />} />
        <Route path="/men/weddingsets" element={<WeddingSets/>} />
        <Route path="/men/weddingsets/:id" element={<WeddingSetDetail />} />
        <Route path="/women/Sarees"  element={<Sarees/>}/>
        <Route path="/women/Kurtis"  element={<Kurtis/>}/>
        <Route path="/women/Lehenga"  element={<Lehenga/>}/>
        <Route path="/women/Festivalcollections"  element={<Festivalcollections/>}/>
        <Route path="/women/Haldi"  element={<Haldi/>}/>
        <Route path="/PhonepePaymentPage" element={<PhonePePaymentPage/>}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        <Route path="/feedback" element={<FeedbackForm/>}/>
        <Route path="/ordertrackingpage" element={<OrderTrackingPage/>}/>

        <Route path="/admin" element={<AdminHome/>}/>
        <Route path="/adminnav" element={<AdminNav/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/userManagement" element={<UserManagement />} />
        <Route path="/admin/ContentApprovel" element={<ContentApproval />} />




      </Routes>
    </div>
  );
};

export default App;
