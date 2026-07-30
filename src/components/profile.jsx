import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const userEmail = user?.email;

  const cart =
    JSON.parse(localStorage.getItem(`cart_${userEmail}`)) || [];

  const wishlist =
    JSON.parse(localStorage.getItem(`wishlist_${userEmail}`)) || [];

  const orders =
    JSON.parse(localStorage.getItem(`orders_${userEmail}`)) || [];

  const totalSpent = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const menu = [
    {
      icon: "📦",
      title: "My Orders",
      desc: `${orders.length} Orders`,
      path: "/orders",
    },
    {
      icon: "💳",
      title: "Transaction History",
      desc: `${orders.length} Payments`,
      path: "/transactions",
    },
    {
      icon: "🛒",
      title: "Cart",
      desc: `${cart.length} Items`,
      path: "/cart",
    },
  ];

  return (
    <div className="profile">
      <div className="top">
        <div className="user">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
          />

          <div>
            <h2>{(user?.name) || "User"}</h2>

            <p>{user?.email}</p>

            <button
              className="edit"
              onClick={() => navigate("/editprofile")}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="quick">
        <div className="box">
          <h2>{cart.length}</h2>
          <span>Cart</span>
        </div>

        <div className="box">
          <h2>{orders.length}</h2>
          <span>Orders</span>
        </div>

        <div className="box">
          <h2>₦{totalSpent.toLocaleString()}</h2>
          <span>Spent</span>
        </div>
      </div>

      <div className="menu">
        {menu.map((item, index) => (
          <div
            className="menuCard"
            key={index}
            onClick={() => navigate(item.path)}
          >
            <div className="left">
              <span className="icon">{item.icon}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>

            <span className="arrow">›</span>
          </div>
        ))}
      </div>

      <div className="bottom">
        <button
          className="home"
          onClick={() => navigate("/")}
        >
          Home
        </button>

        <button
          className="logout"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;