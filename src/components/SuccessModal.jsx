import React from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessModal.css";

const SuccessModal = ({ show, reference, total, onClose }) => {
  const navigate = useNavigate();

  if (!show) return null;

  return (
    <div className="successOverlay">
      <div className="successCard">

        <button
          className="closeBtn"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="checkCircle">
          ✓
        </div>

        <h2>Payment Successful</h2>

        <p className="message">
          Thank you for shopping with Aivora Hub.
        </p>

        <div className="details">

          <div className="detailRow">
            <span>Reference</span>
            <strong>{reference}</strong>
          </div>

          <div className="detailRow">
            <span>Amount</span>
            <strong>₦{total.toLocaleString()}</strong>
          </div>

          <div className="detailRow">
            <span>Status</span>
            <strong className="paid">Paid</strong>
          </div>

          <div className="detailRow">
            <span>Date</span>
            <strong>{new Date().toLocaleString()}</strong>
          </div>

        </div>

        <div className="buttons">

          <button
            className="continueBtn"
            onClick={() => {
              onClose();
              navigate("/");
            }}
          >
            Continue Shopping
          </button>

          <button
            className="ordersBtn"
            onClick={() => {
              onClose();
              navigate("/orders");
            }}
          >
            View Orders
          </button>

        </div>

      </div>
    </div>
  );
};

export default SuccessModal;