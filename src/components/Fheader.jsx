import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "./Fheader.css";

const Fheader = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const wallet = user?.wallet || 0;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = () => {
    const query = search.trim();
    if (!query) return;
    setMenuOpen(false);
    setSearchOpen(false);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    setSearchOpen(false);
    navigate("/login");
  };

  const toggleMenu = () => {
    setSearchOpen(false);
    setMenuOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setMenuOpen(false);
    setSearchOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-brand">
        <Link
          to="/"
          className="brand-link"
          onClick={() => {
            setMenuOpen(false);
            setSearchOpen(false);
          }}
        >
          Aivora-Hub
        </Link>
        <p className="brand-subtitle">Shop smarter with responsive product search.</p>
      </div>

      <div className="header-actions">
        <button
          className={`search-toggle ${searchOpen ? "active" : ""}`}
          onClick={toggleSearch}
          aria-label={searchOpen ? "Close search" : "Open search"}
          type="button"
        >
          <span />
        </button>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
<div className="desktop-search">
  <input
    className="search"
    type="text"
    placeholder="Search products, brands, categories..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    }}
  />

  <button
    onClick={handleSearch}
    className="search-btn"
    type="button"
  >
    Search
  </button>
</div>


<div className={`search-panel ${searchOpen ? "active" : ""}`}>
  <div className="search-panel-card">

    <input
      className="search"
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
    />

    <button 
      onClick={handleSearch}
      className="search-btn"
    >
      Search
    </button>

  </div>
</div>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        {user ? (
          <>
            <Link to="/profile" onClick={() => setMenuOpen(false)}>
              👤 {user.name}
            </Link>
            <Link
              to="/wallet"
              className="wallet"
              onClick={() => setMenuOpen(false)}
            >
              Wallet: ₦{wallet.toLocaleString()}
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart
            </Link>
            <button onClick={handleLogout} className="btn logout" type="button">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              Sign Up
            </Link>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Log In
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Fheader;
