import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const email = localStorage.getItem("email");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="bi bi-music-note-beamed me-2"></i>
          Pro Audio Shop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">
                <i className="bi bi-house-door me-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/products">
                <i className="bi bi-grid me-1"></i>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/cart">
                <i className="bi bi-cart me-1"></i>
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/orders">
                <i className="bi bi-box me-1"></i>
                My Orders
              </Link>
            </li>
          </ul>

          <div className="navbar-nav">
            {email ? (
              <>
                <Link className="nav-link px-3" to="/products/new">
                  <i className="bi bi-plus-circle me-1"></i>
                  Add Product
                </Link>
                <span className="nav-link px-3 text-light">
                  <i className="bi bi-person-circle me-1"></i>
                  {email}
                </span>
                <LogoutLink className="nav-link px-3" />
              </>
            ) : (
              <>
                <Link className="nav-link px-3" to="/login">
                  <i className="bi bi-box-arrow-in-right me-1"></i>
                  Login
                </Link>
                <Link className="btn btn-light ms-2" to="/signup">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
