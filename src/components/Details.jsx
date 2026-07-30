import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../Context/AuthContext";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/All.json");
        const data = await res.json();

        const allProducts = [
          ...(data.baby || []),
          ...(data.electronics || []),
          ...(data.appliances || []),
          ...(data.menskincare || []),
          ...(data.menbags || []),
          ...(data.menshoes || []),
          ...(data.menjewels || []),
          ...(data.mencosmestics || []),
          ...(data.menhairkits || []),
          ...(data.kitappliances || []),
          ...(data.menclothes || []),
          ...(data.bodyspraym || []),
          ...(data.womenclothes || []),
          ...(data.womenshoes || []),
          ...(data.womenbags || []),
          ...(data.womencosmestics || []),
          ...(data.womenjewels || []),
          ...(data.womenskin || []),
          ...(data.womenhairkits || []),
          ...(data.wmenbodyspray || []),
        ];

        const foundProduct = allProducts.find(
          (item) => item.id === Number(id)
        );

        setProduct(foundProduct);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (!user) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    let cart =
      JSON.parse(
        localStorage.getItem(`cart_${user.email}`)
      ) || [];

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      cart = cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + qty }
          : item
      );
    } else {
      cart.push({
        ...product,
        qty,
      });
    }

    localStorage.setItem(
      `cart_${user.email}`,
      JSON.stringify(cart)
    );

    navigate("/cart");
  };

  if (!product) {
    return (
      <h3 className="text-center mt-5">
        Loading Product...
      </h3>
    );
  }

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-dark"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px 14px",
          margin: "12px 0 5px 15px",
          border: "none",
          borderRadius: "6px",
          width: "fit-content",
        }}
      >
        Back
      </button>

      <div className="container py-5">
        <div className="row align-items-center">

          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />
          </div>

          <div className="col-md-6">
            <h2>{product.name}</h2>

            <h4 className="text-success">
              ₦{product.price.toLocaleString()}
            </h4>

            <p>{product.description}</p>

            <div className="d-flex align-items-center mb-3">
              <button
                className="btn btn-outline-dark"
                onClick={() =>
                  setQty((prev) => Math.max(1, prev - 1))
                }
              >
                -
              </button>

              <span className="mx-3 fs-5">
                {qty}
              </span>

              <button
                className="btn btn-outline-dark"
                onClick={() => setQty((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            <button
              className="btn btn-dark w-100"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Details;