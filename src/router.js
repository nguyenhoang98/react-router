import React from "react";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Products from "./Components/Products";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
const routers = [
  {
    component: () => <Home />,
    path: "/",
    exact: true,
  },
  {
    component: () => <Contact />,
    path: "/contact",
    exact: false,
  },
  {
    component: () => <About />,
    path: "/about",
    exact: false,
  },
  {
    component: (props) => <Products match={props.match} location = {props.location} />,
    path: "/products",
    exact: false,
  },
  {
    component: (props) => <Login location = {props.location} />,
    path: "/login",
    exact: false,
  },
  {
    component: () => <NotFound />,
    path: "*",
    exact: false,
  },
];
export default routers;
