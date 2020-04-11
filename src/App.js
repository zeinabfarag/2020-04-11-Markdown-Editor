import React, { Component } from "react";
import Html from "./Html";
import Markdown from "./Markdown";
import showdown from "showdown";
import "./App.css";

class App extends Component {
  state = {
    html: "",
  };

  render() {
    return (
      <div className="App">
        <h1 id="title"> Markdown Editor</h1>
        <div className="ui grid">
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
