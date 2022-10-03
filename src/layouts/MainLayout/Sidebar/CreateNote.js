import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";
import { LangConstant } from "const";

const CreateNote = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Add className={classes.icon} />
        <Typography className={classes.text}>
          {getLabel(LangConstant.TXT_ADD_NEW)}
        </Typography>
      </Box>
      <Settings className={classes.icon} />
    </Box>
  );
};

export default CreateNote;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 30,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px 16px",
  },

  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },

  icon: {
    cursor: "pointer",
  },

  text: {
    marginLeft: 8,
    userSelect: "none",
  },
}));
