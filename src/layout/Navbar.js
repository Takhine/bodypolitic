import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";

import {
  Toolbar,
  AppBar,
  useScrollTrigger,
  Slide,
  useMediaQuery,
} from "@material-ui/core";
import { Menu, Button, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";
import CovidModal from "../modals/CovidModal";
import CommunityModal from "../modals/CommunityModal";

// Images
import logo from "../static/images/logo.png";
import menu from "../static/images/icons/menu-icon.svg";

const HideonScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger} elevation={2}>
      {children}
    </Slide>
  );
};

const Navbar = (props) => {
  const [navBackground, setNavBackground] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [covidModal, setCovid] = useState(false);
  const [communityModal, setComm] = useState(false);

  const mobileMenu = useMediaQuery("(min-width: 1200px)");

  const pathName = props.location.pathname;
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 60;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showDrawer = () => {
    setDrawer(true);
  };

  const hideDrawer = () => {
    setDrawer(false);
  };

  const showCovid = () => {
    setCovid(true);
  };

  const hideCovid = () => {
    setCovid(false);
  };

  const showComm = () => {
    setComm(true);
  };

  const hideComm = () => {
    setComm(false);
  };
  return (
    <React.Fragment>
      <HideonScroll {...props}>
        <AppBar
          position="fixed"
          style={{ backgroundColor: "white", transition: "1s ease" }}
          id="navbar"
        >
          <Toolbar className="toolbar">
            <NavLink exact to="/">
              <img className="logo" src={logo} alt="Body Politic Acupunture" />
            </NavLink>
            <div className="grow" />
            {mobileMenu ? (
              <NavMenu
                showCovid={showCovid}
                hideCovid={hideCovid}
                showComm={showComm}
                hideComm={hideComm}
              />
            ) : (
              <img
                onClick={() => showDrawer()}
                width={25}
                src={menu}
                alt="Body Politic"
              />
            )}
            {mobileMenu && <div className="grow" />}
            {mobileMenu && (
              <a
                href="https://bodypolitic.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="consultation-button">
                  Free Consultation
                </Button>
              </a>
            )}
          </Toolbar>
        </AppBar>
      </HideonScroll>
      <Drawer
        className="sidebar"
        title="Explore"
        placement="right"
        closable={true}
        onClose={hideDrawer}
        visible={drawer}
        style={{ zIndex: "2000" }}
        headerStyle={{ border: "none" }}
      >
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={[`${pathName}`]}
          mode="inline"
          theme="light"
        >
          <Menu.Item key="/" onClick={() => hideDrawer()}>
            <NavLink exact to="/" activeClassName="selected">
              <p className="link">Home</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/about-us" onClick={() => hideDrawer()}>
            <NavLink exact to="/about-us" activeClassName="selected">
              <p className="link">About</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/services" onClick={() => hideDrawer()}>
            <NavLink exact to="/services" activeClassName="selected">
              <p className="link">Services</p>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/videos" activeClassName="selected" onClick={() => hideDrawer()}>
            <NavLink exact to="/videos">
              <p className="link">Videos</p>
            </NavLink>
          </Menu.Item>
          {/*<Menu.Item
            key="/Community"
            onClick={() => {
              hideDrawer();
              showComm();
            }}
          >
            <a className="link">Community</a>
          </Menu.Item>*/}
          <Menu.Item
            key="/Consultation"
            onClick={() => {
              hideDrawer();
            }}
          >
            <a
              href="https://bodypolitic.janeapp.com/"
              target="blank"
              rel="noopener noreferrer"
              style={{ color: "#141D4C", fontWeight: "600" }}
              className="link"
            >
              Free Consultation
            </a>
          </Menu.Item>
          <Menu.Item
            key="/Covid-19"
            onClick={() => {
              hideDrawer();
              showCovid();
            }}
          >
            <p style={{ color: "#DEB722" }} className="link">
              Covid-19
            </p>
          </Menu.Item>
        </Menu>
      </Drawer>
      <CovidModal visible={covidModal} hideCovid={hideCovid} />
      <CommunityModal visible={communityModal} hideComm={hideComm} />
    </React.Fragment>
  );
};

export default withRouter(Navbar);
