import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - logo
 * - nav items
 * Body
 * - search bar
 * - restaurant container
 *      - restaurant card
 *          - Img
 *          - name of restaurant, rating, delivery time, cuisines
 * Footer
 * - copyright
 * - links
 * - address
 * - contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-fast-delivery-service-sign-food-delivery-app-vector-logo-design-template-167491511.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RatingIcon = () => {
  return (
    <div style={{ width: "20px", height: "20px" }}>
      <svg
        viewBox="0 0 24 24"
        fill="white"
        style={{ background: "green", borderRadius: "50%" }}
      >
        <path d="M12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.45 4.73L5.82 21z" />
      </svg>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1685709235/ed5cc207f067c7d4213bd0281cf9c470.webp"
      />
      <div className="restaurant-name">Ashirvad Fastfood</div>
      <div className="cuisines">Birani, North Indian, South Indian</div>
      <div className="delivery-details">
        <div className="rating-container">
          <RatingIcon />
          <div>4.4</div>
        </div>
        <div className="delivery-time">38 min</div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-section">
        <input className="search-bar" type="text" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-container">
        {/* Restaurant cards */}
        <div className="cards">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </div>
  );
};

// component composition
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
