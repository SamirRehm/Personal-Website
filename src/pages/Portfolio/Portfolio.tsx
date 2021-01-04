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
      title: "Project 1",
      caption: "Short caption",
      description:
        "This is a project hi hi hi hi hi hi hi hi h ih ih ih ihi hi h i",
      links: [{ link: "https://www.google.com", icon: GitHubIcon }],
    },
    {
      image:
        "https://globetrender.com/wp-content/uploads/2020/05/Caribbean-beach.jpg",
      caption: "Short caption",
      title: "Project 2",
      description: "This is a project",
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
        <DialogTitle>{projectDialog?.title}</DialogTitle>
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
