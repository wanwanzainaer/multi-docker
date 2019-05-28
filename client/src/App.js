import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">HomePage</Link>
          <Link to="/otherpage">OtherPage</Link>
        </header>
        <div>
          <Fib />
          <Route exact path="/" componet={Fib} />
          <Route patch="/otherpage" componet={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
