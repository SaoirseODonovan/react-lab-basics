import React from "react";
import ComponentHierarchy from "../../components/samples/05_hierarchy";

export default {
  title: "Sample/04 - Component collection (Iteration",
  component: ComponentHierarchy,
};

const list = ["Javascript", "Python", "Java", "C#"];
const bestFrameworks = [
  { name: "React", url: "https://facebook.github.io/react/" },
  { name: "Vue", url: "https://vuejs.org/" },
  { name: "Angular", url: "https://angularjs.org/" },
];

export const Basic = () => {
  const data = {
    frameworks: {
      bestFrameworks: bestFrameworks,
      type: "Ranked client-side frameworks",
    },
    languages: {
      list: list,
      title: "Ranked Server-side",
    },
  };
  return <ComponentHierarchy tech={data} />;
};
