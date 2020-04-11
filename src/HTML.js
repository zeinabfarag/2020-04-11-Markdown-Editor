import React, { Component } from "react";

class HTML extends Component {
  render() {
    return (
      <div>
        <h1> HTML </h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.html }}></div>
      </div>
    );
  }
}

export default HTML;
