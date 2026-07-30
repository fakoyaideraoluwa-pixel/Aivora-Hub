import React from 'react'
import { Link } from'react-router-dom'
import "./MainLanding.css"
const MainLanding = () => {
  return (
    <>
    <section className='parent'>

    <div className='categories'>
     <nav>
    <Link to='/men' className='list'>Men's Fashion</Link>
    <Link to='/women' className='list'>Women's Fashion</Link>
     <Link to='/electronics' className='list'>Gadgets</Link>
     <Link to='/homea' className='list'>Home Appliances</Link>
     <Link to='/kitchen' className='list'>Kitchen Appliances</Link>
     <Link to='/baby' className='list'>Baby Products</Link>
     <Link to='/skincare' className='list'>Skincare</Link>
    <Link to='/cosmestics' className='list'>Cosmestics</Link>
     <Link to='/jewel' className='list'>Jewelries/Accessories</Link>
     </nav>
        </div>

        <div className='intro'>
            <div className='head1'>
                <h1>Welcome to Aivora Hub</h1>

                <p>Shop quality products at unbeatable prices.
                    Discover fashion, nightwears,beauty products, gadgets,
                     baby products and much more
                </p>
            </div>

        </div>

        <div className='services'>

        <div className='service-card'>
            <h4>Fast Delivery</h4>
            <p>Nationwide shipping</p>
        </div>

         <div className='service-card'>
            <h4>Secure Payment </h4>
            <p>100% Safe Checkout</p>
        </div>

         <div className='service-card'>
            <h4>24/7 Support</h4>
            <p>We're always here</p>
        </div>

         <div className='service-card'>
            <h4>Special Deals</h4>
            <p>Exclusive discounts</p>
        </div>
        </div>
    </section>

               <section className="products">
                  <h2>Popular Products</h2>
        
                  <div className="product-grid">
    
                    <div className="product-card">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdx630KPb0isOzVY3fia0D8FzPkRPokmFNcV-agg7PzM3Y9UqQupGNnz8O2L9M60ADKSaW&s" alt="" />
                      <h4>Shoulder bag</h4>
                      <p>$85</p>
                    </div>
    
                    <div className="product-card">
                      <img src="data:image/jpeg;base64,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" alt="" />
                      <h4>Hybrid Analog Smartwatch</h4>
                      <p>$795</p>
                    </div>
    
                    <div className="product-card">
                      <img src="data:image/jpeg;base64,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" alt="" />
                      <h4>Executive Dress Shoes</h4>
                      <p>$205</p>
                    </div>
    
                    <div className="product-card">
                      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADQQAAEDAgUCBAMHBQEAAAAAAAEAAgMEERIhMUFRBWETIjKhcYHRFCMzUpGx8AZCosHhYv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAwIE/8QAHBEAAwEBAQEBAQAAAAAAAAAAAAERAiEDEjFB/9oADAMBAAIRAxEAPwD2ZCEqoTEQlQgYiEqrVNR4fkZm478JpN/gnwfJPHG4Ne7M+ycZGAAl7QDvdY9TMyCKSondZjGl73HYDMrnaR1V16MztiLYb+Vzzhb8t/ZdGfGq0jr1jkO7a5rhdrgRyChcLGyv6dUyGme+QR2xtjlD8HxF8srLpOh9aj6k0xv8lQz1NIt7FZ34vKqdQ8eq04+GskSoUSg9CEJGgQhQVNQIhZti8+yaVE3BKqfwxgb6z7KhuSU4Z3cTcnMkqNxsFfOYS06Y39TvL6BlI311czYQO2p9hb5q3D96fsVH91TwfdyTDIkgehnfl222d8MM8Bm69RPd6YYpHgdyQFeqKbE7xYnYJbZm1w7s4b/uNlR/iRNLrZHNGCyNlNHhEV7Njyczu0/y+6odQpnmZj4sMfUIwXxPZkJWi1wRtqLjTO43AtPrWxjD4JdWk2bAD5j3xfk/9fK18k3+moqxzZqzq8LY6x5cJCHYhgGgbw3XLfU6rKbz0bSfDoKCc1VHFM5pY5zfM0ixadwp1jdAr/tEtZFl4cc2Fh5Nhf3utpQ2pqFsuochCpVtUWO8FtxceZ40HZZSrhpuDqipN8ERz3dwqhJLs9e+6TQZDLRHxCvnKRJui7LO6jTVb470NY6KTZr2te0/qL+6twzCYOc0HADZrjo7uOykbY53B+C2uGWqYTamspa6nbXkBxvG17W+V+IjXjMLbMnlzBHzBUU7BO0sdYx7j8xVdwfLlewWm0zKTRYkqIW2GMfqszqfVZPBFJQNx1MuTAB/kewVltC2XJos3d50+XKtUtFT0lzCwB59TzmXfNHEHWR9Ioh0+hZTg3e31O5ctujnFRFiDr4XFpI5Cygx9VMaaFxaBnLIP7RwO5WxDEyCJsUTQ1jRYBQ9HSuOEdXUeF5Gesi9+FQFzqrnUKV87WywG08fpBPlcNwfrsqEEolByLXtOF7HatPBR5yBu0VzSGkN4y7f8UVnSDwiSWj8Q/m7J5kxuLIzobOdx2Hf9k5hbo3ZVMf0cB2UcUQaC1pdhJuSTe6ffETb0jXun5cJDgYQVH4LcZxC98yOVKMgmE2zKAFcRa+wUA8WrlMFNkB+JLsz6nslax9ZN4ERLWD8R4/tHHxK2YIY4ImxRNDWN0AWNb+eDWaMpaaKliEULbN1J3ceSdypEqRRKj1n9U6c6pBlpZPBqsOHHs4cH67LQQhOdQNUwYvunfZ5GCKRgtgGluRyE/nDputOspI6uPC67Xt9EjfU0/zZZZEkMngzgB40cNHjkfTZXzv6JPMJABhsEo7pncILjay2IcSoiJJ5RBB6yLlx0YOT9EEve5sUIvK/QHQDcnstWkpmUsWBhxOJu951ceVjWvkeVR1NTx00IijBsNSdXHk91KhIoFQSJUiAHoSISAFFU07KmLBJ8WuGrTyFKhMDFkZJDJ4cwAOzgMnDkfRNeSC1rGl8jjZrRuVszQsnZgkFxsdweyp9LhaGPmNzIXOZiOwBsqr04T+Ok1DSCmYS4h0z/W//AEOysoQVJ9KfgiChIgASIKECP//Z" alt="" />
                      <h4>Oxford Shirt</h4>
                      <p>$150</p>
                    </div>
        
                    <div className="product-card">
                      <img src="data:image/avif;base64,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" alt="" />
                      <h4>Portable Fan Rechargeable</h4>
                      <p>$120</p>
                    </div>
        
                   
                  </div>
        
                  <Link to="/" className="view-more">
                    View More 
                  </Link>
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
    </>
  )
}

export default MainLanding