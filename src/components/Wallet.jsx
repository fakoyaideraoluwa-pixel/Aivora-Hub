import React, { useState, useContext } from "react";
import "./Wallet.css";
import { AuthContext } from "../Context/AuthContext";

const Wallet = () => {
  const { user, setUser } = useContext(AuthContext);

  const [amount, setAmount] = useState("");

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem(`transactions_${user.email}`);
    return saved ? JSON.parse(saved) : [];
  });

  const addMoney = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Enter a valid amount");
      return;
    }

    const deposit = Number(amount);

    // Get all users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Update only the logged-in user's wallet
    const updatedUsers = users.map((item) => {
      if (item.email === user.email) {
        return {
          ...item,
          wallet: (item.wallet || 0) + deposit,
        };
      }
      return item;
    });

    // Save updated users
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Get updated logged-in user
    const updatedUser = updatedUsers.find(
      (item) => item.email === user.email
    );

    // Save logged-in user
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(updatedUser)
    );

    // Update AuthContext
    setUser(updatedUser);

    // Save transaction
    const newTransaction = {
      id: Date.now(),
      type: "Deposit",
      amount: deposit,
      date: new Date().toLocaleString(),
    };

    const updatedTransactions = [
      newTransaction,
      ...transactions,
    ];

    setTransactions(updatedTransactions);

    localStorage.setItem(
      `transactions_${user.email}`,
      JSON.stringify(updatedTransactions)
    );

    setAmount("");
  };

  return (
    <div className="wallet-page">
      <h1>Aivora Wallet</h1>

      <div className="wallet-card">
        <h3>Available Balance</h3>

        <h2>
          ₦{(user.wallet || 0).toLocaleString()}
        </h2>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addMoney}>
          Add Money
        </button>
      </div>

      <div className="transactions">
        <h2>Transaction History</h2>

        {transactions.length === 0 ? (
          <p>No transactions yet</p>
        ) : (
          transactions.map((item) => (
            <div
              className="transaction"
              key={item.id}
            >
              <div>
                <h4>{item.type}</h4>
                <small>{item.date}</small>
              </div>

              <strong>
                +₦{item.amount.toLocaleString()}
              </strong>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wallet;