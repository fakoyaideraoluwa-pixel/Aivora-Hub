import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-5 my-0.9" >
      
      <a className="navbar-brand fw-bold" href="/">
        E-Mart ⚡
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="/">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/shops">Products</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/categories">Categories</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
         

        </ul>

        <div className="d-flex align-items-center gap-3">
          
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            style={{ width: "200px" }}
          />

          
          <button className="btn btn-outline-dark">
            <a href="/cart">🛒 Cart</a>
          </button>

        
          <button className="btn btn-dark">
            <a href="/login">Login</a>
            
          </button>

        </div>
      </div>
    </nav>
  );
}