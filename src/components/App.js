import React, { Component, useState } from "react";
import "../styles/App.css";
class App extends Component {
  render() {
    return (
      <>
        <h1 data-ns-test="project-name">4R-Spot</h1>
        <p data-ns-test="project-description">
          Provide a interface between the buyer and seller for recycle items
          from scrap
        </p>
      </>
    );
  }
}

export default App;
