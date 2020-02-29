import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import CustomContext from "./components/CustomContext";
import UseReducerContext from "./components/UseReducerContext";

import "./App.css";

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/useMemo">
          <li>UseMemo</li>
        </Link>
        <Link to="/useCallback">
          <li>UseCallback</li>
        </Link>
        <Link to="/useReducerContext">
          <li>UseReducer with useContext</li>
        </Link>
        <Link to="/customContext">
          <li>Custom Context</li>
        </Link>
      </ul>
      <Switch>
        <Route path="/useReducerContext" component={UseReducerContext} />
        <Route path="/customContext" component={CustomContext} />
        <Route path="/useCallback" component={UseCallback} />
        <Route path="/useMemo" component={UseMemo} />

        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
