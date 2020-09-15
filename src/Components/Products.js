import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Product from "./Product";
const products = [
  {
    id: 1,
    name: "iphone",
    description: "do Apple Sản xuất",
    price: 200,
  },
  {
    id: 2,
    name: "samsung",
    description: "do samsung Sản xuất",
    price: 300,
  },
  {
    id: 3,
    name: "oppo",
    description: "do oppo Sản xuất",
    price: 400,
  },
];
class Products extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="products">
        <ul>
          {products.map((value, index) => {
            return (
              <li key={index}>
                <Link to={`${match.url}/${value.name}`}>
                  {" "}
                  {value.id}-{value.name}-{value.price}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Route path="/products/:name" component={Product} exact />
        </div>
      </div>
    );
  }
}
export default Products;
