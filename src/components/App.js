import React, { Component, useState } from "react";
import "../styles/App.css";
import ProjectDescription from "./ProjectDescription";
import ProjectName from "./ProjectName";
class App extends Component {
  render() {
    return (
      <>
        <ProjectName key="project-name" />
        <ProjectDescription key="project-description" />
      </>
    );
  }
}

export default App;
