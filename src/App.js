import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { PersonalDataContainer } from "./components/personal-data";
import { CompanyDetailsContainer } from "./components/company-details";
import { PasswordContainer } from "./components/password";


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <nav >
              <ul className="d-flex">
                <li className="nav-link">
                  <Link to="/components/personal-data">Person</Link>
                </li>
                <li className="nav-link">
                  <Link to="/components/company-details">company</Link>
                </li>
                <li className="nav-link">
                  <Link to="/components/password">password</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/components/personal-data">
                <PersonalDataContainer />
              </Route>
              <Route path="/components/company-details">
                <CompanyDetailsContainer />
              </Route>
              <Route path="/components/password">
                <PasswordContainer />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
