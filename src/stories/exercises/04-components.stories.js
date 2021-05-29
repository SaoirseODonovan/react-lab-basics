import React from "react";
import CourseModulesCollections from "../../components/exercises/04_iteration";

export default {
  title: "Exercises/04 - iteration",
  component: CourseModulesCollections,
};

export const Basic = () => {
  const name = "HDip Computer Science";
  const modules = [
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
    {
      name: "Programming",
      noLectures: 2,
      noPracticals: 2,
    },
    {
      name: "Computer Systems",
      noLectures: 2,
      noPracticals: 3,
    },
  ];
  return <CourseModulesCollections modules={modules} course={name} />;
};
