import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const email = localStorage.getItem("email");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
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
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                My Orders
              </Link>
            </li>
          </ul>
          <div className="navbar-nav">
            {email ? (
              <>
                <Link className="nav-link" to="/products/new">
                  Add Product
                </Link>
                <span className="nav-link">{email}</span>
                <LogoutLink className="nav-link" />
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
