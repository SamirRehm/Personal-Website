import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default {
  name: "Samir Rehmtulla",
  title: "Software Engineer",

  birthday: "March 16th 1998",
  email: "srehmt@gmail.com",
  phone: "226-792-3535",

  socials: {
    facebook: {
      link: "https://www.facebook.com/samir.rehmtulla",
      text: "Samir Rehmtulla",
      icon: <FacebookIcon />,
    },
    linkedIn: {
      link: "https://www.linkedin.com/in/samirrehm/",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },
    github: {
      link: "https://github.com/SamirRehm",
      text: "Github",
      icon: <GitHubIcon />,
    },
  },
};
