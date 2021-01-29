import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { PersonalDataContainer } from "./components/personal-data";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/components/personal-data">Registration</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/components/personal-data">
              <PersonalDataContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
