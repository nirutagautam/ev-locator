import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { chakraTheme } from "./theme";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Sidebar from "./Components/sidebar";
import Addnew from "./Components/add-new";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/add-new",
    element: <Addnew />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <Sidebar></Sidebar>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
