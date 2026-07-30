import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./Orders.css";

const Orders = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

const userEmail = loggedInUser?.email;
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

useEffect(() => {
  if (!user) return;

  const savedOrders =
    JSON.parse(
      localStorage.getItem(`orders_${user.email}`)
    ) || [];

  setOrders([...savedOrders].reverse());
}, [user]);


  return (
    <div className="orders-container">

      <div className="orders-header">
        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h2>📦 My Orders</h2>
      </div>

      {orders.length === 0 ? (
        <div className="empty-orders">

          <h3>No Orders Yet</h3>

          <p>You haven't placed any orders.</p>

          <button
            className="shop-btn"
            onClick={() => navigate("/flanding")}
          >
            Start Shopping
          </button>

        </div>
      ) : (
        orders.map((order) => (
          <div
            className="order-card"
            key={order.id}
          >
            <div className="top-row">
              <h4>{order.reference}</h4>

              <span className="paid">
                {order.status}
              </span>
            </div>

            <p>
              <strong>Date:</strong> {order.date}
            </p>

            <p>
              <strong>Total:</strong> ₦
              {order.total.toLocaleString()}
            </p>

            <div className="items">
              {order.items.map((item) => (
                <div
                  className="item"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h5>{item.name}</h5>

                    <small>
                      Qty: {item.qty}
                    </small>
                  </div>

                  <strong>
                    ₦
                    {(
                      item.price * item.qty
                    ).toLocaleString()}
                  </strong>
                </div>
              ))}
            </div>

  <button
  className="buy-btn"
  onClick={() => {
const currentCart =
  JSON.parse(
    localStorage.getItem(`cart_${user.email}`)
  ) || [];

    const updatedCart = [...currentCart];

    order.items.forEach((product) => {
      const existing = updatedCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        existing.qty += product.qty;
      } else {
        updatedCart.push({ ...product });
      }
    });
localStorage.setItem(
  `cart_${user.email}`,
  JSON.stringify(updatedCart)
);

    navigate("/cart");
  }}
>
  Buy Again
</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;