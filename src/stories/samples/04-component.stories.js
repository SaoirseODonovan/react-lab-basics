import React from "react";
import JSXCollection from "../../components/samples/04_iteration";

export default {
  title: "Sample/04 - Component collection (Iteration"  ,
  component: JSXCollection,
};

export const Basic = () => {
    const bestFrameworks = [
        { name: "React", url: "https://facebook.github.io/react/" },
        { name: "Vue", url: "https://vuejs.org/" },
        { name: "Angular", url: "https://angularjs.org/" },
      ];
    const type = "Most Popular client-side frameworks";
    return <JSXCollection frameworks={bestFrameworks} type={type} />;
};
