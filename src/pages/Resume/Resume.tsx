import { Grid, Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import "./Resume.css";
import WorkIcon from "@material-ui/icons/Work";

const Resume = () => {
  const passIn = {
    title: "Work Experience",
    icon: WorkIcon,
  };
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45">
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
          <Grid container>
            <Grid item sm={12} md={6}>
              <CustomTimeline value={passIn} />
            </Grid>
            <Grid item sm={12} md={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
