import React from "react";
import { Button, Form } from "react-bootstrap";

import "./personal-data.scss";

const PersonalData = (props) => {
  return (
    <div className="personal-data-block">
      <h2 className="personal-data-title">TabuLearn</h2>
      <h3 className="personal-data-text">
        Please, write your full name and email to continue.
      </h3>
      <Form className="personal-data-form">
        <Form.Group>
          <Form.Label htmlFor="AuthFirstName" className="personal-data-label">
            <span className="personal-data-label-span">*</span>First Name
          </Form.Label>
          <Form.Control
            type="text"
            name="AuthFirstName"
            id="AuthFirstName"
            className="personal-data-input"
            placeholder="John"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="AuthFirstName" className="personal-data-label">
            <span className="personal-data-label-span">*</span>Last Name
          </Form.Label>
          <Form.Control
            type="text"
            name="AuthLastName"
            id="AuthLastName"
            className="personal-data-input"
            placeholder="Smith"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="AuthEmail" className="personal-data-label">
            <span className="personal-data-label-span">*</span>Email
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="AuthEmail"
            className="personal-data-input"
            placeholder="you@example.com"
          />
        </Form.Group>
        <Button disabled className="personal-data-button">
          Continue
        </Button>
      </Form>
    </div>
  );
};

export default PersonalData;
