import React from "react";
import {Button, Form} from "react-bootstrap";

import "./PersonalData.scss";

export const PersonalData = (props) => {
    return (
        <div className="personalDataContainers">
            <div className="personalDataBlock">
                <h2 className="personalDataTitle">TabuLearn</h2>
                <h3 className="personalDataText">
                    Please, write your full name and email to continue.</h3>
                <Form className="personalDataForm">
                    <Form.Group>
                        <Form.Label htmlFor="AuthFirstName" className="personalDataLabel">
                            <span className="personalDataLabelSpan">*</span>First Name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="AuthFirstName"
                            id="AuthFirstName"
                            className="personalDataInput"
                            placeholder="John"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="AuthFirstName" className="personalDataLabel">
                            <span className="personalDataLabelSpan">*</span>Last Name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="AuthLastName"
                            id="AuthLastName"
                            className="personalDataInput"
                            placeholder="Smith"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="AuthEmail" className="personalDataLabel">
                            <span className="personalDataLabelSpan">*</span>Email
                        </Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            id="AuthEmail"
                            className="personalDataInput"
                            placeholder="you@example.com"
                        />
                    </Form.Group>
                    <Button disabled className="personalDataButton">
                        Continue
                    </Button>
                </Form>
            </div>
        </div>
    );
};

