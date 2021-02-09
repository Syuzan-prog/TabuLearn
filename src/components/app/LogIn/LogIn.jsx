import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Link,
  Container,
  Box,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { GeneralButton } from "../../common/GeneralButton";
import { GeneralInput } from "../../common/GeneralInput";
import { GenPassInput } from "../../common/GenPassInput";

import style from "./LogIn.module.scss";

const LogIn = () => {
  return (
    <Container>
      <Box className={style.containers}>
        <Paper elevation={2} className={style.block}>
          <Grid align="center">
            <h2 className={style.title}>Sign In</h2>
            <Typography className={style.text}>
              Don’t have an account?{" "}
              <Link href="#" id="createAccount">
                Create
              </Link>
            </Typography>
          </Grid>
          <GeneralInput
            labelName="email"
            type="email"
            labelWidth={52}
            id="outlined-basic"
            className={style.input}
            required
          />
          <Typography className={style.marginLink}>
            <Link href="#" id="forgotePassword">
              Forgot password ?
            </Link>
          </Typography>
          <GenPassInput
            id="LogInPassword"
            labelName="password"
            className="style.passwordInput"
            required
            labelWidth={80}
          />
          <FormControlLabel
            className={style.marginChackbox}
            control={
              <Checkbox name="checkedB" className={style.colorheckbox} />
            }
            label="Remember me"
          />
          <GeneralButton
            className={style.button}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Sign In
          </GeneralButton>
        </Paper>
      </Box>
    </Container>
  );
};

export default LogIn;
