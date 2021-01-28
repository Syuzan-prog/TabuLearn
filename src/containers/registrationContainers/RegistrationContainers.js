import React from "react";
import { Container } from "reactstrap";

import Registration from "../../components/registration/Registration";

import "./registrationContainers.scss";

class RegistrationContainers extends React.Component {
  render() {
    return (
      <Container className="registration-containers">
        <Registration />
      </Container>
    );
  }
}

export default RegistrationContainers;
