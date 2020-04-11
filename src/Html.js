import React, { Component } from "react";

class Html extends Component {
  render() {
    return (
      <div>
        <h2 className="languageTitle"> HTML </h2>
        <div dangerouslySetInnerHTML={{ __html: this.props.html }}></div>
      </div>
    );
  }
}

export default Html;
