import React, { useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { PathConstant } from "const";
import AuthRoute from "./AuthRoute";
import Error from "src/pages/Error";
import Login from "src/pages/Login";
import Home from "src/pages/Home";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={PathConstant.ROOT} element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
