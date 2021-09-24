import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar">
        <ul id="menu">
          <li>
            <NavLink exact activeClassName="selected"  to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected"  to="/cursos">
              Cursos
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/inscricao">
              Inscrição
            </NavLink>
          </li>
          <li>
            <NavLink exact  activeClassName="selected" to="/about">
              Sobre Nós
            </NavLink>
          </li>
          <li>
            <NavLink exact  activeClassName="selected" to="/metodologia">
              Metodologias
            </NavLink>
          </li>
          <li>
            <NavLink exact  activeClassName="selected" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink exact  activeClassName="selected" to="/contacto">
              Contactos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}


