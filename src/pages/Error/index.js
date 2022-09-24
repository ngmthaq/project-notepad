import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowBack } from "@mui/icons-material";
import { ImageConstant, LangConstant } from "const";
import { vw, vh } from "utils";

const NotFound = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  useEffect(() => {
    console.error("Page not found");
  }, []);

  return (
    <Box className={classes.root}>
      <CardMedia
        component={"img"}
        className={classes.img}
        src={ImageConstant.ErrorImage}
      />
      <Typography variant="h5" className={classes.text}>
        {getLabel(LangConstant.TXT_ERROR)}
      </Typography>
      <Box className={classes.back}>
        <ArrowBack className={classes.icon} />
        <Typography>{getLabel(LangConstant.TXT_BACK)}</Typography>
      </Box>
    </Box>
  );
};

export default NotFound;

const useStyles = makeStyles((theme) => ({
  root: {
    width: vw(100),
    height: vh(100),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  img: {
    width: 200,
    height: 200,
    objectFit: "contain",
  },
  text: {
    marginBottom: 12,
    textAlign: "center",
  },
  icon: {
    marginRight: 4,
  },
  back: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
}));
