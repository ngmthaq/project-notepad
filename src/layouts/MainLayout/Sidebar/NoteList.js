import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Format from "string-format";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { AppConstant, LangConstant } from "const";
import { vh } from "utils";

const NoteList = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [noteList, setNoteList] = useState(MOCK_DATA);
  const [activeNoteItem, setActiveNoteItem] = useState(null);

  const onClickNoteItem = (item) => {
    setActiveNoteItem(item.id);
  };

  return (
    <Box className={classes.noteListContainer}>
      {noteList.length > 0 ? (
        noteList.map((noteItem) => (
          <NoteItem
            data={noteItem}
            key={noteItem.id}
            isActive={noteItem.id === activeNoteItem}
            onClick={onClickNoteItem}
          />
        ))
      ) : (
        <Typography className={classes.emptyNoteList}>
          {getLabel(LangConstant.TXT_EMPTY_NOTE)}
        </Typography>
      )}
    </Box>
  );
};

export default NoteList;

const MOCK_DATA = [
  {
    id: 1,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 2,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 3,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 4,
    title: "Lorem ispum dolor dos message.",
  },

  {
    id: 5,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 6,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 7,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 8,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 9,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 10,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 11,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 111,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 112,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 113,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 114,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 115,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 116,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 117,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 118,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 119,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 1111,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 1122,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 1133,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 1144,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 1155,
    title: "Lorem ispum dolor dos message.",
  },
  {
    id: 1166,
    title: "Lorem ispum dolor dos message.",
  },
];

const NoteItem = ({ data, isActive, onClick }) => {
  const classes = useStyles();

  return (
    <Box
      title={data.title}
      onClick={() => onClick(data)}
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

  noteListContainer: {
    height: vh(100, 200),
    overflowY: "hidden",
    "&:hover": {
      overflowY: "scroll",
    },
  },

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
    "&:last-child": {
      marginBottom: 0,
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
