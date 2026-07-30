import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pModal.css";
import visa from "../assets/visa.png";
import mastercard from "../assets/master.png";

const PaymentModal = ({ show, onClose, total, onSuccess }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [holder, setHolder] = useState(user?.name || "");
  const [loading, setLoading] = useState(false);
  const [cardType, setCardType] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentReference, setPaymentReference] = useState("");

  if (!show) return null;

  const formatCard = (value) => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.startsWith("4")) {
      setCardType("visa");
    } else if (
      numbers.startsWith("5") ||
      numbers.startsWith("2")
    ) {
      setCardType("mastercard");
    } else {
      setCardType("");
    }

    return numbers
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .slice(0, 19);
  };

  const formatExpiry = (value) => {
    value = value.replace(/\D/g, "");

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }

    return value;
  };

  const isValidCardNumber = (number) => {
    const digits = number.replace(/\D/g, "");
    return digits.length === 16;
  };

  const isValidExpiry = (value) => {
    const [month, year] = value.split("/");

    if (
      !month ||
      !year ||
      month.length !== 2 ||
      year.length !== 2
    ) {
      return false;
    }

    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (
      Number.isNaN(monthNum) ||
      Number.isNaN(yearNum)
    ) {
      return false;
    }

    if (monthNum < 1 || monthNum > 12) {
      return false;
    }

    const now = new Date();
    const expiryDate = new Date(2000 + yearNum, monthNum - 1, 1);
    const currentMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    );

    return expiryDate >= currentMonth;
  };

  const isValidCvv = (value) => {
    return /^\d{3}$/.test(value);
  };

  const handlePay = () => {
    if (!cardNumber || !expiry || !cvv || !holder) {
      alert("Please fill in all payment details.");
      return;
    }

    if (!isValidCardNumber(cardNumber)) {
      alert("Please enter a valid 16-digit card number.");
      return;
    }

    if (!isValidExpiry(expiry)) {
      alert("Please enter a valid expiry date.");
      return;
    }

    if (!isValidCvv(cvv)) {
      alert("Please enter a valid 3-digit CVV.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      const reference =
        "AIV-" +
        Math.random().toString(36).substring(2, 10).toUpperCase();

      setPaymentReference(reference);
      setPaymentSuccess(true);

      if (onSuccess) {
        onSuccess(reference);
      }

      setCardNumber("");
      setExpiry("");
      setCvv("");
      setHolder(user?.name || "");
      setCardType("");
    }, 2500);
  };

  const handleClose = () => {
    setPaymentSuccess(false);
    onClose();
  };

  const handleViewReceipt = () => {
    setPaymentSuccess(false);
    onClose();
    navigate("/receipt");
  };

  return (
    <div className="overlay">
      <div className="payment">
        <div className="top">
          <h2>Paystack</h2>

          <button onClick={handleClose}>
            ✕
          </button>
        </div>

        <div className="amount">
          <h3>₦{Number(total || 0).toLocaleString()}</h3>
          <p>{user?.email}</p>
        </div>

        <div className="acceptedCards">
          <span>Accepted cards</span>

          <div className="acceptedList">
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="Mastercard" />
          </div>
        </div>

        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) =>
            setCardNumber(formatCard(e.target.value))
          }
        />

        <div className="row">
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) =>
              setExpiry(formatExpiry(e.target.value))
            }
          />

          <input
            type="password"
            placeholder="CVV"
            value={cvv}
            onChange={(e) =>
              setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
            }
          />
        </div>

        <input
          type="text"
          placeholder="Card Holder"
          value={holder}
          onChange={(e) => setHolder(e.target.value)}
        />

        <button
          className="payBtn"
          onClick={handlePay}
          disabled={loading}
        >
          {loading ? (
            <>
              <div className="spinner"></div>
              Processing Payment...
            </>
          ) : (
            `Pay ₦${Number(total || 0).toLocaleString()}`
          )}
        </button>

        {paymentSuccess && (
          <div className="successModal">
            <div className="successContent">
              <h3>Payment Successful</h3>

              <p>Your payment has been completed successfully.</p>

              <p className="reference">
                Reference: <strong>{paymentReference}</strong>
              </p>

              <div className="successActions">
                <button
                  className="viewReceiptBtn"
                  onClick={handleViewReceipt}
                >
                  View Receipt
                </button>

                <button onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;