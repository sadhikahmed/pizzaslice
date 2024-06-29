import React from "react";
import PropTypes from "prop-types";

function MenuItem({ image, name, price, onItemClick }) {
  const handleClick = () => {
    if (onItemClick) {
      onItemClick({ name, price }); // Passes back the name and price of the clicked item
    } else {
      // Handle the case where onItemClick is not provided (e.g., open a new tab)
      window.open("/orderinfo", "_blank", "noopener noreferrer");
    }
  };

  return (
    <div className="menuItem" onClick={handleClick}>
      <div className="menuImage" style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>Rs {price}</p> {/* Displaying price with Rs prefix */}
    </div>
  );
}

MenuItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onItemClick: PropTypes.func, // onItemClick is now optional
};

export default MenuItem;
