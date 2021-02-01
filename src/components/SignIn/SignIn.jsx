import React from "react";
import {Button, Form} from "react-bootstrap";

import './SignIn.scss';
import logo from '../../assets/icons/clarity_eye-hide-line.svg'

export const SignIn = (props) => {
    return (
        <div className="SignInContainers">
            <div className="SignInBlock">
                <h2 className="SignInTitle">TabuLearn</h2>
                <h3 className="SignInText">
                    Don’t have an account? Create
                </h3>
                <Form className="SignInForm">
                    <Form.Group>
                        <Form.Label htmlFor="SignInEmail" className="SignInLabel">
                            <span className="SignInLabelSpan">*</span>Email
                        </Form.Label>
                        <Form.Control
                            type="email"
                            name="SignInEmail"
                            id="SignInEmail"
                            className="SignInInput"
                            placeholder="you@example.com"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="SignInPassword" className="SignInLabel">
                            <span className="SignInLabelSpan">*</span>Password
                        </Form.Label>
                        <Form.Control
                            type="password"
                            name="SignInPassword"
                            id="SignInPassword"
                            className="SignInInput SignInPlaceholder"
                            placeholder="*****"
                        />
                        <img src={logo} alt="" className="SignInIcon"/>
                    </Form.Group>
                    <Button disabled className="SignInButton">
                        SIgn Up
                    </Button>
                </Form>
            </div>
        </div>
    );
};
