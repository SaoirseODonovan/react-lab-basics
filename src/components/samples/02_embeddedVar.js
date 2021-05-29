import React from "react";

const Demo = () => {
  const languages = ["Go", "Julia", "Kotlin"];
  const header = "Modern";
  return (
    <div> 
      <h1>{`${header} Languages`}</h1>
      <ul>
        <li>{languages[0]}</li>
        <li>{languages[1]} </li>
        <li>{languages[2]} </li>
      </ul>
    </div>
  );
};

export default Demo