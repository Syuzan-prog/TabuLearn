import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export const GeneralInput = ({
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
      <InputLabel htmlFor={id}>
        {required ? <span style={{ color: "red" }}>* </span> : null}
        {error ? <span style={{ color: "red" }}>Error </span> : labelName}
      </InputLabel>
      <OutlinedInput
        id={id}
        name={id}
        type={type}
        error={error}
        labelWidth={error ? 47 : labelWidth}
        required={required ? true : false}
      />
    </FormControl>
  );
};
