import React from "react";

import { CompanyDetails } from "./Company-details";

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
