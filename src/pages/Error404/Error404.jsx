import React from "react";
import AppLogo from "../../assets/images/app/joe-logo.png";
import "./Error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-404">
      <img width={250} src={AppLogo} />
      <div className="error-404-txt">
        <p>Oops, there has been a mistake.</p>
        <p>The link you're trying to visit is not found.</p>
      </div>
      <Link className="link-redirect" to="/">
        &#8592; Go back
      </Link>
      <div className="link-report-wrapper">
        <p>Think there's a problem?</p>
        <Link className="link-report" to="/">
          Report here
        </Link>
      </div>
    </div>
  );
};

export default Error404;
