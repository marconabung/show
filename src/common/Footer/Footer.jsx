import React from "react";
import "./Footer.css";
import AppLogo from "../../assets/images/app/joe-logo.png";
import { useNavigate } from "react-router-dom";

const iconLinks = [
  {
    name: "Github",
    src: require("../../assets/images/home/icons/github.png"),
    link: "https://github.com/marconabung",
  },
  {
    name: "LinkedIn",
    src: require("../../assets/images/home/icons/linkedin.png"),
    link: "https://www.linkedin.com/in/mrcnbng/",
  },
  {
    name: "Telegram",
    src: require("../../assets/images/home/icons/telegram.png"),
    link: "https://telegram.me/catability",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <section className="footer-quick-links">
        <div className="footer-logo-address-group">
          <img src={AppLogo} width={200} />
          <div>
            <p className="footer-address">
              Pulong Santa Cruz, <br /> Santa Rosa City, <br /> Laguna,
              Philippines
            </p>
            <div className="footer-follow">
              <p>Follow me and keep updated</p>
            </div>
          </div>
        </div>
        <div className="footer-nav">
          <div className="quick-links">
            <p>Quick Links</p>
            <ul>
              {iconLinks.map((item, index) => (
                <li
                  key={item.index}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="footer-copyright">
        <div>&copy; Joe 2024 - 2024</div>
      </section>
    </footer>
  );
};

export default Footer;
