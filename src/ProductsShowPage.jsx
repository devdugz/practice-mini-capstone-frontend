import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ProductsShow as ProductsShow } from "./ProductsShow"; // Fix import or rename component

export function ProductsShowPage() {
  const currentProduct = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (product, params) => {
    console.log("handleUpdate", product);
    axios
      .patch(`http://localhost:3000/products/${product.id}.json`, params)
      .then((response) => {
        console.log(response);
        navigate("/products");
      });
  };

  const handleDestroy = (product) => {
    console.log("handleDestroy", product);
    axios
      .delete(`http://localhost:3000/products/${product.id}.json`)
      .then((response) => {
        console.log(response);
        navigate("/products");
      });
  };

  return (
    <main className="container">
      <ProductsShow
        product={currentProduct}
        onUpdate={handleUpdate}
        onDestroy={handleDestroy}
      />
    </main>
  );
}
