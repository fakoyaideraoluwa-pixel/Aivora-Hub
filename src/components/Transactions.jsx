import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Transactions.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Transactions = () => {
  
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!user) return;

    const savedTransactions =
      JSON.parse(
        localStorage.getItem(`transactions_${user.email}`)
      ) || [];

    setTransactions([...savedTransactions].reverse());
  }, [user]);

  const totalSpent = transactions.reduce(
    (sum, item) =>
      item.type === "Payment" ? sum + item.amount : sum,
    0
  );

  return (
    <div className="transactions">

      <div className="header">

        <button
          className="backBtn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h2>💳 Transaction History</h2>

      </div>

      <div className="summary">

        <div className="summaryCard">
          <h3>Total Transactions</h3>
          <h1>{transactions.length}</h1>
        </div>

        <div className="summaryCard">
          <h3>Total Spent</h3>
          <h1>₦{totalSpent.toLocaleString()}</h1>
        </div>

      </div>

      {transactions.length === 0 ? (

        <div className="empty">

          <h3>No Transactions Yet</h3>

          <p>You haven't made any payments.</p>

          <button
            onClick={() => navigate("/flanding")}
          >
            Start Shopping
          </button>

        </div>

      ) : (

        transactions.map((transaction) => (

          <div
            className="transactionCard"
            key={transaction.id}
          >

            <div className="top">

              <div>

                <h3>
                  {transaction.reference}
                </h3>

                <small>
                  {transaction.date}
                </small>

              </div>

              <span className="paid">
                {transaction.status}
              </span>

            </div>

            <hr />

            <div className="info">

              <p>
                <strong>Amount</strong>
              </p>

              <h2>
                ₦
                {(transaction.amount || transaction.total || 0).toLocaleString()}
              </h2>

            </div>

            <div className="buttons">
              {transaction.items ? (
                <button
                  onClick={() => {
                    localStorage.setItem(
                      `lastReceipt_${user.email}`,
                      JSON.stringify(transaction)
                    );

                    navigate("/receipt");
                  }}
                >
                  🧾 View Receipt
                </button>
              ) : null}

              <button
                onClick={() => window.print()}
              >
                🖨 Print
              </button>
            </div>

          </div>

        ))

      )}

    </div>
  );
};

export default Transactions;