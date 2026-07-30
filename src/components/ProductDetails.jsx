import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
 const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find((item) => item.id == product.id);

  if (existing) {
    cart = cart.map((item) =>
      item.id == product.id
        ? { ...item, qty: item.qty + product.qty }
        : item
    );
  } else {
    cart.push({ ...product, qty: product.qty || 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  console.log("UPDATED CART:", cart); 

  navigate("/cart");
};
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find((p) => p.id == id);
        setProduct(found);
      });
  }, [id]);



  if (!product) {
    return <h3 className="text-center mt-5">Loading product...</h3>;
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Image */}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        {/* Details */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4 className="text-success">${product.price}</h4>
          <p>{product.description}</p>

          {/* Quantity */}
          <div className="d-flex align-items-center mb-3">
            <button
              className="btn btn-outline-dark"
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            >
              -
            </button>

            <span className="mx-3">{qty}</span>

            <button
              className="btn btn-outline-dark"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            className="btn btn-dark w-100"
            onClick={() => addToCart({ ...product, qty })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;