import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { SvgIcon } from "@material-ui/core";

import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import { HomeRounded } from "@material-ui/icons";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import "./Header.css";

interface HeaderProps extends RouteComponentProps {}

type social = {
  link: string;
  text: string;
  icon: typeof SvgIcon;
};
/** Make the header bar sticky */
class Header extends Component<HeaderProps> {
  render() {
    let scores: { [key: string]: social } = {
      Facebook: {
        text: "samir.rehmtulla",
        link: "https://www.facebook.com/samir.rehmtulla",
        icon: FacebookIcon,
      },
      LinkedIn: {
        link: "https://www.linkedin.com/in/samirrehm/",
        text: "samirrehm",
        icon: LinkedInIcon,
      },
      GitHub: {
        link: "https://github.com/SamirRehm",
        text: "SamirRehm",
        icon: GitHubIcon,
      },
    };

    var y = Object.keys(scores).map((key) => (
      <a title={key} href={scores[key].link} target="_blank">
        <SvgIcon component={scores[key].icon} />{" "}
      </a>
    ));

    const pathName = this.props?.location?.pathname;
    return (
      <Navbar expand="lg" className="header">
        <Nav.Link as={NavLink} to="/" className="header_navlink">
          <Navbar.Brand className="header_home">
            <HomeRounded />
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="header_left">
            <Nav.Link
              as={NavLink}
              to="/"
              className={
                pathName === "/" ? "header_link_active" : "header_link"
              }
            >
              RESUME
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/portfolio"
              className={
                pathName === "/portfolio" ? "header_link_active" : "header_link"
              }
            >
              PORTFOLIO
            </Nav.Link>
          </Nav>
          <div className="header_right">{y}</div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default withRouter(Header);
