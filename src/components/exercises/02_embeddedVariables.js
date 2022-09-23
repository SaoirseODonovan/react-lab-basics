import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  //A slight improvement would be to place the data in local variables (e.g. a two-element array for the modules) and reference them from the JSX code. 
  const course = "Computer Forensics and Security - Modules table";
  const modules = [
    {
      name: "DevOps",
      noLectures: 2,
      noPracticals: 3
    },
    {
      name: "Enterprise Web Dev",
      noLectures: 3,
      noPracticals: 2
    }
  ];
  return (
    <div>
    <h1>Computer Forensics and Security - Modules table</h1>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>No lectures</th>
          <th>No practicals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{modules[0].name}</td>
          <td>{modules[0].noLectures}</td>
          <td>{modules[0].noPracticals}</td>
        </tr>
        <tr>
          <td>{modules[1].name}</td>
          <td>{modules[1].noLectures}</td>
          <td>{modules[1].noPracticals}</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
};

export default Demo;
