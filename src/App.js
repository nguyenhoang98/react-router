import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import router from "./router";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Menu />
          <Switch>
            {router.map((value) => {
              return (
                <Route
                  path={value.path}
                  exact={value.exact}
                  component={value.component}
                  key={value.path}
                />
              );
            })}
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
