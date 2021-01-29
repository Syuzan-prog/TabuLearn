import React from "react";

import { CompanyDetails } from "./Company-details";

import "./company-details.scss";

class CompanyDetailsContainer extends React.Component {
  render() {
    return (
      <div className="container company-details-containers">
        <CompanyDetails />
      </div>
    );
  }
}

export default CompanyDetailsContainer;
