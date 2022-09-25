import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const Categories = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return <Box>Categories</Box>;
};

export default Categories;

const useStyles = makeStyles((theme) => ({}));
