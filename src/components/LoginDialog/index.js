import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { Box, Dialog, InputLabel } from "@mui/material";
import { LangConstant } from "const";
import { getRequiredLabel } from "utils";
import PrimaryInput from "../PrimaryInput";

const LoginDialog = ({ open, onClose }) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Dialog open={open} onClose={onClose}>
      <Box component="form" className={classes.formContainer}>
        <Box className={classes.formControl}>
          <InputLabel>
            {getRequiredLabel(getLabel(LangConstant.L_EMAIL))}
          </InputLabel>
          <PrimaryInput />
        </Box>
      </Box>
    </Dialog>
  );
};

export default LoginDialog;

const useStyles = makeStyles((theme) => ({}));
