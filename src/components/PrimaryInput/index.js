import React from "react";
import clsx from "clsx";
import { Input } from "@mui/material";
import { makeStyles } from "@mui/styles";

/**
 * inherits [InputBase API](https://mui.com/material-ui/api/input-base/)
 */
const PrimaryInput = ({ classes, ...otherProps }) => {
  const defaultClasses = useStyles();

  return (
    <Input
      classes={{
        root: clsx(defaultClasses.root, classes.root),
        input: clsx(defaultClasses.input, classes.input),
      }}
      {...otherProps}
    />
  );
};

export default PrimaryInput;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    borderRadius: 8,
    padding: "4px 16px",
    backgroundColor: theme.palette.grey[800],
  },

  input: {
    color: theme.palette.common.white,
  },
}));
