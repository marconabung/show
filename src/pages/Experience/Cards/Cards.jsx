import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="exp-card-wrapper">
      <p className="card-yoe">2023 - Present</p>
      <div className="exp-card-header">
        <p className="card-title-years">
          [Live700 Software Inc.] - Fullstack Developer & Application Developer
        </p>
      </div>
      <div className="exp-card-details">
        <ul>
          <li>
            Maintain and improve <strong>H5</strong> websites based on clients’
            requests for gaming hall platforms.
          </li>
          <li>Maximizing the performance and scalability of apps.</li>
          <li>
            Build progressive web apps <strong>(PWA)</strong> and designing
            mobile-based features to improve user experience.
          </li>
          <li>
            Coordinating with backend and third-party providers to resolve
            issues and tenants’ concerns.
          </li>
          <li>
            Familiarity and implementing <strong>SEO</strong> principles
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
