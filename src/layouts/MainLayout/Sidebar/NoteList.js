import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Format from "string-format";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { AppConstant, LangConstant } from "const";

const NoteList = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [noteList, setNoteList] = useState(MOCK_DATA);
  const [activeNoteItem, setActiveNoteItem] = useState(1);

  return noteList.length > 0 ? (
    <Box className={classes.noteListContainer}>
      {noteList.map((noteItem) => (
        <NoteItem
          data={noteItem}
          key={noteItem.id}
          isActive={noteItem.id === activeNoteItem}
        />
      ))}
    </Box>
  ) : (
    <Typography className={classes.emptyNoteList}>
      {getLabel(LangConstant.TXT_EMPTY_NOTE)}
    </Typography>
  );
};

export default NoteList;

const MOCK_DATA = [
  {
    id: 1,
    title:
      "Lorem ispum dolor dos message. Lorem ispum dolor dos message. Lorem ispum dolor dos message.",
  },
  {
    id: 2,
    title:
      "Lorem ispum dolor dos message. Lorem ispum dolor dos message. Lorem ispum dolor dos message.",
  },
];

const NoteItem = ({ data, isActive }) => {
  const classes = useStyles();

  return (
    <Box
      title={data.title}
      className={clsx(classes.noteItem, { [classes.activeNoteItem]: isActive })}
      id={Format(AppConstant.ELEMENT_ID.sidebarNoteItem, { id: data.id })}
    >
      <Menu className={classes.menuIcon} />
      <Typography className={clsx("ellipsis", classes.noteTitle)}>
        {data.title}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  emptyNoteList: {
    color: theme.palette.grey[600],
    userSelect: "none",
  },

  noteListContainer: {},

  noteItem: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
    transition: "all .1s linear",
    "&:hover": {
      backgroundColor: theme.palette.grey[800],
    },
  },

  activeNoteItem: {
    backgroundColor: theme.palette.grey[700],
    "&:hover": {
      backgroundColor: theme.palette.grey[700],
    },
  },

  menuIcon: {
    marginRight: 16,
  },

  noteTitle: {
    maxWidth: 250,
  },
}));
