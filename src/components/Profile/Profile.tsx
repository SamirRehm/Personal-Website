import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

import resumeData from "../../utils/resumeData";

import "./Profile.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

type CustomTimelineItemProps = {
  title: string;
  text: string;
  link?: string;
};

type social = {
  link: string;
  text: string;
};

export const CustomTimelineItem = ({
  title,
  text,
  link,
}: CustomTimelineItemProps) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}:</span>{" "}
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Profile = () => {
  const passIn = {
    title: "",
    icon: PersonOutlineOutlinedIcon,
  };

  const passInButton = {
    text: "Resume",
    icon: GetAppIcon,
    target: "/resume.pdf",
  };
  const passInButton2 = {
    text: "Transcript",
    icon: GetAppIcon,
    target: "/Transcript.pdf",
  };
  const passInButton3 = {
    text: "Coop Performance",
    icon: GetAppIcon,
    target: "/WTR.pdf",
  };

  let scores: { [key: string]: social } = {
    Facebook: {
      text: "samir.rehmtulla",
      link: "https://www.facebook.com/samir.rehmtulla",
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/samirrehm/",
      text: "samirrehm",
    },
    GitHub: {
      link: "https://github.com/SamirRehm",
      text: "SamirRehm",
    },
  };
  var y = Object.keys(scores).map((key) => (
    <CustomTimelineItem
      title={key}
      text={scores[key].text}
      link={scores[key].link}
    ></CustomTimelineItem>
  ));
  console.log(y);
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img
          src={require("../../assets/images/Rehmtulla_S.jpg").default}
          alt=""
        />
      </figure>

      <div className="profile_information">
        <CustomTimeline value={passIn}>
          <CustomTimelineItem
            title="Name"
            text={resumeData.name}
          ></CustomTimelineItem>
          <CustomTimelineItem
            title="Title"
            text={resumeData.title}
          ></CustomTimelineItem>
          <CustomTimelineItem
            title="Email"
            text={resumeData.email}
          ></CustomTimelineItem>
          {y}
        </CustomTimeline>
        <div className="button_container">
          <CustomButton value={passInButton} />
        </div>
        <div className="button_container">
          <CustomButton value={passInButton2} />
        </div>
        <div className="button_container">
          <CustomButton value={passInButton3} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
