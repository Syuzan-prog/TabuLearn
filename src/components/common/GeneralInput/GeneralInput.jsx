import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import ThemeBorderColor from "../ThemeBorderColor";

import globalStyles from "../../../resources/index";


const GeneralInput = ({
  id,
  type,
  required,
  labelName,
  labelWidth,
  error = false,
  className = "",
}) => {
  return (
    <FormControl className={className} variant="outlined">
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
          type={type}
          error={error}
          labelWidth={error ? 47 : labelWidth}
          required={required ? true : false}
        />
      </ThemeBorderColor>
    </FormControl>
  );
};

export default GeneralInput;
