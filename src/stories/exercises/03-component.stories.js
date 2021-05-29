import React from "react";
import CourseModulesWithProps from "../../components/exercises/03_props";

export default {
  title: "Exercises/03 - component with props",
  component: CourseModulesWithProps,
};

export const Basic = () => {
  const name = "HDip Computer Science";
  const twoModules = [
    {
      name: "DevOps",
      noLectures: 1,
      noPracticals: 2,
    },
    {
      name: "Enterprise Web Dev",
      noLectures: 2,
      noPracticals: 3,
    },
  ];
  return <CourseModulesWithProps modules={twoModules} course={name} />;
};
