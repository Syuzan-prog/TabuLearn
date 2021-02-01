import React from "react";
import {Button, Form} from "react-bootstrap";

import './Password.scss';
import logo from '../../assets/icons/clarity_eye-hide-line.svg'

export const Password = (props) => {
    return (
        <div className="passwordContainers">
            <div className="passwordBlock">
                <h2 className="passwordTitle">TabuLearn</h2>
                <h3 className="passwordText">
                    Great, only one step left, create password and welcome to you account.
                </h3>
                <Form className="passwordForm">
                    <Form.Group>
                        <Form.Label htmlFor="password" className="passwordLabel">
                            <span className="passwordLabelSpan">*</span>New password
                        </Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            id="password"
                            className="passwordInput"
                            placeholder="Password(min. 8 characters)"
                        />
                        <img src={logo} alt="" className="passwordIcon"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="confirmPassword" className="passwordLabel">
                            <span className="passwordLabelSpan">*</span>Confirm Password
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="confirmPassword"
                            id="confirmPassword"
                            className="passwordInput"
                            placeholder="*****"
                        />
                        <img src={logo} alt="" className="passwordIcon"/>
                    </Form.Group>
                    <Button disabled className="passwordButton">
                        SIgn Up
                    </Button>
                    <Form.Text className="text-muted passwordFormText ">
                        By signing up, I agree to TabuLearn’s <br/>
                        <a href="/">Terms and Conditions.</a>
                    </Form.Text>
                </Form>
            </div>
        </div>
    );
};
