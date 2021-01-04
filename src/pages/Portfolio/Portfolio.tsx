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
import LinkIcon from "@material-ui/icons/Link";
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
      image: require("../../assets/images/Gosudoku.PNG").default,
      title: "GoSudoku",
      caption: "The ultimate online, multiplayer Sudoku experience",
      description:
        "GoSudoku is a fully-fledged web application for online multiplayer collaborative Sudoku. The application is written using React, Material UI, Redux and Typescript on the front-end, and Python Flask on the backend with a MongoDB database. The application supports single and multiplayer modes, a full authentication system and a friends system.",
      links: [{ link: "https://gosudoku.io", icon: LinkIcon }],
    },
    {
      image: require("../../assets/images/SE101.jpg").default,
      caption: "A tilt-based maze game programmed on a Ti Microcontroller",
      title: "Tilt Maze",
      description:
        "This was my first term software engineering project at Waterloo. We were to implement a project that interfaced with a Ti microcontroller with an Orbit Booster Pack. I leveraged the accelerometer in the Orbit to implement a tilt-based maze game, where a user guides a ball through a base. The maze is generated using the recursive division algorithm.",
      links: [
        {
          link: "https://github.com/SamirRehm/SE101MazeGame",
          icon: GitHubIcon,
        },
      ],
    },
    {
      image: require("../../assets/images/Maze.PNG").default,
      caption: "A maze generation and pathfinding visualizer",
      title: "Maze Generation and Pathfinding",
      description:
        "This project was a maze generation and pathfinding visualizer. The project is implemented in Java, using the Swing library for UI. It currently supports recursive division maze generation and both breadth-first and depth-first searches for pathfinding. The algorithms are animated.",
      links: [{ link: "https://www.google.com", icon: GitHubIcon }],
    },
    {
      image: require("../../assets/images/NHLApp.PNG").default,
      caption:
        "A web application that predicts shot quality in real-time for NHL games",
      title: "NHL Shot Quality",
      description:
        "This project was a maze generation and pathfinding visualizer. The project is implemented in Java, using the Swing library for UI. It currently supports recursive division maze generation and both breadth-first and depth-first searches for pathfinding. The algorithms are animated.",
      links: [{ link: "https://www.google.com", icon: GitHubIcon }],
    },
    {
      image: require("../../assets/images/LZW.PNG").default,
      caption:
        "A text compressor and decompressor that implements the LZW algorithm",
      title: "LZW Text Compressor",
      description:
        "This project was a maze generation and pathfinding visualizer. The project is implemented in Java, using the Swing library for UI. It currently supports recursive division maze generation and both breadth-first and depth-first searches for pathfinding. The algorithms are animated.",
      links: [{ link: "https://www.google.com", icon: GitHubIcon }],
    },
    {
      image: require("../../assets/images/Checkers.PNG").default,
      caption: "A two player checkers game",
      title: "Checkers",
      description:
        "This project was a maze generation and pathfinding visualizer. The project is implemented in Java, using the Swing library for UI. It currently supports recursive division maze generation and both breadth-first and depth-first searches for pathfinding. The algorithms are animated.",
      links: [{ link: "https://www.google.com", icon: GitHubIcon }],
    },
    {
      image: require("../../assets/images/Strava.PNG").default,
      caption:
        "A dashboard that displays personal running statistics. Leverages Strava API.",
      title: "Training Dashboard",
      description:
        "This project was a maze generation and pathfinding visualizer. The project is implemented in Java, using the Swing library for UI. It currently supports recursive division maze generation and both breadth-first and depth-first searches for pathfinding. The algorithms are animated.",
      links: [{ link: "https://www.google.com", icon: GitHubIcon }],
    },
    {
      image: require("../../assets/images/Graph.PNG").default,
      caption: "A two player checkers game",
      title: "Graph Theory Visualizer",
      description: "Visualizer for various graph theory problems",
      links: [
        {
          link: "https://github.com/changangela/graph-theory",
          icon: GitHubIcon,
        },
        { link: "https://changangela.github.io/graph-theory/", icon: LinkIcon },
      ],
    },
    {
      image: require("../../assets/images/Scala.png").default,
      caption: "A two player checkers game",
      title: "Graph Theory Visualizer",
      description: "Visualizer for various graph theory problems",
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
        fullWidth={true}
        maxWidth="md"
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
