import React from "react";
import {Outlet} from "react-router-dom";
import NavbarHead from "../components/Navbar";
import Footer from "../components/Footer";

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