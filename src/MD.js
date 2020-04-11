import React, { Component } from "react";
import AceEditor from "react-ace";

import "brace/mode/markdown";
import "brace/theme/chrome";

class MD extends Component {
  state = {
    markdown: "",
  };
  render() {
    return (
      <div>
        <h1> MD </h1>
        <AceEditor
          mode="markdown"
          theme="chrome"
          value={this.state.markdown}
          onChange={this.onChange}
        />
      </div>
    );
  }

  onChange = (val) => {
    this.setState({ markdown: val });
    this.onSubmit();
  };

  onSubmit = () => {
    this.props.convertMD(this.state.markdown);
  };
}

export default MD;
