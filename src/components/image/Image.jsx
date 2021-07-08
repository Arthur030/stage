import React from "react";
import "./main.css";


const Image = ({
    isShowing
  }) => (
    <div className="image-container">
    {isShowing ? (
      <img src="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9kY2FzdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" 
           alt=""
           className="image" />
    ) : (null)}
  </div>
  );


export default Image;