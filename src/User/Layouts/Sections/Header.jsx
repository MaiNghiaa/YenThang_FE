import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ cartItemsCount, cartItems }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  // console.log(cartItems);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/");
  };
  const handleGoToCart = () => {
    // Lưu dữ liệu vào localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // Chuyển hướng đến trang Cart
    navigate("/cart");
  };
  return (
    <div className="header_section">
      <div className="container-fluid">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Tsc30Y_l3Xx96efg60l4Ecc8HLWrm3r7WQ&s"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </Link>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="nav-link px-2 link-dark">
                Menu
              </Link>
            </li>

            <div className="col-md-3 text-end"></div>
          </ul>
          {isLoggedIn ? (
            <div className="d-flex align-items-center gap-5 justify-content-center">
              {" "}
              <button
                type="button"
                onClick={handleGoToCart}
                style={{ padding: "12px 20px" }}
              >
                Go to Cart {cartItemsCount}
              </button>
              <p>Welcome {username}</p>
              <button onClick={handleLogout}>bai</button>
            </div>
          ) : (
            <div className="col-md-3 text-end">
              <Link to="/login">
                <button type="button" className="btn btn-outline-primary me-2">
                  Sign in
                </button>
              </Link>
            </div>
          )}
        </header>
      </div>
    </div>
  );
}
