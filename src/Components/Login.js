import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    const { name, password } = this.state;
    if (name && password) {
      return <Redirect
        to={{
          pathname: "/products",
          search: "?utm=your+face",
          state: {name , password}
        }}
      />;
    }
    return (
      <div className="login">
        <div className="login-content">
          <form onSubmit={this.onSubmit}>
            <h2>Login</h2>
            <div className="group-form">
              <label>Name :</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="group-form">
              <label>Password :</label>
              <input
                type="text"
                name="password"
                value={password}
                onChange={this.onChange}
              />
            </div>
            <div className="group-form">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
