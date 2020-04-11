import React, { Component } from "react";
import Html from "./Html";
import Markdown from "./Markdown";
import showdown from "showdown";

class App extends Component {
  state = {
    html: "",
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}> MarkDown Editor</h1>
        <div className="ui divided two column grid">
          <div className="row">
            <div className="column">
              <Markdown convertMD={this.convertMD} />
            </div>
            <div className="column">
              <Html html={this.state.html} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  convertMD = (text) => {
    let converter = new showdown.Converter();

    this.setState({ html: converter.makeHtml(text) });
  };
}

export default App;
