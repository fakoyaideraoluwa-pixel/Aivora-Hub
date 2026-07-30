import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Fabout.css"
const Fabout = () => {
      const navigate = useNavigate()
  
  return (
    <>
  <button
        onClick={()=>navigate(-1)}
        className='btn btn-dark'
        style={{
            display:'inline-flex',
            alignItems:'center',
            justifyContent:'center',
            padding:'6px 14px',
            margin:'12px 0 5px 15px',
            border:'none',
            borderRadius:'6px',
            width:'fit-content',
            transition:'0.3s ease'
        }}>
        Back</button>


   <div className="about">

      <section className="about">
        <h1>About Aivora Hub</h1>
        <h2>Your trusted destination for quality fashions and electronics</h2>
      
          <p>
         Aivora HUb is an online store created to provide quality home
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

      <section className="last">
        <h2>Start Shopping with Us Today</h2>
        <p>Discover amazing products at unbeatable prices.</p>
      </section>

    </div>
    </>
  )
}

export default Fabout