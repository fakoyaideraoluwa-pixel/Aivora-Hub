import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shops.css";

function Shops() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="shop-container">
      <h1 className="title">Our Products</h1>

      <div className="product-grid">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>

              {/* 👇 VIEW BUTTON */}
              <Link to={`/products/${product.id}`} className="view-btn">
                View
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Shops;