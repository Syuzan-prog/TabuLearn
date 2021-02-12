import React from "react";
import clsx from "clsx";
import { Grid, Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { NavLink } from "react-router-dom";

import GeneralButton from "../../common/GeneralButton";
import GeneralInput from "../../common/GeneralInput";
import GenPassInput from "../../common/GenPassInput";

import globalStyles from "../../../resources/index";
import styles from "./CreateNewPassword.module.scss";

const CreateNewPassword = () => {
  return (
    <div className={styles.containers}>
      <div className={clsx(styles.block, globalStyles.blockContainer)}>
        <Grid align="center">
          <h2 className={styles.title}>Create New Password</h2>
        </Grid>
        <form>
          <GenPassInput
            id="createNewPassword"
            labelName="password"
            className={styles.input}
            labelWidth={80}
            required
          />
          <Typography className={styles.text}>
            * Must contain at least 8 characters, a number, a special character,
            an uppercase and a lowercase.
          </Typography>
          <GenPassInput
            id="createConfirmPassword"
            labelName="Confirm Password"
            className={styles.input}
            labelWidth={80}
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
        </form>
      </div>
    </div>
  );
};

export default CreateNewPassword;
