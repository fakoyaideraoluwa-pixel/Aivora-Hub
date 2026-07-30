import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="logo">Aivora Hub</h2>
          <p>
            Your one-stop shop for electronics, fashion, and everyday essentials.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shops">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe for latest deals</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Join</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} E-Mart. All rights reserved.</p>

        <div className="socials">
          <span>🌐</span>
          <span>🐦</span>
          <span>📸</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;