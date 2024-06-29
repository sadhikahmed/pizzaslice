import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${MultiplePizzas})` }}
        ></div>
        <div className="aboutBottom">
          <h1>ABOUT US</h1>
          <p>
            Founded with a vision to create a cozy haven for pizza lovers, Pedro's Pizzeria combines culinary expertise with a welcoming atmosphere. Our journey began with a passion for crafting pizzas that go beyond mere food – they embody artistry and taste.
          </p>
          <p>
            At Pedro's Pizzeria, quality is our cornerstone. We source the freshest ingredients, from vine-ripened tomatoes to premium mozzarella, ensuring each pizza is a masterpiece of flavor. Our chefs blend traditional techniques with innovative recipes, offering a menu that caters to every palate.
          </p>
          <p>
            Whether you're enjoying a relaxed evening with friends in our charming dining area or opting for the convenience of takeaway, every visit to Pedro's Pizzeria promises satisfaction. Our attentive staff ensures that every detail, from service to ambiance, enhances your dining experience.
          </p>
          <p>
            Beyond our pizzas, Pedro's Pizzeria is a community hub where friendships are nurtured and memories are made. We take pride in fostering a warm environment where everyone feels like family. Join us for celebrations, gatherings, or simply a comforting meal – you're always welcome at Pedro's.
          </p>
          <p>
            Conveniently located [mention location if applicable], Pedro's Pizzeria invites you to savor the essence of authentic pizza craftsmanship. Discover why we're more than just a restaurant – we're a destination for those who appreciate quality, warmth, and exceptional taste.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
