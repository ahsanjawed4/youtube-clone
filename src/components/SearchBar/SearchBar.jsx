import React, { Component } from "react";
import { Paper, TextField, Box } from "@material-ui/core";
export default class SearchBar extends Component {
  state = {
    searchTerm: "",
  };
  handleSearch = (event) => this.setState({ searchTerm: event.target.value });
  handleSubmit = (event) => {
    //const { searchTerm } = this.state;
    const { formSubmit } = this.props;
    formSubmit(this.state.searchTerm);
    event.preventDefault();
  };
  render() {
    return (
      <>
        <Box>
          <Paper elevation={6} style={{ padding: "10px" }}>
            <form onSubmit={this.handleSubmit}>
              <TextField
                fullWidth
                label="search"
                onChange={this.handleSearch}
              />
            </form>
          </Paper>
        </Box>
      </>
    );
  }
}
