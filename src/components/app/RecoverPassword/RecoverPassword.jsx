import React from "react";
import { Grid, Paper, Typography, Link } from "@material-ui/core";

import { GeneralButton } from "../../common/GeneralButton";
import { GeneralInput } from "../../common/GeneralInput";

import globalStyles from "../../../resources/index";
import styles from "./RecoverPassword.module.scss";
import { NavLink } from "react-router-dom";

const RecoverPassword = () => {
  return (
    <div className={styles.containers}>
      <div className={`${styles.block} ${globalStyles.blockContainer}`}>
        <Grid align="center">
          <h2 className={styles.title}>Recover Password</h2>
          <Typography className={styles.text}>
            We will send you a link to reset the password.
          </Typography>
        </Grid>
        <form>
          <GeneralInput
            type="email"
            id="recoverPasswordEmail"
            labelName="email"
            className={styles.input}
            labelWidth={52}
            required
          />
          <GeneralButton
            type="submit"
            className={styles.button}
            color="primary"
            variant="contained"
            fullWidth
          >
            Sign In
          </GeneralButton>
          <Typography align="center">
            <NavLink href="./LogIn" id="backToLogin" className={styles.textLink}>
              Back to Login
            </NavLink>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
