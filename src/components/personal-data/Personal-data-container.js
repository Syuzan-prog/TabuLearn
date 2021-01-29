import React from "react";

import PersonalData from "./Personal-data";

class PersonalDataContainer extends React.Component {
  render() {
    return (
      <div className="container personal-data-containers">
        <PersonalData />
      </div>
    );
  }
}

export default PersonalDataContainer;
