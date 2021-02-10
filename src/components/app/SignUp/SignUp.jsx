import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";

import { GeneralButton } from "../../common/GeneralButton";
import { GeneralInput } from "../../common/GeneralInput";
import { GenPassInput } from "../../common/GenPassInput";

import globalStyles from "../../../resources/index";
import styles from "./SignUp.module.scss";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={styles.containers}>
      <div className={`${styles.block} ${globalStyles.blockContainer}`}>
        <Grid align="center">
          <h2 className={styles.title}>Sign Up </h2>
          <Typography className={styles.text}>
            Already have an account?{" "}
            <NavLink to="/LogIn" id="alreadyAccount">
              Login
            </NavLink>
          </Typography>
        </Grid>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className={styles.padding}>
              <GeneralInput
                type="text"
                labelName="First Name"
                labelWidth={91}
                className={styles.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={styles.padding}>
              <GeneralInput
                type="text"
                labelName="Last Name"
                labelWidth={91}
                className={styles.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={styles.padding}>
              <GeneralInput
                type="text"
                labelName="Company"
                labelWidth={81}
                className={styles.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={styles.padding}>
              <GeneralInput
                type="text"
                labelName="Position"
                labelWidth={72}
                className={styles.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={styles.padding}>
              <GeneralInput
                type="text"
                labelName="Workspace"
                labelWidth={91}
                className={styles.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={styles.padding}>
              <GeneralInput
                type="email"
                labelName="Email Address"
                labelWidth={115}
                className={styles.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={styles.padding}>
              <GenPassInput
                id="SignInPassword"
                labelName="Password"
                className={styles.input}
                required
                labelWidth={80}
              />
              <Typography className={styles.textIncorrect}>
                * Must contain at least 8 characters, a number, a special
                character, an uppercase and a lowercase.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={styles.padding}>
              <GenPassInput
                id="signInconfirmPassword"
                labelName="Confirm Password"
                className="styles.passwordInput"
                required
                labelWidth={140}
                className={styles.input}
              />
            </Grid>
          </Grid>
          <Grid align="center" className={styles.marginTop}>
            <GeneralButton
              type="submit"
              className={styles.button}
              color="primary"
              variant="contained"
              fullWidth
            >
              SIGN UP
            </GeneralButton>
            <Typography className={styles.textIncorrect}>
              By signing up, I agree to TabuLearn’s
            </Typography>
            <Typography className={styles.textIncorrect}>
              <Link href="#" id="termsConditions">
                Terms and Conditions.
              </Link>
            </Typography>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
