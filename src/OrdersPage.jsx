import { useState, useEffect } from "react";
import axios from "axios";

export function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((response) => {
        console.log("Orders response:", response.data);
        setOrders(response.data || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading orders:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="container mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="container mt-5">Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Orders</h1>
      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="card mb-4">
            <div className="card-header bg-light">
              <div className="row align-items-center">
                <div className="col">
                  <h5 className="mb-0">Order #{order.id}</h5>
                </div>
                <div className="col text-end">
                  <small className="text-muted">
                    Ordered on:{" "}
                    {new Date(order.created_at).toLocaleDateString()}
                  </small>
                </div>
              </div>
            </div>
            <div className="card-body">
              {order.carted_products && order.carted_products.length > 0 ? (
                order.carted_products.map((item) => (
                  <div key={item.id} className="row mb-3 border-bottom pb-3">
                    <div className="col-md-2">
                      <img
                        src={item.product?.images?.[0]?.url}
                        alt={item.product?.name}
                        className="img-fluid rounded"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <h6>{item.product?.name}</h6>
                      <p className="text-muted small">
                        {item.product?.description}
                      </p>
                    </div>
                    <div className="col-md-2">
                      <p className="mb-0">Quantity: {item.quantity}</p>
                    </div>
                    <div className="col-md-2 text-end">
                      <p className="mb-0">
                        ${(item.product?.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products in this order</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
}
