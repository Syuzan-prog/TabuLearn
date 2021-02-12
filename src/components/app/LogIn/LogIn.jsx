import React from "react";
import clsx from "clsx";
import { Grid, Typography} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import GeneralButton from "../../common/GeneralButton";
import GeneralInput from "../../common/GeneralInput";
import GenPassInput from "../../common/GenPassInput";

import globalStyles from "../../../resources/index";
import styles from "./LogIn.module.scss";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  return (
    <div className={styles.containers}>
      <div className={clsx(styles.block, globalStyles.blockContainer)}>
        <Grid align="center">
          <h2 className={styles.title}>Sign In</h2>
          <Typography
            className={clsx(styles.text, globalStyles["font-weight-normal"])}
          >
            Don’t have an account?{" "}
            <NavLink
              to="/SignUp"
              id="createAccount"
              className={clsx(
                globalStyles["text-lightBlue"],
                globalStyles["text-decoration-none"],
                globalStyles["font-weight-500"]
              )}
            >
              Create
            </NavLink>
          </Typography>
        </Grid>
        <form>
          <GeneralInput
            type="email"
            id="logInEmail"
            labelName="email"
            className={styles.input}
            labelWidth={52}
            required
          />
          <Typography className={styles.smolllink}>
            <NavLink
              to="/"
              id="forgotePassword"
              className={clsx(
                globalStyles["text-lightBlue"],
                globalStyles["text-decoration-none"],
                globalStyles["font-size-12"]
              )}
            >
              Forgot password ?
            </NavLink>
          </Typography>
          <GenPassInput
            id="logInPassword"
            labelName="password"
            className={styles.input}
            labelWidth={80}
            required
          />
          <FormControlLabel
            className={styles.chackbox}
            control={
              <Checkbox name="checkedB" className={styles.colorheckbox} />
            }
            label="Remember me"
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
        </form>
      </div>
    </div>
  );
};

export default LogIn;
