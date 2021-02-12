import React from "React";
import { Button} from "@material-ui/core";

const GeneralButton = ({
  children,
  type,
  color,
  variant,
  fullWidth,
  className="",
}) => {
  return (
    <Button
      type={type}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      className={className}
    >
      {children}
    </Button>
  );
};


export default GeneralButton;
