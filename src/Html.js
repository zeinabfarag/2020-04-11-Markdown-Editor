import React from "react";

const Html = (props) => {
  return (
    <div>
      <h2 className="languageTitle"> HTML </h2>
      <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
    </div>
  );
};

export default Html;
