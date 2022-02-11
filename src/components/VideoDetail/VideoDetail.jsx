import React, { Component } from "react";
import { Paper, Box, Typography } from "@material-ui/core";
import useStyles from "./style";
const VideoDetail = ({ firstVideo }) => {
  const classes = useStyles();
  if (!firstVideo) {
    return <div>....Loading</div>;
  }
  const target = firstVideo.id.videoId;
  const {
    snippet: { title, description },
  } = firstVideo;
  const url = `https://www.youtube.com/embed/${target}`;
  return (
    <Box className={classes.spacing}>
      <Paper elevation={6} className={classes.dimension}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="video player"
          src={url}
        />
      </Paper>
      <Paper elevation={6} className={classes.spacing}>
        <Typography variant="h6">
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {description}
        </Typography>
      </Paper>
    </Box>
  );
};

export default VideoDetail;
