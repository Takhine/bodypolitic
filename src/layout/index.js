import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { withRouter } from "react-router";
import TemplateFooter from '../pages/Articles/TemplateFooter'; 
import "../static/styles/main.scss";

const Layout = (props) => {
  const pathName = props.location.pathname;
  return (
    <div>
      <Navbar />
      {props.children}
      {pathName !== "/pain-treatment"? <Footer /> : <TemplateFooter />}
    </div>
  );
};

export default withRouter(Layout);
