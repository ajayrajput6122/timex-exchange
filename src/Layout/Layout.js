import React from "react";
import Header from "../Pages/Header";
import Footer from '../Pages/Footer'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Layout;
