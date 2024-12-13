import axios from "axios";
import { useState } from "react";

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("admin", response.data.admin);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="container mt-5 pt-5 min-vh-100 d-flex flex-column">
      <div className="row justify-content-center flex-grow-1">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center py-3">
              <h2 className="card-title mb-0">
                <i className="bi bi-person-circle me-2"></i>
                Login
              </h2>
            </div>
            <div className="card-body p-4">
              {errors.length > 0 && (
                <div className="alert alert-danger">
                  {errors.map((error) => (
                    <div key={error}>
                      <i className="bi bi-exclamation-circle me-2"></i>
                      {error}
                    </div>
                  ))}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    <i className="bi bi-envelope me-2"></i>
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    <i className="bi bi-lock me-2"></i>
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
