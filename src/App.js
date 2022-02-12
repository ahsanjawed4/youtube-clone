import React, { Component } from "react";
import { SearchBar, VideoDetail, VideoItem } from "./components";
import axios from "axios";
import youtube from "./API/youtube";
import { Grid } from "@material-ui/core";
export default class App extends Component {
  state = {
    videos: [],
    firstVideo: null,
  };
  componentDidMount() {
    this.handleFormSubmit("pasoori");
  }
  handleFormSubmit = async (search) => {
    const {
      data: { items },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAgVL7b98VfzsdQYBxXA_vLVy7hrQgL5pE",
        q: search,
      },
    });
    this.setState({
      videos: items,
      firstVideo: items[0],
    });
    //console.log(this.state.videos);
  };
  render() {
    const { videos, firstVideo } = this.state;
    return (
      <Grid justifyContent="center" container>
        <Grid item xs={12}>
          <Grid container style={{ padding: "15px" }}>
            <Grid item xs={12}>
              <SearchBar formSubmit={this.handleFormSubmit} />
            </Grid>
            <Grid item md={8} xs={12}>
              <VideoDetail firstVideo={firstVideo} />
            </Grid>
            <Grid item md={4} xs={12}>
              <VideoItem videoItems={videos} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
