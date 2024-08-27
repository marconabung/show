import React from "react";
import "./Feedback.css";

const feedbacks = [
  {
    src: require("../../../assets/images/home/feedback/client3.jpeg"),
    name: "Maria Makiling",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, eligendi optio, similique porro autem eos enim sint hic fugiat dolor illum perspiciatis officia totam aspernatur nihil possimus.",
  },
  {
    src: require("../../../assets/images/home/feedback/client2.jpg"),
    name: "Anime Lover",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur id fugiat illo iste quo quae exercitationem impedit animi ea quasi.",
  },
  {
    src: require("../../../assets/images/home/feedback/client1.jpg"),
    name: "Usopaba Angharana",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos reprehenderit repellendus perferendis dicta dolore?",
  },
  {
    src: require("../../../assets/images/home/feedback/client4.jpg"),
    name: "Clinton Myguy",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat et accusamus porro quod perferendis a blanditiis, distinctio officiis eveniet. Delectus, cupiditate eligendi itaque id inventore sunt ratione?",
  },
  {
    src: require("../../../assets/images/home/feedback/client5.jpg"),
    name: "Jejomar Binay",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos reprehenderit repellendus perferendis dicta dolore?",
  },
  {
    src: require("../../../assets/images/home/feedback/client6.jpg"),
    name: "Bicolanang Hapon",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat et accusamus porro quod perferendis a blanditiis, distinctio officiis eveniet. Delectus, cupiditate eligendi itaque id inventore sunt ratione?",
  },
];

const FeedbackSingle = ({ name, imageSrc, message }) => {
  return (
    <article className="feedback">
      <img className="feedback-img" src={imageSrc} />
      <div className="feedback-txt">
        <p>{name}</p>
        <p>{message}</p>
      </div>
    </article>
  );
};

const Feedback = () => {
  return (
    <div className="feedback-main">
      <h2>Read what our clients say</h2>
      <section className="feedback-wrapper">
        {feedbacks.map((item, index) => (
          <FeedbackSingle
            key={index}
            name={item.name}
            message={item.message}
            imageSrc={item.src}
          />
        ))}
      </section>
    </div>
  );
};

export default Feedback;
