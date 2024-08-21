import React from "react";
import "./CardTwo.css";

const CardTwo = ({ setInput }) => {
  return (
    <div>
      <div
        className="cardtwo"
        onClick={() =>
          setInput(
            "What notable awards and recognitions has Opacity Creatives received?"
          )
        }
      >
        <div className="card-contents">
          <p className="card-titles">Another question?</p>
          <p className="card-paras">
            What notable awards and recognitions has Opacity Creatives received?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
