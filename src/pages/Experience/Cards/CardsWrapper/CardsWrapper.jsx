import React from "react";
import Cards from "../Cards";
import "./CardsWrapper.css";

const CardsWrapper = () => {
  return (
    <div className="cards-wrapper">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default CardsWrapper;
