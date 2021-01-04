import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import React, { useState } from "react";
import "./Portfolio.css";

type projectLink = {
  link: string;
  icon: typeof SvgIcon;
};

type project = {
  title: string;
  image: string;
  caption: string;
  description: string;
  links: projectLink[];
};

const Portfolio = () => {
  const projects = [
    {
      image:
        "https://globetrender.com/wp-content/uploads/2020/05/Caribbean-beach.jpg",
      title: "GoSudoku",
      caption: "The ultimate online, multiplayer Sudoku experience",
      description:
        "GoSudoku is a fully-fledged web application for online multiplayer collaborative Sudoku. The application is written using React, Material UI, Redux and Typescript on the front-end, and Python Flask on the backend with a MongoDB database. The application supports single and multiplayer modes, a full authentication system and a friends system.",
      links: [{ link: "https://www.google.com", icon: GitHubIcon }],
    },
    {
      image:
        "https://globetrender.com/wp-content/uploads/2020/05/Caribbean-beach.jpg",
      caption: "A tilt-based maze game programmed on a Ti Microcontroller",
      title: "Tilt Maze",
      description:
        "This was my first term software engineering project at Waterloo. We were to implement a project that interfaced with a Ti microcontroller with an Orbit Booster Pack. I leveraged the accelerometer in the Orbit to implement a tilt-based maze game, where a user guides a ball through a base. The maze is generated using the recursive division algorithm.",
      links: [{ link: "https://www.google.com", icon: GitHubIcon }],
    },
    {
      image:
        "https://globetrender.com/wp-content/uploads/2020/05/Caribbean-beach.jpg",
      caption: "A maze generation and pathfinding visualizer",
      title: "Maze generation and pathfinding",
      description: "A maze generation and pathfinding visualizer",
      links: [{ link: "https://www.google.com", icon: GitHubIcon }],
    },
  ];

  const [projectDialog, setProjectDialog] = useState<project | null>(null);

  return (
    <Grid container className="section pb_45 pt_37">
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {projects.map((proj) => (
            <Grid item xs={12} sm={6} md={4}>
              <Grow in timeout={600}>
                <Card
                  className="custom_card"
                  onClick={() => setProjectDialog(proj)}
                >
                  <CardActionArea>
                    <CardMedia
                      className="custom_card_image"
                      image={proj.image}
                      title={proj.title}
                    />
                    <CardContent>
                      <Typography
                        variant={"body2"}
                        className="custom_card_title"
                      >
                        {proj.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="custom_card_caption"
                      >
                        {proj.caption}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Dialog
        open={projectDialog !== null}
        onClose={() => setProjectDialog(null)}
        className="project_dialog"
      >
        <DialogTitle className="project_dialog_title">
          {projectDialog?.title}
        </DialogTitle>
        <img
          src={projectDialog?.image}
          alt=""
          className="project_dialog_image"
        />
        <DialogContent>
          <Typography className="project_dialog_description">
            {projectDialog?.description}
          </Typography>
        </DialogContent>
        <DialogActions className="project_dialog_actions">
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target="_blank" className="project_dialog_icon">
              <SvgIcon component={link.icon} />
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
