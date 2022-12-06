import React from "react";
import {Outlet} from "react-router-dom";
import NavbarHead from "../Navbar";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <NavbarHead />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;