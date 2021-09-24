import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import "./courseCard.scss";



const CourseCard = (props: { title: string, text: string, image: any, to: string }) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="course-card">

      <h2 className="card-title">{props.title}</h2>

      <div className="card-container">
        <div className="card-img-container">
          <Lottie
            options={defaultOptions}
          />
        </div>
        <div className="card-text-container">
          <p className="text">{props.text}</p>
          <Link className="btn-link" to={`curso-details/${props.to}`}>Conheça o curso <i className="fas fa-arrow-right"></i></Link>
        </div>
      </div>

    </div>
  );
};

export default CourseCard;
