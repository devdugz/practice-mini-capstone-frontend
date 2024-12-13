import { useState, useEffect } from "react";
import axios from "axios";

export function CartedProductsPage() {
  const [cartItems, setCartItems] = useState([]);

  const handleIndexCartedProducts = () => {
    axios.get("/carted_products.json").then((response) => {
      console.log("Cart items:", response.data);
      setCartItems(response.data);
    });
  };

  const handleRemoveFromCart = (cartedProductId) => {
    axios.delete(`/carted_products/${cartedProductId}.json`).then(() => {
      setCartItems(cartItems.filter((item) => item.id !== cartedProductId));
    });
  };

  useEffect(handleIndexCartedProducts, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Shopping Cart</h1>
      <div className="row">
        <div className="col-md-8">
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.product.primary_image_url}
                    className="img-fluid rounded-start p-3"
                    alt={item.product.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.product.name}</h5>
                    <p className="card-text">{item.product.description}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Quantity: {item.quantity}
                      </small>
                    </p>
                    <p className="card-text">
                      <strong className="text-primary">
                        ${item.product.price}
                      </strong>
                    </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <p className="card-text">Total Items: {cartItems.length}</p>
              <p className="card-text">
                Total Price: $
                {cartItems
                  .reduce(
                    (sum, item) => sum + item.product.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
              <button className="btn btn-primary w-100">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
