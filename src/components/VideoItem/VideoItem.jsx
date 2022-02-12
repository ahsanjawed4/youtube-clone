import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import useStyles from "./style";
const VideoItem = ({ videoItems }) => {
  const classes = useStyles();
  const listOfVideos = videoItems.map((video, id) => {
    return (
      <div key={id}>
        <h1>ahsan jawed</h1>
      </div>
    );
  });
  return (
    <Box className={classes.videoSpacing} sx={{ m: 2 }}>
      {listOfVideos}
    </Box>
  );
};

export default VideoItem;
