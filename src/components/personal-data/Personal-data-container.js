import React from "react";
import { Container } from "reactstrap";

import PersonalData from "./Personal-data";

import "./personal-data.scss";

class PersonalDataContainer extends React.Component {
  render() {
    return (
      <Container className="registration-containers">
        <PersonalData />
      </Container>
    );
  }
}

export default PersonalDataContainer;
