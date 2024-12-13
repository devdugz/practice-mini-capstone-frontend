import axios from "axios";
import { useState } from "react";

export function ProductsShow(props) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(10, value));
    setQuantity(newQuantity);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdate(props.product, params);
    event.target.reset();
  };

  const handleAddToCart = () => {
    axios
      .post("/carted_products.json", {
        product_id: props.product.id,
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
    <div className="container mt-5">
      <div className="row">
        {/* Product Details Card */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">{props.product.name}</h2>
              <div className="mb-3">
                <h5>Description:</h5>
                <p className="card-text">{props.product.description}</p>
              </div>
              <div className="mb-3">
                <h5>Price:</h5>
                <p className="card-text text-primary fs-4">
                  ${props.product.price}
                </p>
              </div>
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
                onClick={handleAddToCart}
                className="btn btn-success w-100 mb-3"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Edit Form Card */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title mb-4">Edit Product</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    defaultValue={props.product.name}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input
                    name="description"
                    type="text"
                    className="form-control"
                    defaultValue={props.product.description}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    name="price"
                    type="text"
                    className="form-control"
                    defaultValue={props.product.price}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Supplier ID</label>
                  <input
                    name="supplier_id"
                    type="text"
                    className="form-control"
                    defaultValue={props.product.supplier_id}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <input
                    name="quantity"
                    type="text"
                    className="form-control"
                    defaultValue={props.product.quantity}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Update Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
