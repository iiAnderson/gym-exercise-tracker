import React from "react";
import { Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import TopBar from "./TopBar";
import { createBrowserHistory as createHistory } from "history";
import "./App.css";
import { useState, useEffect } from "react";

const history = createHistory();

function App() {

  return (
    <div className="App">
      <Router history={history}>
        <TopBar />
        <Route path="/" exact component={Home} />
        {/* <Route path="/search" exact component={SearchPage} /> */}
      </Router>
    </div>
  );
}
export default App;