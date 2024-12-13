import { useLoaderData, useNavigate } from "react-router-dom";
import { ProductsIndex } from "./ProductsIndex";

export function ProductsIndexPage() {
  const products = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (product) => {
    console.log("handleShow", product);
    navigate(`/products/${product.id}`);
  };

  return (
    <main className="container mt-5 pt-1">
      {" "}
      {/* Added mt-5 pt-5 for spacing below header */}
      <ProductsIndex products={products} onShow={handleShow} />
    </main>
  );
}
