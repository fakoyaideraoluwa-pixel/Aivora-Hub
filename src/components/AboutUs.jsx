import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about">

      {/* HERO */}
      <section className="about-hero">
        <h1>About ElectroMart ⚡</h1>
        <p>Your trusted destination for quality electronics and home appliances</p>
      </section>

      {/* INTRO */}
      <section className="about-intro">
        <p>
          ElectroMart is an online store created to provide quality home
          appliances and electronic devices at affordable prices.
        </p>

        <p>
          Our goal is to make shopping simple and convenient while delivering
          products that improve everyday life.
        </p>

        <p>
          From kitchen appliances to modern electronics, we carefully select
          products our customers can trust.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="about-grid">
        <div className="box">
          <h2>Our Mission</h2>
          <p>
            To provide high-quality, affordable electronics that make everyday
            life easier and more enjoyable for our customers.
          </p>
        </div>

        <div className="box">
          <h2>Our Vision</h2>
          <p>
            To become a leading online electronics store known for reliability,
            innovation, and excellent customer experience.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>✔ Quality Assurance</h3>
            <p>Every product is tested and verified for quality.</p>
          </div>

          <div className="why-card">
            <h3>💰 Affordable Pricing</h3>
            <p>We offer competitive prices without compromising quality.</p>
          </div>

          <div className="why-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Quick and reliable delivery to your doorstep.</p>
          </div>

          <div className="why-card">
            <h3>🤝 Customer Support</h3>
            <p>We’re always here to help you with your needs.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Start Shopping with Us Today</h2>
        <p>Discover amazing products at unbeatable prices.</p>
      </section>

    </div>
  );
};

export default AboutUs;