import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { Search } from "@mui/icons-material";
import { Avatar, Box, InputAdornment, Typography } from "@mui/material";
import { LangConstant } from "const";
import { DebounceInput, LoginDialog } from "src/components";
import { SidebarContext } from ".";

const UserAccount = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const { searchInput, onChangeSearchInput } = useContext(SidebarContext);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [user, setUser] = useState(INIT_DATA.user);
  const [isOpenLoginForm, setIsOpenLoginForm] = useState(false);

  const onCloseLoginForm = () => {
    setIsOpenLoginForm(false);
  };

  const onOpenLoginForm = () => {
    setIsOpenLoginForm(true);
  };

  return (
    <Box className={classes.root}>
      {isLoggedIn ? (
        <Box></Box>
      ) : (
        <Box className={classes.userDetail}>
          <Avatar className={classes.avatar} />
          <Typography>{getLabel(LangConstant.TXT_LOGIN)}</Typography>
        </Box>
      )}
      <DebounceInput
        fullWidth={true}
        disableUnderline={true}
        value={searchInput}
        onChange={onChangeSearchInput}
        classes={{ root: classes.inputRoot, input: classes.inputElement }}
        placeholder={getLabel(LangConstant.TXT_SEARCH)}
        endAdornment={
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        }
      />
      <LoginDialog open={isOpenLoginForm} onClose={onCloseLoginForm} />
    </Box>
  );
};

export default UserAccount;

const INIT_DATA = {
  user: { name: "", email: "", avatar: "" },
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 16,
    marginBottom: 16,
    borderBottom: "1px solid " + theme.palette.grey[200],
  },

  userDetail: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",
    marginBottom: 16,
  },

  avatar: {
    marginRight: 12,
  },

  inputRoot: {
    backgroundColor: "transparent",
    borderRadius: 8,
    padding: "4px 16px",
    transition: "all linear .2s",
    backgroundColor: theme.palette.grey[800],
  },

  inputElement: {
    color: theme.palette.common.white,
  },
}));
