import React from "react";
import { Button, Form } from "react-bootstrap";

import "./styles";

export const CompanyDetails = () => {
  return (
    <div className="company-details-block">
      <h2 className="company-details-title">TabuLearn</h2>
      <h3 className="company-details-text">
        Good, now write infomation about your workspace, company and position.
      </h3>
      <Form className="company-details-form">
        <Form.Group>
          <Form.Label
            htmlFor="workspace-name"
            className="company-details-label"
          >
            <span className="company-details-label-span">*</span>Workspace Name
          </Form.Label>
          <Form.Control
            type="text"
            name="workspace-name"
            id="workspace-name"
            className="company-details-input"
            placeholder="Metric"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="company" className="company-details-label">
            <span className="company-details-label-span">*</span>Company
          </Form.Label>
          <Form.Control
            type="text"
            name="company"
            id="company"
            className="company-details-input"
            placeholder="Metric"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="position" className="company-details-label">
            <span className="company-details-label-span">*</span>Position
          </Form.Label>
          <Form.Control
            type="text"
            name="position"
            id="position"
            className="company-details-input"
            placeholder="Director"
          />
        </Form.Group>
        <Button disabled className="company-details-button">
          Continue
        </Button>
      </Form>
    </div>
  );
};
