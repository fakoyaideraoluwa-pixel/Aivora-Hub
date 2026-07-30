import React from "react";
import { useNavigate } from "react-router-dom";
import "./Receipt.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
const Receipt = () => {
  const navigate = useNavigate();
  // let user = JSON.parse(localStorage.getItem("loggedInUser"));
const { user } = useContext(AuthContext);
if (!user) {
  return null;
}
const receipt = JSON.parse(
  localStorage.getItem(
    `lastReceipt_${user?.email}`
  )
);
  if (!receipt) {
    return (
      <div className="receipt-container">
        <div className="receipt-card">
          <h2>No Receipt Found</h2>
          <p>You haven't completed any payment yet.</p>

          <button
            className="home-btn"
            onClick={() => navigate("/flanding")}
          >
            Go Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="receipt-container">

      <div className="receipt-card">

        <h1>Aivora Hub</h1>
        <h3>Payment Receipt</h3>

        <div className="status">
          ✅ Payment Successful
        </div>

        <div className="receipt-info">

          <div className="row">
            <span>Reference</span>
            <strong>{receipt.reference}</strong>
          </div>

          <div className="row">
            <span>Status</span>
            <strong className="paid">
              {receipt.status}
            </strong>
          </div>

          <div className="row">
            <span>Date</span>
            <strong>{receipt.date}</strong>
          </div>

        </div>

        <hr />

        <h4>Purchased Items</h4>

        <div className="items">

          {receipt.items.map((item) => (
            <div
              className="item"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="details">
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

        <hr />

        <div className="total">
          Total Paid
          <span>
            ₦{receipt.total.toLocaleString()}
          </span>
        </div>

        <div className="buttons">

          <button
            className="print-btn"
            onClick={() => window.print()}
          >
            🖨 Print Receipt
          </button>

          <button
            className="orders-btn"
            onClick={() => navigate("/orders")}
          >
            📦 My Orders
          </button>

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            🏠 Continue Shopping
          </button>

        </div>

      </div>

    </div>
  );
};

export default Receipt;