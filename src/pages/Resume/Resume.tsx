import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline from "../../components/Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import "./Resume.css";
import Icon from "@material-ui/core/Icon";
import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import SchoolIcon from "@material-ui/icons/School";

type experience = {
  title: string;
  date: string;
  description: string;
};

type service = {
  title: string;
  description: string;
  icon: string;
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
    title:
      "Education - UWaterloo, Bachelor of Software Engineering - GPA: 94.39",
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
      description:
        "Implemented performant readers and writers to add read and write support to the Feature Manipulation Engine (FME) for Microsoft DirectDraw Surface (DDS) and Mapbox Vector Tile (MVT) file formats.",
    },
    {
      title: "Wish",
      date: "May - August 2019",
      description:
        "Designed and implemented a 3-step (TF-IDF, Gradient Boosting, Logistic Regression) machine learning pipeline to classify misleading products on the platform. Also migrated the company's main analytics dashboard from Looker to Tableau.",
    },
    {
      title: "Kik",
      date: "September - December 2018",
      description:
        "Built a Spark gradient-boosted tree model to flag spam users in real-time, seconds after account creation. Designed a hyperparameter tuning framework for existing models and set up SQL-driven dashboards.",
    },
    {
      title: "RocScience",
      date: "January - April 2018",
      description:
        "Implemented automatic surface parameterization of arbitrary 3D tunnel mesh geometries to allow clients to apply boundary conditions at discrete intervals on tunnel models.",
    },
    {
      title: "Loblaw Digital",
      date: "May - August 2017",
      description:
        'Implemented backend endpoints for new "Store Locator" page with automated tests, mocking necessary web services',
    },
  ];

  const education: experience[] = [
    {
      title: "Fourth year",
      date: "May 2020 - April 2021",
      description:
        "Relevant courses: ECE 459 (Programming for Performance), CS 486 (Artificial Intelligence), SE 491 (Design Project II), ECE 454 (Distributed Computing), CS 458 (Computer Security and Privacy), ECE 358 (Networks)",
    },
    {
      title: "Third year",
      date: "January - December 2019",
      description:
        "Relevant courses: CS 343 (Concurrent and Parallel Programming), CS 348 (Databases), SE 380 (Feedback Control), SE 464 (Software Architecture), CS 341 (Algorithms), CS 349 (User Interfaces), SE 350 (Operating Systems), SE 465 (Testing)",
    },
    {
      title: "Second year",
      date: "September 2017 - August 2018",
      description:
        "Relevant courses: CS 240 (Data Structures), CS 247 (Software Engineering), MATH 239 (Combinatorics), CS 241 (Compilers), ECE 222 (Digital Computers), SE 212 (Logic)",
    },
    {
      title: "First year",
      date: "September 2016 - April 2017",
      description:
        "Relevant courses: CS 137 (Programming Principles), CS 138 (Data structures and Abstraction), MATH 135 (Proofs), ECE 105/106 (Electrical Engineering Physics), MATH 117/119 (Engineering Calculus)",
    },
  ];

  const services: service[] = [
    {
      title: "Distributed Computing",
      description:
        "I worked in a distributed computing role at Snowflake. I have also completed coursework in distributed systems.",
      icon: "/2301714-200.svg",
    },
    {
      title: "ML and Data Science",
      description:
        "I have completed multiple data science internships and have pursued independent studies in machine learning.",
      icon: "/data.svg",
    },
    {
      title: "Backend development",
      description:
        "I'm familiar with many backend frameworks and languages and I wrote the backend for gosudoku.io",
      icon: "/2166796.svg",
    },
  ];

  const skills: skill[] = [
    {
      title: "Languages",
      description: [
        "Java",
        "Python",
        "C++",
        "C",
        "R",
        "C#",
        "Scala",
        "Go",
        "HTML/CSS",
        "TypeScript",
      ],
    },
    {
      title: "Frameworks and Libraries",
      description: [
        "Java Concurrency",
        "Apache Thrift",
        "Hadoop",
        "Apache Zookeeper",
        "Tensorflow and Keras",
        "OpenCV",
        "Sci-kit Learn",
        "Flask",
        "ReactJS",
        "Node.js",
      ],
    },
    {
      title: "Tools and Technologies",
      description: [
        "Git",
        "SQL",
        "IntelliJ",
        "Pycharm",
        "CLion",
        "Visual Studio",
        "RStudio",
        "MongoDB",
      ],
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
          <h6 className="section_title_text">Skills</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {services.map((serv) => (
              <Grid item xs={12} sm={6} md={4}>
                <div className="service">
                  <Icon>
                    <img className="service_icon" src={serv.icon} />
                  </Icon>
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
              <Grid item xs={12} sm={6} md={4}>
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
