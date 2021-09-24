import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/button";
import "./BlogCard.scss";

function BlogCard(props: { image: string; title: string; text: string }) {
  return (
    <div className="blog-card">

      <h2 className="blog-card-title">{props.title}</h2>

      <div className="blog-card-container">
        <div className="blog-card-img-container">
          <img className="blog-img" src={props.image} alt="" />
        </div>
        <div className="blog-card-text-container">
          <p className="blog-text">{props.text}</p>
          <Link className="btn-link" to={`curso-details/`}>Conheça o curso <i className="fas fa-arrow-right"></i></Link>
        </div>
      </div>

    </div>
  );
}

export default BlogCard;
