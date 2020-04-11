import React, { Component } from "react";
import { Select } from "semantic-ui-react";

const options = [
  { key: "ambiance", text: "ambiance", value: "ambiance" },
  { key: "chaos", text: "chaos", value: "chaos" },
  { key: "chrome", text: "chrome", value: "chrome" },
  { key: "clouds", text: "clouds", value: "clouds" },
  { key: "cobalt", text: "cobalt", value: "cobalt" },
  { key: "dawn", text: "dawn", value: "dawn" },
  { key: "dracula", text: "dracula", value: "dracula" },
  { key: "eclipse", text: "eclipse", value: "eclipse" },
  { key: "github", text: "github", value: "github" },
  { key: "monokai", text: "monokai", value: "monokai" },
  { key: "merbivore", text: "merbivore", value: "merbivore" },
  { key: "sqlserver", text: "sqlserver", value: "sqlserver" },
  { key: "terminal", text: "terminal", value: "terminal" },
  {
    key: "tomorrow_night_blue",
    text: "tomorrow_night_blue",
    value: "tomorrow_night_blue",
  },
  { key: "twilight", text: "twilight", value: "twilight" },
  { key: "xcode", text: "xcode", value: "xcode" },
];

class InputSelect extends Component {
  render() {
    return (
      <Select
        placeholder="Select theme"
        options={options}
        onChange={this.onChange}
      />
    );
  }
  onChange = (e, { value }) => {
    this.props.selectTheme(value);
  };
}

export default InputSelect;
