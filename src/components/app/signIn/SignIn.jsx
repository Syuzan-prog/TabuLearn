import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  Container,
} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import signIn from "./SignIn.module.scss";


const SignIn = () => {
  return (
    <Container>
      <Grid className={signIn.containers}>
        <Paper elevation={10} className={signIn.block}>
          <Grid align="center">
            <h2 className={signIn.title}>Sign In</h2>
          <Typography className={signIn.text}>
          Don’t have an account?<Link href="#" className={signIn.linl}> Create</Link>
          </Typography>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" color="primary" variant="contained" fullWidth>
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
        </Paper>
      </Grid>
    </Container>
  );
};

export default SignIn;
