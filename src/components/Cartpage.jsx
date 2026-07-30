import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentModal from "./PaymentModal";
import SuccessModal from "./SuccessModal";

function CartPage({ cart, setCart }) {
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [reference, setReference] = useState("");

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decreaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            qty: item.qty > 1 ? item.qty - 1 : 1,
          }
        : item
    );

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      <div className="container py-5">

        <h2 className="mb-4">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center">

            <h4 className="text-muted mb-4">
              Your cart is empty
            </h4>

          </div>
        ) : (
          <div className="row">

            {/* Cart Items */}

            <div className="col-lg-8">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="card mb-3 shadow-sm p-3"
                >
                  <div className="row align-items-center">

                    <div className="col-md-3 text-center">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                        style={{
                          maxHeight: "100px",
                          objectFit: "contain",
                        }}
                      />

                    </div>

                    <div className="col-md-3">

                      <h5>{item.name}</h5>

                      <h6 className="text-success">
                        ₦{item.price.toLocaleString()}
                      </h6>

                    </div>

                    <div className="col-md-3 d-flex align-items-center justify-content-center">

                      <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() =>
                          decreaseQty(item.id)
                        }
                      >
                        -
                      </button>

                      <span className="mx-3 fw-bold">
                        {item.qty}
                      </span>

                      <button
                        className="btn btn-outline-dark btn-sm"
                        onClick={() =>
                          increaseQty(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                    <div className="col-md-3 text-end">

                      <button
                        className="btn btn-danger btn-sm"
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

            {/* Summary */}

            <div className="col-lg-4">

              <div className="card shadow p-4">

                <h4>Order Summary</h4>

                <hr />

                <div className="d-flex justify-content-between">

                  <span>Items</span>

                  <strong>{cart.length}</strong>

                </div>

                <div className="d-flex justify-content-between mt-2">

                  <span>Total</span>

                  <strong className="text-success">
                    ₦{total.toLocaleString()}
                  </strong>

                </div>

                <button
                  className="btn btn-primary mt-4"
                  onClick={() =>
                    setShowPayment(true)
                  }
                >
                  Proceed to Checkout
                </button>

              </div>

            </div>

          </div>
        )}

      </div>

      {/* Payment Modal */}

      <PaymentModal
        show={showPayment}
        total={total}
        onClose={() => setShowPayment(false)}
        onSuccess={(reference) => {

          const orders =
            JSON.parse(
              localStorage.getItem("orders")
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
            "orders",
            JSON.stringify(orders)
          );

         localStorage.removeItem(`cart_${user.email}`);

          setCart([]);

          setShowPayment(false);

          setReference(reference);

          setShowSuccess(true);
        }}
      />

      {/* Success Modal */}

      <SuccessModal
        show={showSuccess}
        reference={reference}
        total={total}
        onClose={() => {
          setShowSuccess(false);
        }}
      />
    </>
  );
}

export default CartPage;