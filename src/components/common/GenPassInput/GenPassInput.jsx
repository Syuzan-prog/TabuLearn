import React from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import ThemeBorderColor from "../ThemeBorderColor";

import globalStyles from "../../../resources/index";

const GenPassInput = ({
  id,
  required,
  labelName,
  labelWidth,
  error = false,
  className = "",
}) => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined" className={className}>
      <ThemeBorderColor>
        <InputLabel htmlFor={id}>
          {required ? (
            <span className={globalStyles["text-red"]}>* </span>
          ) : null}
          {error ? (
            <span className={globalStyles["text-red"]}>Error </span>
          ) : (
            labelName
          )}
        </InputLabel>
        <OutlinedInput
          id={id}
          name={id}
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          name="password"
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={error ? 47 : labelWidth}
          error={error}
          required={required ? true : false}
        />
      </ThemeBorderColor>
    </FormControl>
  );
};

export default GenPassInput;
