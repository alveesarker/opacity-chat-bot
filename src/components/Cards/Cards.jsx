import React from "react";
import "./Cards.css";

const Cards = ({setInput}) => {
  return (
    <div>
      <div className="card" onClick={() => setInput('What inspired Afif Al Kabir and MD Tahminul Islam Nafis to establish Opacity Creatives?')}>
        <div className="card-content">
          <p className="card-title">Have a question?</p>
          <p className="card-para">
          What inspired Afif Al Kabir and MD Tahminul Islam Nafis to establish Opacity Creatives?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
