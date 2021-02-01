import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PersonalData from "./components/personalData";
import Password from "./components/password";
import CompanyDetails from "./components/CompanyDetails";

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
                  <Link to="/components/password">password</Link>
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
              <Route path="/components/password">
                <Password />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
