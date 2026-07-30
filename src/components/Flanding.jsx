import React from 'react'
import { Link } from "react-router-dom";
import "./Flanding.css"
const Flanding = () => {
 
  return (
    <>

      <main className="home">
            
            {/* HERO */}
            <section className="hero1">
              <h1>Welcome to <span>Aivora Hub</span></h1>
              <h3>Elevating Everyday Living. Inspiring Exceptional Choices.</h3>
              <p>Aivora Hub is more than a marketplace—it's a refined shopping destination where quality, innovation, and elegance come together. Created for discerning shoppers who value excellence, we offer a carefully curated collection of premium products designed to enrich every aspect of modern living.</p>
    
              {/* <button className="shop-btn">
                <Link to="/shops">Shop Now</Link>
              </button> */}
            </section>       
    
                <section >
                  <h1
                  style={{
                    textAlign:'center',
                    marginTop:'50px'
                  }}>Categories</h1>
                <div className='productss'>
                  
              <div className='products-card'>
                  <h4>Men's Fashion</h4>
                  <button> 
        <Link to='/men' >Shop Now</Link>
                      </button>
              </div>
      
               <div className='products-card'>
                  <h4>Women's Fashion</h4>
                  <button> 
                     <Link to='/women'>Shop Now</Link>
                   </button>
              </div>
      
              <div className='products-card'>
                  <h4>Baby Products</h4>
                  <button> 
                     <Link to='/baby'>Shop Now</Link>
                   </button>
              </div>
      
              <div className='products-card'>
                  <h4>Jewelries & Accessories</h4>
                  <button> 
                     <Link to='/jewel'>Shop Now</Link>
                   </button>
              </div>
      
              <div className='products-card'>
                  <h4>Skincare & Cosmestics</h4>
                  <button> 
                     <Link to='/skincare'>Shop Now</Link>
                   </button>
              </div>
               <div className='products-card'>
                  <h4>Gadgets</h4>
                  <button> 
                     <Link to=''>Shop Now</Link>
                   </button>
              </div>
      
              <div className='products-card'>
                  <h4>Home Appliances</h4>
                  <button> 
                     <Link to='/homea'>Shop now</Link>
                   </button>
              </div>
      
              <div className='products-card'>
                  <h4>Kitchen appliances</h4>
                  <button> 
                     <Link to='/kitchen'>Shop Now</Link>
                   </button>
              </div>

                </div>
      
              </section>
      
               <section>
                  <h1
                  style={{
                    textAlign:'center'
                  }}>Our services</h1>

                  <div className='productss'>

              <div className='products-card'>
                  <h4>Fast Delivery</h4>
            <p>Nationwide shipping</p>
            <p>Quality Products</p>
            <p>We offer reliable electronics and home appliances.</p>
              </div>
      
               <div className='products-card'>
                 <h4>Secure Payment </h4>
                 <p>Affordable Prices</p>
                <p>Get the best value for your money.</p>
            <p>100% Safe Checkout</p>
              </div>
      
               <div className='products-card'>
                   <h4>Special Deals</h4>
              <p>Exclusive discounts</p>
               <p>24/7 Support</p>
              <p>We're always here</p>
              </div>
              
              <div className="products-card">
                <h4>Discover fashion</h4>
                <p>Beauty products, gadgets,
                     baby products and much more</p>
                 <p>Shop quality products at unbeatable prices.</p>
              </div>
              </div>
              </section>
    
           <section class="cta">
    <div class="cta-content">
        <span class="cta-tag">Premium Shopping Experience</span>

        <h2>Everything You Desire, All in One Destination.</h2>

        <p>
            Discover a carefully curated collection of premium home appliances,
            gadgets, baby essentials, fashion, beauty products, and more.
            Experience effortless shopping with Aivora Hub.
        </p>

        <div class="cta-buttons">
            <a href="#" class="shop-btn">Shop Now</a>
            <a href="#" class="explore-btn">Explore Collections</a>
        </div>
    </div>
</section>
    
          </main>

    </>
  )
}

export default Flanding