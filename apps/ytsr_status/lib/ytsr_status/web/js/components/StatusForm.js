import React, { Component } from "react";
import { connect } from "react-redux";

import Actions from "../actions/distributions";
import FormElement from "../formElement";

class StatusForm extends Component {
  handleSubmit(isrcs) {
    dispatch(Actions.getDistributionsStatus(isrcs));
  }

  render() {
    return <FormElement handleSubmit={this.handleSubmit} />;
  }
}

export default connect()(StatusForm);
