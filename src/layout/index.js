import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../static/styles/main.scss";

const Layout = (props) => (
  <div>
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
