import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { ProductsShowPage } from "./ProductsShowPage";
import { ProductsNewPage } from "./ProductsNewPage";
import { Footer } from "./Footer";
import { CartedProductsPage } from "./CartedProductsPage";
import { OrdersPage } from "./OrdersPage";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "mini-capstone-api-eq1a.onrender.com";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsIndexPage />,
        loader: () =>
          axios.get("/products.json").then((response) => response.data),
      },
      {
        path: "/Products/new",
        element: <ProductsNewPage />,
      },
      {
        path: "/products/:id",
        element: <ProductsShowPage />,
        loader: ({ params }) =>
          axios
            .get(`/products/${params.id}.json`)
            .then((response) => response.data),
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cart",
        element: <CartedProductsPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
