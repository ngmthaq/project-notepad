import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { Input } from "@mui/material";

/**
 * inherits [InputBase API](https://mui.com/material-ui/api/input-base/)
 */
const DebounceInput = (props) => {
  const { value, onChange, classes, ...otherProps } = props;

  const [input, setInput] = useState(value);

  const onDebounce = (e) => {
    const { value } = e.target;
    setInput(value);
    onHandleDebounce(e);
  };

  const onHandleDebounce = useCallback(
    debounce((event) => onChange(event), DEBOUNCE_TIME),
    []
  );

  return (
    <Input
      classes={classes}
      value={input}
      onChange={onDebounce}
      {...otherProps}
    />
  );
};

const DEBOUNCE_TIME = 1000;

export default DebounceInput;
