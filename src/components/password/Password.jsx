import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";

import "./style";

export const Password = (props) => {
  return (
    <div className="password-block">
      <h2 className="password-title">TabuLearn</h2>
      <h3 className="password-text">
        Great, only one step left, create password and welcome to you account.
      </h3>
      <Form className="password-form">
        <Form.Group>
          <Form.Label htmlFor="password" className="password-label">
            <span className="password-label-span">*</span>New password
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            className="password-input"
            placeholder="Pasword(min. 8 characters)"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="confirm-password" className="password-label">
            <span className="password-label-span">*</span>Confirm Password
          </Form.Label>
          <Form.Control
            type="text"
            name="confirm-password"
            id="confirm-password"
            className="password-input"
            placeholder="*****"
          />
        </Form.Group>
        <Button disabled className="password-button">
          SIgn Up
        </Button>
      </Form>
    </div>
  );
};
