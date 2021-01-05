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
        "GoSudoku is a fully-fledged web application for online multiplayer collaborative Sudoku. The application is written using React, Material UI, Redux and Typescript on the front-end, and Python Flask on the backend with a MongoDB database. WebSocket technology is used for the real-time communication in multiplayer games. The application supports single and multiplayer modes, a full authentication system and a friends system.",
      links: [{ link: "https://gosudoku.io", icon: LinkIcon }],
    },
    {
      image: require("../../assets/images/SE101.jpg").default,
      caption: "A tilt-based maze game programmed on a Ti Microcontroller",
      title: "Tilt Maze",
      description:
        "This was my first term software engineering project at Waterloo. We were to implement a project that interfaced with a Ti C microcontroller with an Orbit Booster Pack. I leveraged the accelerometer in the Orbit to implement a tilt-based maze game, where a user guides a ball through a base. The maze is generated using the recursive division algorithm.",
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
      links: [
        {
          link:
            "https://github.com/SamirRehm/Pathfinding-and-Maze-Generation-Visualizer",
          icon: GitHubIcon,
        },
      ],
    },
    {
      image: require("../../assets/images/NHLApp.PNG").default,
      caption:
        "A web application that predicts shot quality in real-time for NHL games",
      title: "NHL Shot Quality",
      description:
        "This project was an NHL real-time game visualizer, that also included a machine learning model to predict shot quality. The visualizer would display on ice events on a rink as they happened, and list them in a table. I implemented two shot predictor models that performed similarly; one with logistic regression and one with XGBoost. The shot quality model did a good job of identifying high scoring chances, giving a mean goal probability of 15.2% to shots that were goals and a probability of around 7% to shots that were saved. Features included shot type, distance from the goal and angle with the goal. This entire project was implemented in R, using the Shiny framework to turn it into a web appliation",
      links: [
        { link: "https://github.com/SamirRehm/NHLData", icon: GitHubIcon },
        { link: "https://samirrehm.shinyapps.io/NHLData/", icon: LinkIcon },
      ],
    },
    {
      image: require("../../assets/images/LZW.PNG").default,
      caption:
        "A text compressor and decompressor that implements the LZW algorithm",
      title: "LZW Text Compressor",
      description:
        "This project was implemented in Java. I implemented the LZW algorithm for compression. This algorithm was tested by round-trip encoding and decoding a plain text version of Harry Potter. The compressed file was 39% smaller than the original",
      links: [
        {
          link: "https://github.com/SamirRehm/LZWTextCompressor",
          icon: GitHubIcon,
        },
      ],
    },
    {
      image: require("../../assets/images/Checkers.PNG").default,
      caption: "A two player checkers game",
      title: "Checkers",
      description:
        "Checkers. Implemented in python using the pygame module. Can't be simpler than that",
      links: [
        { link: "https://github.com/SamirRehm/Checkers", icon: GitHubIcon },
      ],
    },
    {
      image: require("../../assets/images/Strava.PNG").default,
      caption:
        "A dashboard that displays personal running statistics. Leverages Strava API.",
      title: "Training Dashboard",
      description:
        "This web application was written entirely in R using plotly and the Shiny framework. It uses the Strava API to get running and exercise data for a user and yields informative charts in a dashboard. The activity stats section allows for more in depth statistics about a specific run/activity including pace, distance, interval paces, and GPS raw data. The app no longer works due to some Strava API changes, may refactor it and republish it online.",
      links: [{ link: "https://www.google.com", icon: GitHubIcon }],
    },
    {
      image: require("../../assets/images/Graph.PNG").default,
      caption: "Visualizer for various graph theory problems",
      title: "Graph Theory Visualizer",
      description:
        "A graph theory visualizer written in JavaScript. The visualizer allows a user to create a weighted undirected graph, and then visualize algorithms on it. The platform supports finding bipartitions if they exist, finding minimum colourings, finding the shortest path between two nodes (Djikstra's algorithm), finding Eulerian and Hamiltonian circuits and finding minimum spanning trees. The screenshot shows finding a 5-colouring for the given graph.",
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
      caption:
        "A compiler that parses a subset of Scala into MIPS machine language",
      title: "Scala to MIPS compiler",
      description:
        "A compiler that compiles a subset of Scala into MIPS. Implemented variables, type safety, conditions, loops, functions, garbage collection (using Cheney's algorithm for GC) and tail call recursion optimization.",
      links: [],
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
