import React from "react";
import ComponentWithProps from "../../components/samples/03_props";

export default {
  title: "Sample/03 - component with props"  ,
  component: ComponentWithProps,
};

export const Basic = () => {
    const list = ["Javascript", "Python", "Java", "C#"];
    const classification = "Ranked";
    return <ComponentWithProps languages={list} heading={classification} />;
};
