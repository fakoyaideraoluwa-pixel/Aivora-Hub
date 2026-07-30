import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Vercel.css'
const Router = () => {
  const navigate = useNavigate()

  // const change =() =>{
  //   navigate('/about')
  // }
  // const show =() =>{
  //   navigate('/shop')
  // }
  return (
    <>
      <header>
       <div>
        <a>Luxe</a> 
    </div>
    <div className='header-col-2'>
        <Link to="/">Home</Link>
        <Link  to="/about">About Us</Link>
      <Link  to="/shop">Shop</Link>
     <Link to="">Featured</Link> 
    </div>
    <div>
      <button> <i className="bi bi-cart-fill"></i> 
</button>
    </div>

  </header>
    </>
  )
}

export default Router

