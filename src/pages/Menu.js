import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

function Menu() {
  return (
    <div>
      <Navbar />
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
