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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <div className="hero py-5 bg-dark text-white text-center">
        <div className="container py-5">
          <h1 className="display-4">Welcome to Pro Audio Shop</h1>
          <p className="lead">
            Professional Audio Equipment for Studios and Musicians
          </p>
        </div>
      </div>
    </main>
  );
}
