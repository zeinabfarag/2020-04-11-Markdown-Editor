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
        <div className="ui vertically divided grid">
          <div className="two column row">
            <div className="column">
              <Markdown className="column" convertMD={this.convertMD} />
            </div>
            <div className="column">
              <Html html={this.state.html} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  convertMD = (md) => {
    let converter = new showdown.Converter();

    this.setState({ html: converter.makeHtml(md) });
  };
}

export default App;
