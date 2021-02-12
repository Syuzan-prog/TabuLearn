import React from "react";
import { NavLink } from "react-router-dom";

const Root = () => {
  return (
    <>
      Root
      <ul style={{display:'flex'}}>
        <li>
          <NavLink to="/SignUp">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/LogIn">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/RecoverPassword">Recover Password</NavLink>
        </li>
        <li>
          <NavLink to="/CreateNewPassword">CreateNewPassword</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Root;
