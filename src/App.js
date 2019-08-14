import React from "react";
import { Router, Route } from "react-router-dom";
import HeaderSite from "./Components/Header/Header";
import Index from "./Components/Index/Index";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign Up/SignUp";
import Homepage from "./Components/Homepage/Homepage";
import History from "./Components/History/History";
function App() {
  return (
    <Router history={History}>
      <HeaderSite />
      <Route path="/" exact component={Index} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/Homepage/Homepage" exact component={Homepage} />
    </Router>
  );
}

export default App;
