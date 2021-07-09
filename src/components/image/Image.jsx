import React from "react";
import "./main.css";


const Image = ({
    isShowing,
    imgSrc
  }) => (
    <div className="image-container">
        {/* if isShowing isTrue */}
    {isShowing ? (
      <img src={imgSrc} 
           alt=""
           className="image" />
        //    else
    ) : (null)}
  </div>
  );


export default Image;