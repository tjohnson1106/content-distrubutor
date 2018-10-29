import React, { Component } from "react";
import { connect } from "react-redux";

import DistroError from "./DistroError";
import DistributionDetails from "./DistributionDetails";

class Distributions extends Component {
  renderDistros() {
    const { distributions, errors } = this.props.distributions;

    if (errors) {
      return <DistroError error={errors} />;
    } else {
      return <DistributionDetails distros={distributions} />;
    }
  }

  render() {
    return <div>{this.renderDistros()}</div>;
  }
}

function mapStateToProps(state) {
  return { distributions: state.distributions };
}

export default connect(mapStateToProps)(Distributions);
