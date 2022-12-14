import React, { createContext, Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { AppConstant } from "const";
import { vh } from "utils";
import UserAccount from "./UserAccount";
import NoteList from "./NoteList";
import CreateNote from "./CreateNote";

const Sidebar = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [searchInput, setSearchInput] = useState("");

  const onChangeSearchInput = (e) => {
    const { value } = e.target;
    setSearchInput(value);

    // TODO: Handle search input change
    console.log(value);
  };

  const context = {
    // Properties
    searchInput: searchInput,

    // Methods
    onChangeSearchInput: onChangeSearchInput,
  };

  return (
    <SidebarContext.Provider value={context}>
      <Box className={classes.root}>
        <UserAccount />
        <NoteList />
        <CreateNote />
      </Box>
    </SidebarContext.Provider>
  );
};

export default Sidebar;

export const SidebarContext = createContext();

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    width: AppConstant.ELEMENT_WIDTH.sideBar,
    maxWidth: "30vw",
    height: vh(100),
    padding: 16,
    position: "relative",
  },
}));
