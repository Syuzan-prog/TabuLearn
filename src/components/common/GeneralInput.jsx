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
  className = "",
}) => {
  return (
    <FormControl className={className} variant="outlined">
      <InputLabel htmlFor={id}>
        {required ? <span style={{ color: "red" }}>* </span> : null}
        {labelName}
      </InputLabel>
      <OutlinedInput
        id={id}
        type={type}
        labelWidth={labelWidth}
        required={required ? true : false}
      />
    </FormControl>
  );
};
