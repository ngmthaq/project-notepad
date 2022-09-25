import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const NoteList = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return <Box>NoteList</Box>;
};

export default NoteList;

const useStyles = makeStyles((theme) => ({}));
