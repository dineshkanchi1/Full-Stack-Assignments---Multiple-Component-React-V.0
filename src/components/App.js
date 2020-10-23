import React, { Component, useState } from "react";
import "../styles/App.css";
import Test from "react-test-attributes";
class App extends Component {
  render() {
    return (
      <>
        <Test id="project-name">
          <h1>4R-Spot</h1>
        </Test>
        <Test id="project-description">
          <p>
            Provide a interface between the buyer and seller for recycle items
            from scrap
          </p>
        </Test>
      </>
    );
  }
}

export default App;
