import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> Pedro's Pizzeria </h1>
          <p> PIZZA TO FIT ANY TASTE</p>
          <Link to="/menu">
            <button> ORDER NOW </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
