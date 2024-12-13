import axios from "axios";
import { useState } from "react";

export function ProductsShow({ product, onUpdate, onDestroy }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(10, value));
    setQuantity(newQuantity);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(product, params);
    event.target.reset();
  };

  const handleAddToCart = () => {
    axios
      .post("/carted_products.json", {
        product_id: product.id,
        quantity: quantity,
      })
      .then((response) => {
        console.log("Added to cart:", response.data);
        window.alert("Added to cart successfully!");
        setQuantity(1); // Reset quantity after adding to cart
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        window.alert("Error adding to cart");
      });
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.primary_image_url}
            className="img-fluid rounded mb-4"
            alt={product.name}
          />
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Add to Cart</h5>
              <div className="mb-3">
                <label className="form-label">Quantity:</label>
                <div className="input-group">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleQuantityChange(quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="form-control text-center"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(parseInt(e.target.value))
                    }
                    min="1"
                    max="10"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="btn btn-success w-100"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="mb-4">{product.name}</h2>
          <h4 className="text-primary mb-3">${product.price}</h4>
          <p className="mb-4">{product.description}</p>

          {localStorage.admin === "true" && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-4">Edit Product</h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      defaultValue={product.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                      name="price"
                      type="number"
                      className="form-control"
                      defaultValue={product.price}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      defaultValue={product.description}
                      rows="3"
                    />
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary flex-grow-1"
                    >
                      Update Product
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger flex-grow-1"
                      onClick={() => onDestroy(product)}
                    >
                      Delete Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
