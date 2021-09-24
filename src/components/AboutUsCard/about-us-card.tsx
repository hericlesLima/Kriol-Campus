import React from "react";
import "./about-us-card-style.scss";

function AboutUs(props: { image: string; title: string; text: string }) {
  return (
    <div className="about-card-container">
      <div className="about-card-image">
        <img className="about-card-image-1" src={props.image} alt="" />
      </div>
      <div className="about-card-title">
        <h3 className="about-card-title-text">{props.title}</h3>
      </div>
      <div className="about-card-text">
        <p className="about-card-text-content">{props.text}</p>
      </div>
    </div>
  );
}
export default AboutUs;
 