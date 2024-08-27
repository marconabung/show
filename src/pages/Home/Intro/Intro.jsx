import React from "react";
import "./Intro.css";

const iconLinks = [
  {
    src: require("../../../assets/images/home/icons/github.png"),
    link: "https://github.com/marconabung",
  },
  {
    src: require("../../../assets/images/home/icons/linkedin.png"),
    link: "https://www.linkedin.com/in/mrcnbng/",
  },
  {
    src: require("../../../assets/images/home/icons/telegram.png"),
    link: "https://telegram.me/catability",
  },
];

const Intro = () => {
  return (
    <div className="intro">
      <img
        className="intro-logo"
        src={require("../../../assets/images/app/joe-logo.png")}
      />
      <div className="intro-txt">
        <div className="intro-title">
          <p>Comprehensive </p>
          <p className="pink">Software</p>
          <p className="blue">Solutions</p>
        </div>
        <p className="intro-description">
          Comprehensive Software Solutions tailored to meet the diverse needs of
          clients and employers. <br />
          Specializing in web, mobile, desktop app, and custom software
          solutions.
        </p>
      </div>
      {/* <div className="img-group">
        <img
          className="img-me"
          src={require("../../../assets/images/home/me2.jpg")}
        />
        <div className="icon-links">
          {iconLinks?.map((item, index) => (
            <img
              onClick={() => window.open(item.link, "_blank")}
              key={index}
              src={item.src}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Intro;
