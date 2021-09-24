import React from 'react'
import { Link } from 'react-router-dom'


import './card.css'

function Card(props: {title: string, text: string, image:string, to: string, curso: string}) {
    return (
        <div className="course-card">

      <h2 className="card-title">{props.title}</h2>

      <div className="card-container">
        <div className="card-img-container">
            <img className="course-card-img" src={props.image}  alt="img"/>
        </div>
        <div className="card-text-container">
          <p className="text">{props.text}</p>
          <Link className="btn-link" to={`${props.curso}/${props.to}`}>Conheça o curso <i className="fas fa-arrow-right"></i></Link>
        </div>
      </div>
    </div>
    )
}
export default Card
