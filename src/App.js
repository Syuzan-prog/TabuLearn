import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { PersonalDataContainer } from "./components/personal-data";
import { CompanyDetailsContainer } from "./components/company-details";


class App extends React.Component {
  render(){

    return (
      <>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/components/personal-data">Person</Link>
                </li>
                <li>
                  <Link to="/components/company-details">company</Link>
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
            </Switch>
          </div>
        </Router>
      </>
    );
  }
};

export default App;
