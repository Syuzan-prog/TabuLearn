import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PersonalData from "./components/PersonalData";
import CompanyDetails from "./components/CompanyDetails";
import Password from "./components/Password";
import SignIn from "./components/SignIn";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <nav >
              <ul className="d-flex">
                <li className="nav-link">
                  <Link to="/components/PersonalData">Person</Link>
                </li>
                <li className="nav-link">
                  <Link to="/components/CompanyDetails">company</Link>
                </li>
                <li className="nav-link">
                  <Link to="/components/Password">password</Link>
                </li>
                <li className="nav-link">
                  <Link to="/components/SignIn">SignIn</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/components/PersonalData">
                <PersonalData />
              </Route>
              <Route path="/components/CompanyDetails">
                <CompanyDetails/>
              </Route>
              <Route path="/components/Password">
                <Password />
              </Route>
              <Route path="/components/SignIn">
                <SignIn />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
