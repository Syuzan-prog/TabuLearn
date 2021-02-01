import React from "react";
import {Button, Form} from "react-bootstrap";

import "./CompanyDetails.scss";

export const CompanyDetails = () => {
    return (
        <div className="companyDetailsContainers ">
            <div className="companyDetailsBlock">
                <h2 className="companyDetailsTitle">TabuLearn</h2>
                <h3 className="companyDetailsText">
                    Good, now write information about your workspace, company and position.
                </h3>
                <Form className="companyDetailsForm">
                    <Form.Group>
                        <Form.Label
                            htmlFor="workspaceName"
                            className="companyDetailsLabel"
                        >
                            <span className="companyDetailsLabelSpan">*</span>Workspace Name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="workspaceName"
                            id="workspaceName"
                            className="companyDetailsInput"
                            placeholder="Metric"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="company" className="companyDetailsLabel">
                            <span className="companyDetailsLabelSpan">*</span>Company
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="company"
                            id="company"
                            className="companyDetailsInput"
                            placeholder="Metric"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="position" className="companyDetailsLabel">
                            <span className="companyDetailsLabelSpan">*</span>Position
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="position"
                            id="position"
                            className="companyDetailsInput"
                            placeholder="Director"
                        />
                    </Form.Group>
                    <Button disabled className="companyDetailsButton">
                        Continue
                    </Button>
                </Form>
            </div>
        </div>
    );
};
