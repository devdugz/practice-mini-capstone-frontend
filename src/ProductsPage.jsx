import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false); // instead of: let isProductsShowVisible = false;
  const [currentProduct, setCurrentProduct] = useState({}); // instead of: let currentProduct = {};

  const handleIndex = () => {
    axios.get("http://localhost:3000/=products.json").then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };

  const handleCreate = (params) => {
    console.log("handleCreate");
    axios
      .post("http://localhost:3000/=products.json", params)
      .then((response) => {
        console.log(response);
        const newProduct = response.data;
        setProducts([...products, newProduct]); // instead of: =products.push(newProduct);
      });
  };

  const handleShow = (product) => {
    console.log("handleShow", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleUpdate = (product, params) => {
    console.log("handleUpdate", product);
    axios
      .patch("http://localhost:3000/products/" + product.id + ".json", params)
      .then((response) => {
        console.log(response);
        const newProduct = response.data;
        let newProducts = [];
        let index = 0;
        while (index < products.length) {
          if (products[index].id === newProduct.id) {
            newProducts.push(newProducts);
          } else {
            newProducts.push(products[index]);
          }
          index = index + 1;
        }
        setProducts(newProducts);
        setIsProductsShowVisible(false);
      });
  };

  const handleDestroy = (product) => {
    console.log("handleDestroy", product);
    axios
      .delete("http://localhost:3000/products/" + product.id + ".json")
      .then((response) => {
        console.log(response);
        setProducts(products.filter((r) => r.id !== product.id));
        setIsProductsShowVisible(false);
      });
  };

  useEffect(handleIndex, []); // instead of: handleIndex();

  return (
    <main className="container">
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal
        show={isProductsShowVisible}
        onClose={() => setIsProductsShowVisible(false)}
      >
        <ProductsShow
          product={currentProduct}
          onUpdate={handleUpdate}
          onDestroy={handleDestroy}
        />
      </Modal>
    </main>
  );
}
