import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Metodologia from "./pages/Metodologia/Metodlogia";
import About from "./pages/About/About";
import CourseCateogry from "./pages/CursoCategory/CourseCateogry";
import Curso from "./pages/Curso/Curso";

import "./App.scss";
import Inscriçao from "./pages/Inscriçao/inscriçao";
import CursoDetails from "./pages/CursoDetails/CursoDetails";
import Blog from "./pages/Blog/Blog";
import Contato from "./pages/Contacto/Contato";
import Hamburguer from "./components/Header/menuHamburguer";
import NotFound from "./pages/404/NotFound";

function Routes() {

  const color = { color: "#4d4d4d" }

  return (
    <BrowserRouter>


      <Switch>
        <Route exact path="/"  >
          <Hamburguer />
          <Home />
        </Route>
        <Route path="/about" component={About}>
          <Hamburguer />
          <About />
        </Route>
        <Route path="/cursos">
          <Hamburguer />
          <Curso />
        </Route>
        <Route path="/metodologia" >
          <Hamburguer color={color} />
          <Metodologia />

        </Route>
        <Route path="/inscricao">
          <Hamburguer />
          <Inscriçao />
        </Route>
        <Route path="/blog">
          <Hamburguer />
          <Blog />
        </Route>
        <Route exact path="/curso-details/:slug" >
          <Hamburguer />
          <CursoDetails />
        </Route>
        <Route path="/curso-details/:slug/:slug_2" >
           <Hamburguer />
          <CourseCateogry />
        </Route>
        <Route path="/contacto" >
          <Hamburguer />
          <Contato />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
