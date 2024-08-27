import React from "react";
import "./Home.css";
import Intro from "./Intro/Intro";
import Feedback from "./Feedback/Feedback";

const Home = () => {
  document.title = "JOE";

  return (
    <div className="home">
      <Intro />
      {/* <Feedback /> */}
    </div>
  );
};

export default Home;
