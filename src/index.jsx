import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/customer/Home";
import { RecoilRoot } from "recoil";
import AdminPage from "./pages/admin/AdminPage";
import MenuManagement from "./pages/admin/MenuManagement";
import UserManagement from "./pages/admin/UserManagement";
import OrderManagement from "./pages/admin/OrderManagement";
import MaterialManagement from "./pages/admin/MaterialManagement";
import SupplierManagement from "./pages/admin/SupplierManagement";
import Supplier from "./pages/admin/Supplier";
import MenuItemInfo from "./pages/customer/MenuItemInfo";
import OrderList from "./pages/customer/OrderList";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/order-list",
        element: <OrderList />,
      },

      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/admin/menu-management",
        element: <MenuManagement />,
      },
      {
        path: "/admin/user-management",
        element: <UserManagement />,
      },
      {
        path: "/admin/order-management",
        element: <OrderManagement />,
      },
      {
        path: "/admin/material-management",
        element: <MaterialManagement />,
      },
      {
        path: "/admin/supplier-management",
        element: <SupplierManagement />,
      },
      {
        path: "/admin/supplier-management/:supplierNum",
        element: <Supplier />,
      },
      {
        path: "/menuItemInfo/:menuItemNum",
        element: <MenuItemInfo />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
