import React from 'react'
import './notfound.scss';
import not_found from '../../assets/img/404.svg'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container">

      <div className="box">

        <Link to="/">voltar</Link>

        <div className="content">
          <img src={not_found} alt="" />
          <p>Página não encontrada</p>
        </div>
      </div>

    </div>
  )
}

export default NotFound
