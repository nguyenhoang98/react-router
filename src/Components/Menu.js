import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

const MenuLink = ({ label, to, actionOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={actionOnlyWhenExact}
      children={(props) => {
        return (
          <li className={props.match ? "active" : ""}>
            <NavLink to={to} exact>
              {label}
            </NavLink>
          </li>
        );
      }}
    />
  );
};
const menus = [
  {
    label: "Home",
    to: "/",
    actionOnlyWhenExact: true,
  },
  {
    label: "Contact",
    to: "/contact",
    actionOnlyWhenExact: true,
  },
  {
    label: "About",
    to: "/about",
    actionOnlyWhenExact: true,
  },
  {
    label: "Danh Sách sản Phẩm",
    to: "/products",
    actionOnlyWhenExact: true,
  },
  {
    label: "Đăng Nhập",
    to: "/login",
    actionOnlyWhenExact: true,
  },
];
class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          {menus.map((value) => {
            return (
              <MenuLink
                label={value.label}
                to={value.to}
                actionOnlyWhenExact={value.actionOnlyWhenExact}
                key={value.to}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Menu;
