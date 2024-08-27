import React from "react";
import CardsWrapper from "./Cards/CardsWrapper/CardsWrapper";
import "./Experience.css";

const Experience = () => {
  document.title = "Experience - JOE";

  return (
    <div className="experience">
      <CardsWrapper />
    </div>
  );
};

export default Experience;
