import React from "react";
import "./Lightbox.css";

const Lightbox = ({ handleCloseLightbox, imgSrc }) => {
  return (
    <div
      onClick={handleCloseLightbox}
      className={`project-card-lightbox active`}
    >
      <img src={imgSrc} className="lightbox-img" />
    </div>
  );
};

export default Lightbox;
