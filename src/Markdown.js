import React, { Component } from "react";
import AceEditor from "react-ace";
import InputSelect from "./InputSelect";

import "brace/mode/markdown";
import "brace/theme/chrome";

class Markdown extends Component {
  state = {
    markdown: "",
    theme: "chrome",
  };

  render() {
    return (
      <div className="ui grid">
        <div className="two column row">
          <div className="column">
            <h1> Markdown </h1>
          </div>
          <div className="column">
            <InputSelect selectTheme={this.selectTheme} />
          </div>
        </div>
        <AceEditor
          style={{ height: "100vh" }}
          mode="markdown"
          theme={this.state.theme}
          value={this.state.markdown}
          onChange={this.onChange}
        />
      </div>
    );
  }

  selectTheme = (theme) => {
    import(`brace/theme/${theme}`).then(() => {
      this.setState({ theme });
    });
  };

  onChange = (val) => {
    this.setState({ markdown: val });
    this.onSubmit();
  };

  onSubmit = () => {
    this.props.convertMD(this.state.markdown);
  };
}

export default Markdown;
