import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import UseMemo from "./components/UseMemo";

import "./App.css";

function App() {
  return (
    <Router>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/useMemo"><li>UseMemo</li></Link>
      </ul>
      <Switch>
        <Route path="/useMemo" component={UseMemo} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
