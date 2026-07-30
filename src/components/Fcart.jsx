import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Fcart.css";
import SuccessModal from "./SuccessModal";
import PaymentModal from "./PaymentModal";

const Fcart = () => {
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [reference, setReference] = useState("");

  useEffect(() => {
    if (user) {
      loadCart();
    }
  }, [user]);

  const loadCart = () => {
    const savedCart =
      JSON.parse(
        localStorage.getItem(`cart_${user.email}`)
      ) || [];

    setCart(savedCart);
  };

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    );

    setCart(updatedCart);

    localStorage.setItem(
      `cart_${user.email}`,
      JSON.stringify(updatedCart)
    );
  };

  const decreaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            qty: item.qty > 1 ? item.qty - 1 : 1,
          }
        : item
    );

    setCart(updatedCart);

    localStorage.setItem(
      `cart_${user.email}`,
      JSON.stringify(updatedCart)
    );
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      `cart_${user.email}`,
      JSON.stringify(updatedCart)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-page">
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

      <h2 className="cart-title">
        🛒 Your Shopping Cart
      </h2>

      <div className="container cart-container py-5">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>

            <p>Add some products to start shopping.</p>

            <button
              className="btn btn-primary mt-3"
              onClick={() => navigate("/flanding")}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-8">
              {cart.map((item) => (
                <div
                  className="cart-card"
                  key={item.id}
                >
                  <div className="row align-items-center">
                    <div className="col-md-3 text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-image"
                      />
                    </div>

                    <div className="col-md-5">
                      <h4 className="product-name">
                        {item.name}
                      </h4>

                      <p className="product-price">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="col-md-4 text-center">
                      <div className="qty-box">
                        <button
                          onClick={() =>
                            decreaseQty(item.id)
                          }
                        >
                          -
                        </button>

                        <span>{item.qty}</span>

                        <button
                          onClick={() =>
                            increaseQty(item.id)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn btn-danger remove-btn mt-3"
                        onClick={() =>
                          removeItem(item.id)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="summary-card">
                <h3>Order Summary</h3>

                <hr />

                <div className="summary-row">
                  <span>Items</span>
                  <strong>{cart.length}</strong>
                </div>

                <div className="summary-row">
                  <span>Total</span>

                  <h2>
                    ₦{total.toLocaleString()}
                  </h2>
                </div>

                <button
                  className="checkout-btn"
                  onClick={() =>
                    navigate("/checkout")
                  }
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        show={showPayment}
        total={total}
        onClose={() => setShowPayment(false)}
        onSuccess={(reference) => {
          const orders =
            JSON.parse(
              localStorage.getItem(
                `orders_${user.email}`
              )
            ) || [];

          orders.push({
            id: Date.now(),
            reference,
            items: cart,
            total,
            date: new Date().toLocaleString(),
            status: "Paid",
          });

          localStorage.setItem(
            `orders_${user.email}`,
            JSON.stringify(orders)
          );

          localStorage.setItem(
            `lastReceipt_${user.email}`,
            JSON.stringify({
              reference,
              total,
              date: new Date().toLocaleString(),
              items: cart,
              status: "Paid",
            })
          );

          localStorage.removeItem(
            `cart_${user.email}`
          );

          setCart([]);

          setShowPayment(false);

          setReference(reference);

          setShowSuccess(true);
        }}
      />

      <SuccessModal
        show={showSuccess}
        reference={reference}
        total={total}
        onClose={() => {
          setShowSuccess(false);
          navigate("/flanding");
        }}
      />
    </div>
  );
}
     



export default Fcart;