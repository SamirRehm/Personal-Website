import { Grid, Paper, SvgIcon, Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import "./Resume.css";
import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import SchoolIcon from "@material-ui/icons/School";
import WebOutlined from "@material-ui/icons/WebOutlined";

type experience = {
  title: string;
  date: string;
  description: string;
};

type service = {
  title: string;
  description: string;
  icon: typeof SvgIcon;
};

type skill = {
  title: string;
  description: string[];
};

const Resume = () => {
  const passIn = {
    title: "Work Experience",
    icon: WorkIcon,
  };

  const passIn2 = {
    title: "Education",
    icon: SchoolIcon,
  };

  const workExperience: experience[] = [
    {
      title: "Snowflake Computing",
      date: "September - December 2020",
      description:
        "Drafted, designed, implemented, tested and monitored a throttling layer that balances user workload isolation with cost-efficient multitenant resource scheduling.",
    },
    {
      title: "Safe Software",
      date: "January - April 2020",
      description: "dfdfdf hi hi hi hi hi hi hi hi hi hi hihihi",
    },
  ];

  const education: experience[] = [
    {
      title: "Work 1",
      date: "2018 - 2020",
      description:
        "dfdfdf hi hi hi hi hi hi hi hi hi hi hihihi hi hi hi hi hi hi hi hi hi hi hihihi hi hi hi hi hi hi hi hi hi hi hihihi hi hi hi hi hi hi hi hi hi hi hihihi",
    },
    {
      title: "Work 2",
      date: "2018 - 2020",
      description: "dfdfdf hi hi hi hi hi hi hi hi hi hi hihihi",
    },
  ];

  const services: service[] = [
    {
      title: "Distributed Computing",
      description:
        "I have worked in a distributed computing role at Snowflake. I have also taken post-secondary coursework in distributed systems.",
      icon: WebOutlined,
    },
    {
      title: "Machine Learning and Data Science",
      description:
        "I have worked in a distributed computing role at Snowflake. I have also taken post-secondary coursework in distributed systems.",
      icon: WebOutlined,
    },
  ];

  const skills: skill[] = [
    {
      title: "Languages",
      description: ["python", "java"],
    },
    {
      title: "Technologies",
      description: ["Git", "IntelliJ"],
    },
  ];

  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45 pt_37">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and experience */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Professional Background</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            <Grid item sm={12} md={6}>
              <CustomTimeline value={passIn}>
                {workExperience.map((experience) => (
                  <TimelineItem>
                    <TimelineSeparator className="separator_padding">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      ></TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            <Grid item sm={12} md={6}>
              <CustomTimeline value={passIn2}>
                {education.map((edu) => (
                  <TimelineItem>
                    <TimelineSeparator className="separator_padding">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      ></TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {edu.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {edu.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {edu.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {services.map((serv) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <SvgIcon className="service_icon" component={serv.icon} />
                  <Typography className="service_title" variant="h6">
                    {serv.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {serv.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container className="section pb_45 graybg p_50">
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-between">
            {skills.map((ski) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {ski.title}
                  </Typography>
                  {ski.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
