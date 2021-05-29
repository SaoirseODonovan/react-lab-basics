import React from "react";
import WebFrameworks from "./04_iteration";
import Languages from "./03_props";
  
const Demo = props => {
  return (
    <>
      <WebFrameworks
        frameworks={props.tech.frameworks.bestFrameworks}
        type={props.tech.frameworks.type}
      />
      <p>
        Data sourced from <a href="https://npm-stat.com/">npm-stat.com</a>
      </p>
      <Languages
        heading={props.tech.languages.title}
        languages={props.tech.languages.list}
      />
      <p>
        Data sourced from{" "}
        <a href="https://insights.stackoverflow.com/survey/2019#technology">
          StackOverflow
        </a>
      </p>
    </>
  );
};
export default Demo;
