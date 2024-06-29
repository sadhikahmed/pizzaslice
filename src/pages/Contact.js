// Contact.jsx
import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg"; // Importing the image
import "../styles/Contact.css"; // Importing the CSS file for styling
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${PizzaLeft})` }}
        ></div>
        <div className="rightSide">
          <h1>Contact Us</h1>

          <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter full name..."
              required
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email..."
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter message..."
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
