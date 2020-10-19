import React, { Component, useState } from "react";
import "../styles/App.css";
import ProjectTitle from "./ProjectName";
import ProjectDescription from "./ProjectDescription";

class App extends Component {
  render() {
    return (
      <>
        <ProjectTitle />
        <ProjectDescription />
      </>
    );
  }
}

export default App;
