import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Remove item
  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id != id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-muted"  style={{
          textAlign:'center',
          margin:'20px 0'
        }}>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="card p-3 mb-3">
              <div className="d-flex justify-content-between align-items-center">

                <div>
                  <h5>{item.name}</h5>
                  <p>Qty: {item.qty}</p>
                  <p>${item.price}</p>
                </div>

                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="mt-4">
            <h4>Total: r{total.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;