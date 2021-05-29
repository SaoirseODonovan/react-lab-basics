import React from "react";

const Demo = (props) => {
    return (
      <div > 
        <h2>{`${props.heading} Languages`}</h2>
        <ul> 
          <li>{props.languages[0]}</li>
          <li>{props.languages[1]} </li>
          <li>{props.languages[2]} </li>
        </ul>
      </div>
    );
  
}

export default Demo
