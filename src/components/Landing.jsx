import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <main className="home">
        
        {/* HERO */}
        <section className="hero">
          <h1>Welcome to ElectroMart ⚡</h1>
          <p>Your one-stop shop for quality electronics.</p>

          <button className="shop-btn">
            <Link to="/shops">Shop Now</Link>
          </button>
        </section>

        {/* FEATURES */}
        <section className="head">
          <div className="card">
            <h3>Quality Products</h3>
            <p>We offer reliable electronics and home appliances.</p>
          </div>

          <div className="card">
            <h3>Affordable Prices</h3>
            <p>Get the best value for your money.</p>
          </div>

          <div className="card">
            <h3>Fast Delivery</h3>
            <p>Receive your orders quickly and safely.</p>
          </div>
        </section>

        {/* PRODUCTS PREVIEW */}
        <section className="products">
          <h2>Popular Products</h2>

          <div className="product-grid">
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="" />
              <h4>Blender</h4>
              <p>$45</p>
            </div>

            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="" />
              <h4>Microwave</h4>
              <p>$120</p>
            </div>

            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="" />
              <h4>Electric Fan</h4>
              <p>$22</p>
            </div>
          </div>

          <Link to="/shops" className="view-more">
            View More →
          </Link>
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Upgrade Your Home Today</h2>
          <p>Explore our wide range of electronics and appliances.</p>

          <Link to="/shops">
            <button className="cta-btn">Start Shopping</button>
          </Link>
        </section>

      </main>

        

                   <div className='products'>

        <div className='product-card'>
           
        </div>

         <div className='product-card'>
            
        </div>

         <div className='product-card'>
           
        </div>

         <div className='product-card'>
          
        </div>
        </div>

             
    </>
  );
};

export default Landing;