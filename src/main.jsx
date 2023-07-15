import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Phone from "./components/Phone";
import Phones from "./components/Phones";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader:()=>fetch('https://my-phone-server-xi.vercel.app/phones')
      },{
        path:'/phone/:id',
        element:<Phone></Phone>,
        loader:({params})=>fetch(`https://my-phone-server-xi.vercel.app/${params.id}`),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
