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

  about:
    " Hi! My name is Samir, and I'm a Software Engineering student set to graduate in April 2021 from the University of Waterloo. I've grown up in Chilliwack, Western Canada, before flying east to attend Waterloo. In 2021, I will be returning to the west coast as a full time engineer with Snowflake. In my spare time, I enjoy programming, piano, soccer, tennis, table tennis and I also ran cross-country for Waterloo's team. Please feel free to contact me regarding anything from hobbies to jobs to projects to education!",

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
