import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./menuHamburguer.scss";
import logo from "../../assets/img/logo.png";



function Hamburguer(props: { color?: any }) {

  const [isChecked, setIsChecked] = useState(false)
  
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img className="logo-image" src={logo} alt="logo" onClick={() => setIsChecked(false)} />
        </Link>
      </div>
      {
        !isChecked ?

          <> <input className="menu-btn" type="checkbox" id="menu-btn"  onClick={() => setIsChecked(!isChecked)}/>
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
          </> :
          
          <> <input className="menu-btn" type="checkbox" id="menu-btn"  checked onClick={() => setIsChecked(!isChecked)}/>
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
          </> 
      }


      <ul className="menu">
        <li className="nav-item">
          <NavLink
            style={props.color}
            className="nav-link"
            activeClassName="selected"
            exact
            to="/"
            onClick={() => setIsChecked(!isChecked)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={props.color}
            className="nav-link"
            activeClassName="selected"
            to="/about"
            onClick={() => setIsChecked(!isChecked)}
          >
            Sobre Nós
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={props.color}
            className="nav-link"
            activeClassName="selected"
            exact
            to="/cursos"
            onClick={() => setIsChecked(!isChecked)}
          >
            Cursos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={props.color}
            exact
            className="nav-link"
            activeClassName="selected"
            to="/inscricao"
            onClick={() => setIsChecked(!isChecked)}
          >
            Inscrição
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={props.color}
            className="nav-link"
            activeClassName="selected"
            to="/metodologia"
            onClick={() => setIsChecked(!isChecked)}
          >
            Metodologia
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={props.color}
            className="nav-link"
            activeClassName="selected"
            to="/blog"
            onClick={() => setIsChecked(!isChecked)}
            >
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            style={props.color}
            className="nav-link"
            activeClassName="selected"
            to="/contacto"
            onClick={() => setIsChecked(!isChecked)}
          >
            Contactos
          </NavLink>
        </li>
      </ul>

    </header>
  );
}

export default Hamburguer;
