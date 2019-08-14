import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";
class MainNavbar extends React.Component{
  render(){
  return(
   <>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">
          Sign Up
          </Link>
        </div>
      </>
  );
}
}

export default MainNavbar;