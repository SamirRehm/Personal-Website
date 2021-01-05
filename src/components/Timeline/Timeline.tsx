import React, { Component } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import "./Timeline.css";
import { Typography, SvgIcon } from "@material-ui/core";

type TimelineProps = {
  value: {
    title: string;
    icon: typeof SvgIcon;
  };
};

class CustomTimeline extends Component<TimelineProps> {
  render() {
    const { value } = this.props;
    return (
      <Timeline className={"timeline"}>
        {/** Item header */}
        <TimelineItem className={"timeline_firstItem"}>
          <TimelineSeparator>
            <TimelineDot className={"timeline_dot_header"}>
              <SvgIcon component={value.icon} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={"timeline_header"}>{value.title}</Typography>
          </TimelineContent>
        </TimelineItem>
        {this.props.children}
        {/** Remaining items */}
        {/**<TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>*/}
      </Timeline>
    );
  }
}

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={"separator_padding"}>
    <TimelineDot variant="outlined" className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeline;
