import React, { useState } from "react";
import Win22Img from "../../../assets/images/projects/22win.png";
import PVBetImg from "../../../assets/images/projects/pvbet.png";
import WinbetDarkImg from "../../../assets/images/projects/winbet-dark.png";
import WinbetLightImg from "../../../assets/images/projects/winbet-light.png";
import "./Cards.css";
import Lightbox from "./Lightbox/Lightbox";

const Cards = () => {
  const [lightboxImg, setLightboxImg] = useState({
    open: false,
    imgSrc: null,
  });

  function handleOpenLightbox(imgSrc) {
    setLightboxImg({
      open: true,
      imgSrc: imgSrc,
    });
  }

  function handleCloseLightbox() {
    setLightboxImg({
      open: false,
      imgSrc: null,
    });
  }

  return (
    <React.Fragment>
      <div className="proj-cards-wrapper">
        <div className="card">
          <div className="card-title-wrapper">
            <img
              className={`${
                lightboxImg.imgSrc === WinbetDarkImg ? "active" : ""
              }`}
              onClick={() => handleOpenLightbox(WinbetDarkImg)}
              src={WinbetDarkImg}
            />
            <a href="#" className="card-title">
              Winbet Gaming Hall Platform
            </a>
          </div>
          {/* <div className="date">
            <p>
              <span>From:</span>
              <span>May 28, 2024</span>
            </p>
            <p>
              <span>To:</span>
              <span>Present</span>
            </p>
          </div> */}
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi id
            voluptatum saepe dolorem reprehenderit repellendus odit ad, ex,
            beatae similique, tempore commodi voluptatibus repellat a cum
            blanditiis consectetur quae incidunt quaerat in aut distinctio
            obcaecati corrupti. Amet est aperiam sit, quod illum, voluptatibus
            voluptas officiis, dolores delectus obcaecati quae tempore.
          </p>
          <div className="tags-wrapper">
            {/* <p className="tags-title">Tags: </p> */}
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>C#</li>
              <li>.NET Core</li>
              <li>Redux</li>
              <li>Redux Saga</li>
              <li>Ant Design</li>
              <li>PWA</li>
              <li>Apache Cordova</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-title-wrapper">
            <img
              onClick={() => handleOpenLightbox(WinbetLightImg)}
              src={WinbetLightImg}
            />
            <a href="#" className="card-title">
              Winbet Gaming Hall Platform
            </a>
          </div>
          {/* <div className="date">
            <p>
              <span>From:</span>
              <span>May 28, 2024</span>
            </p>
            <p>
              <span>To:</span>
              <span>Present</span>
            </p>
          </div> */}
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi id
            voluptatum saepe dolorem reprehenderit repellendus odit ad, ex,
            beatae similique, tempore commodi voluptatibus repellat a cum
            blanditiis consectetur quae incidunt quaerat in aut distinctio
            obcaecati corrupti. Amet est aperiam sit, quod illum, voluptatibus
            voluptas officiis, dolores delectus obcaecati quae tempore.
          </p>
          <div className="tags-wrapper">
            {/* <p className="tags-title">Tags: </p> */}
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>C#</li>
              <li>.NET Core</li>
              <li>Redux</li>
              <li>Redux Saga</li>
              <li>Ant Design</li>
              <li>PWA</li>
              <li>Apache Cordova</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-title-wrapper">
            <img onClick={() => handleOpenLightbox(Win22Img)} src={Win22Img} />
            <a href="#" className="card-title">
              22Win Gaming Hall Platform
            </a>
          </div>
          {/* <div className="date">
            <p>
              <span>From:</span>
              <span>May 28, 2024</span>
            </p>
            <p>
              <span>To:</span>
              <span>Present</span>
            </p>
          </div> */}
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi id
            voluptatum saepe dolorem reprehenderit repellendus odit ad, ex,
            beatae similique, tempore commodi voluptatibus repellat a cum
            blanditiis consectetur quae incidunt quaerat in aut distinctio
            obcaecati corrupti. Amet est aperiam sit, quod illum, voluptatibus
            voluptas officiis, dolores delectus obcaecati quae tempore.
          </p>
          <div className="tags-wrapper">
            {/* <p className="tags-title">Tags: </p> */}
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>C#</li>
              <li>.NET Core</li>
              <li>Redux</li>
              <li>Redux Saga</li>
              <li>Ant Design</li>
              <li>PWA</li>
              <li>Apache Cordova</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-title-wrapper">
            <img onClick={() => handleOpenLightbox(PVBetImg)} src={PVBetImg} />
            <a href="#" className="card-title">
              PvBet Gaming Hall Platform
            </a>
          </div>
          {/* <div className="date">
            <p>
              <span>From:</span>
              <span>May 28, 2024</span>
            </p>
            <p>
              <span>To:</span>
              <span>Present</span>
            </p>
          </div> */}
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi id
            voluptatum saepe dolorem reprehenderit repellendus odit ad, ex,
            beatae similique, tempore commodi voluptatibus repellat a cum
            blanditiis consectetur quae incidunt quaerat in aut distinctio
            obcaecati corrupti. Amet est aperiam sit, quod illum, voluptatibus
            voluptas officiis, dolores delectus obcaecati quae tempore.
          </p>
          <div className="tags-wrapper">
            {/* <p className="tags-title">Tags: </p> */}
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>C#</li>
              <li>.NET Core</li>
              <li>Redux</li>
              <li>Redux Saga</li>
              <li>Ant Design</li>
              <li>PWA</li>
              <li>Apache Cordova</li>
            </ul>
          </div>
        </div>
      </div>
      {lightboxImg.open && (
        <Lightbox
          handleCloseLightbox={handleCloseLightbox}
          imgSrc={lightboxImg.imgSrc}
        />
      )}
    </React.Fragment>
  );
};

export default Cards;
