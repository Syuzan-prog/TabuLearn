import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Link,
  Box,
} from "@material-ui/core";

import { GeneralButton } from "../../common/GeneralButton";
import { GeneralInput } from "../../common/GeneralInput";
import { GenPassInput } from "../../common/GenPassInput";

import style from "./SignUp.module.scss";

const SignUp = () => {
  return (
    <Container>
      <Box className={style.containers}>
        <Paper elevation={2} className={style.block}>
          <Grid align="center">
            <h2 className={style.title}>Sign Up </h2>
            <Typography className={style.text}>
              Already have an account?{" "}
              <Link href="#" id="alreadyAccount">
                Login
              </Link>
            </Typography>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className={style.padding}>
              <GeneralInput
                labelName="First Name"
                type="text"
                labelWidth={91}
                className={style.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={style.padding}>
              <GeneralInput
                labelName="Last Name"
                type="text"
                labelWidth={91}
                className={style.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={style.padding}>
              <GeneralInput
                labelName="Company"
                type="text"
                labelWidth={81}
                className={style.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={style.padding}>
              <GeneralInput
                labelName="Position"
                type="text"
                labelWidth={72}
                className={style.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={style.padding}>
              <GeneralInput
                labelName="Workspace"
                type="text"
                labelWidth={91}
                className={style.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={style.padding}>
              <GeneralInput
                labelName="Email Address"
                type="email"
                labelWidth={114}
                className={style.input}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} className={style.padding}>
              <GenPassInput
                id="SignInPassword"
                labelName="Password"
                className="style.passwordInput"
                required
                labelWidth={80}
              />
              <Typography className={style.textIncorrect}>
                * Must contain at least 8 characters, a number, a special
                character, an uppercase and a lowercase.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={style.padding}>
              <GenPassInput
                id="signInconfirmPassword"
                labelName="Confirm Password"
                className="style.passwordInput"
                required
                labelWidth={140}
              />
            </Grid>
          </Grid>
          <Grid align="center" className={style.marginTop}>
            <GeneralButton
              className={style.button}
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
            >
              SIGN UP
            </GeneralButton>
            <Typography className={style.textIncorrect}>
              By signing up, I agree to TabuLearn’s
            </Typography>
            <Typography className={style.textIncorrect}>
              <Link href="#" id="termsConditions">
                Terms and Conditions.
              </Link>
            </Typography>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default SignUp;
