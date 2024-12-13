import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProductsNew } from "./ProductsNew";

export function ProductsNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    console.log("handleCreate");
    axios
      .post("http://localhost:3000/products.json", params)
      .then((response) => {
        console.log(response);
        navigate("/Products");
      });
  };

  return (
    <main className="container mt-5 pt-5 min-vh-100 d-flex flex-column">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-header bg-primary text-white py-3">
              <h2 className="card-title mb-0 text-center">Add New Product</h2>
            </div>
            <div className="card-body p-4">
              <ProductsNew onCreate={handleCreate} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
