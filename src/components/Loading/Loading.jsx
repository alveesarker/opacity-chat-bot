import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loader">
      <div className="container">
        <div className="dash first" />
        <div className="dash seconde" />
        <div className="dash third" />
        <div className="dash fourth" />
      </div>
    </div>
  );
};

export default Loading;
