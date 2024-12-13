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
        navigate("/Products"); // window.location.href = "/Products";
      });
  };
  return (
    <main className="container">
      <ProductsNew onCreate={handleCreate} />
    </main>
  );
}
