import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Get registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
 console.log("Saved users:", users);
console.log("Typed email:", `"${email}"`);
console.log("Typed password:", `"${password}"`);

users.forEach((item) => {
  console.log({
    savedEmail: item.email,
    savedPassword: item.password,
    emailMatch:
      item.email.trim().toLowerCase() === email.trim().toLowerCase(),
    passwordMatch: item.password === password,
  });
});

const user = users.find(
  (item) =>
    item.email.trim().toLowerCase() === email.trim().toLowerCase() &&
    item.password === password
);

console.log("Found user:", user);
    if (!user) {
      setError("Invalid email or password");
      return;
    }

    // Login using AuthContext
    login(user);
console.log("After login:", JSON.parse(localStorage.getItem("loggedInUser")));
    setMessage("Login successful");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        {message && <p className="success">{message}</p>}

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="extra">
          Don't have an account?{" "}
          <Link to="/signup">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;