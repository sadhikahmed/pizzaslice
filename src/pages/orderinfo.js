import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import your Firebase configuration
import { toast } from "react-toastify";
import "../styles/OrderForm.css"; // Import your CSS file for styling
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const OrderForm = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Store order details in Firebase
      const docRef = await addDoc(collection(db, "orders"), {
        fullName,
        mobileNumber,
        address,
        pincode,
        timestamp: new Date().toString(),
      });
      console.log("Order placed with ID: ", docRef.id);
      toast.success("Order placed successfully!", { position: "top-center" });

      // Clear form fields after successful submission
      setFullName("");
      setMobileNumber("");
      setAddress("");
      setPincode("");

      // Navigate to OrderDetails page with the newly created order ID
      navigate(`/OrderDetails/${docRef.id}`);
    } catch (error) {
      console.error("Error adding order: ", error);
      toast.error("Failed to place order. Please try again later.", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <Navbar /> {/* Assuming Navbar is your component */}
      <div className="order-form-container">
        <form className="order-form" onSubmit={handleSubmit}>
          <h2>Order Registration</h2>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Pincode</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Place Order
          </button>
        </form>
      </div>
      <Footer /> {/* Assuming Footer is your component */}
    </>
  );
};

export default OrderForm;
