import React from "react";
import { Button, Form } from "react-bootstrap";

import "./personal-data.scss";

const PersonalData = (props) => {
  return (
    <div className="registration-block">
      <h2 className="registration-title">TabuLearn</h2>
      <h3 className="registration-text">
        Please, write your full name and email to continue.
      </h3>
      <Form className="registration-form">
        <Form.Group>
          <Form.Label htmlFor="AuthFirstName" className="registration-label">
            <span className="registration-label-span">*</span>First Name
          </Form.Label>
          <Form.Control
            type="text"
            name="AuthFirstName"
            id="AuthFirstName"
            className="registration-input"
            placeholder="John"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="AuthFirstName" className="registration-label">
            <span className="registration-label-span">*</span>Last Name
          </Form.Label>
          <Form.Control
            type="text"
            name="AuthLastName"
            id="AuthLastName"
            className="registration-input"
            placeholder="Smith"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="AuthEmail" className="registration-label">
            <span className="registration-label-span">*</span>Email
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="AuthEmail"
            className="registration-input"
            placeholder="you@example.com"
          />
        </Form.Group>
        <Button disabled className="registration-button">
          Continue
        </Button>
      </Form>
    </div>
  );
};

export default PersonalData;
