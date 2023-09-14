import React, { Fragment } from "react";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default Main;
