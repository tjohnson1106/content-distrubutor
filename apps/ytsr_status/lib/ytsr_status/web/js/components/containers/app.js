import React, { Component } from "react";

import Nav from "../Nav";
import StatusForm from "../StatusForm";
import Distributions from "../Distributions";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <StatusForm />
          <div className="page-header">
            <h3>Results</h3>
          </div>
          <Distributions />
        </div>
      </div>
    );
  }
}

export default App;
