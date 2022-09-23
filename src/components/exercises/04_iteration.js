import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

//04_iterations + 04-components.stories to be used as guides 
  const Demo = props => {
    const list = props.modules.map((module, index) => {
      return (
        <div>
        <tr key={index}>
          <td>{module.name}</td>
          <td>{module.noLectures}</td>
          <td>{module.noPracticals}</td>
        </tr>
        </div>
      );
    });
    return (
      //effective because now you can add as many things as you want to the "props" variable and it will make an indefinitely long table to fit it all
      <>
        <h2>{props.course}</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>No lectures</th>
              <th>No practicals</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </>
  );
};

export default Demo;
