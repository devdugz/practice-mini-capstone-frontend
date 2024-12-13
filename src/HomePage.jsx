// HomePage.jsx
import axios from "axios";
import { useState, useEffect } from "react";

export function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleIndex = () => {
    setIsLoading(true);
    axios
      .get("/products.json")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Could not load products");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(handleIndex, []);

  if (isLoading) return <div className="container mt-5 pt-5">Loading...</div>;
  if (error) return <div className="container mt-5 pt-5">Error: {error}</div>;

  return (
    <main className="mt-5 pt-1">
      {" "}
      {/* Added mt-5 pt-5 for spacing below header */}
      {/* Hero Section */}
      <div className="hero position-relative text-white text-center">
        <div className="bg-dark bg-opacity-75 py-5">
          <div className="container py-5">
            <h1 className="display-3 fw-bold mb-4">
              Welcome to Pro Audio Shop
            </h1>
            <p className="lead mb-4">
              Professional Audio Equipment for Studios and Musicians
            </p>
            <a href="/products" className="btn btn-primary btn-lg px-5">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"
                className="card-img-top p-3"
                alt="Professional studio equipment"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <i className="bi bi-music-note display-4 text-primary mb-3"></i>
                <h3 className="card-title h4">Professional Quality</h3>
                <p className="card-text text-muted">
                  Industry-standard equipment for your studio needs
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="https://learn.g2.com/hubfs/G2CM_FI993_Learn_Article_Images_%5BOvernight_Shipping%5D_V1b.png"
                className="card-img-top p-3"
                alt="Fast worldwide shipping"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <i className="bi bi-truck display-4 text-primary mb-3"></i>
                <h3 className="card-title h4">Fast Shipping</h3>
                <p className="card-text text-muted">
                  Quick and secure delivery worldwide
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img
                src="https://blog.easybeereceptionist.com/hubfs/Imagenes%20Blogs/How-to-Become-an-Expert-at-Customer-Service.jpg"
                className="card-img-top p-3"
                alt="24/7 Expert support"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <i className="bi bi-headset display-4 text-primary mb-3"></i>
                <h3 className="card-title h4">Expert Support</h3>
                <p className="card-text text-muted">
                  24/7 technical assistance from our team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="mb-3">Ready to upgrade your studio?</h2>
              <p className="lead mb-4">
                Browse our selection of premium audio equipment.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="/products" className="btn btn-primary btn-lg">
                View Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
