import React, { createContext, Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { AppConstant } from "const";
import { vh } from "utils";
import UserAccount from "./UserAccount";
import Categories from "./Categories";
import NoteList from "./NoteList";

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
        <Categories />
        <NoteList />
      </Box>
    </SidebarContext.Provider>
  );
};

export default Sidebar;

export const SidebarContext = createContext();

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[900],
    width: AppConstant.ELEMENT_WIDTH.sideBar,
    maxWidth: "30vw",
    height: vh(100),
    padding: 16,
  },
}));
