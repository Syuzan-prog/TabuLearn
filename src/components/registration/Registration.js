import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./registration.scss";

const Registration = (props) => {
  return (
    <div className="registration-block">
      <h2 className="registration-title">TabuLearn</h2>
      <h3 className="registration-text">Please, write your full name and email to continue.</h3>
      <Form className="registration-form">
        <FormGroup>
          <Label for="AuthFirstName" className="registration-label">
            <span className="registration-label-span">*</span>First Name
          </Label>
          <Input
            type="text"
            name="AuthFirstName"
            id="AuthFirstName"
            className="registration-input"
            placeholder="John"
          />
        </FormGroup>
        <FormGroup>
          <Label for="AuthFirstName" className="registration-label">
            <span className="registration-label-span">*</span>Last Name
          </Label>
          <Input
            type="text"
            name="AuthLastName"
            id="AuthLastName"
            className="registration-input"
            placeholder="Smith"
          />
        </FormGroup>
        <FormGroup>
          <Label for="AuthEmail" className="registration-label">
            <span className="registration-label-span">*</span>Email
          </Label>
          <Input
            type="email"
            name="email"
            id="AuthEmail"
            className="registration-input"
            placeholder="you@example.com"
          />
        </FormGroup>
        <Button className="registration-button">Continue</Button>
      </Form>
    </div>
  );
};

export default Registration;
