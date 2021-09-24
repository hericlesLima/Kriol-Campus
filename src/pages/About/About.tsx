import React from "react";

import Lottie from "react-lottie";

import AboutUs from "../../components/AboutUsCard/about-us-card";
import Footer from "../../components/Footer/Footer";
import MainView from "../../components/MainView/mainView";
import star from "../../assets/img/star.svg";
import vision from "../../assets/img/vision.jpg";
import mission from "../../assets/img/mission.jpg";
import value from "../../assets/img/values.jpg";
import astronaute from "../../assets/img/lottie/astronaute.json";

import "./about.scss";

function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: astronaute,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (

    <div className="about-container">
      <MainView>
        <div className="lottie-container">
          <Lottie options={defaultOptions} />
        </div>
      </MainView>

      <div className="about-content">
        <div className="about-title">
          <h2>Sobre Nós</h2>
          <div className="about-style-image">
            <div>
              <img src={star} alt="star" />
            </div>
            <div className="center-star">
              <img src={star} alt="star" />
            </div>
            <div>
              <img src={star} alt="star" />
            </div>
          </div>
        </div>

        <div className="about-subtitle">
          <p className="about-subtitle-text">
            A tecnologia está cada vez mais presente em todos os aspectos da nossa vida e transformando
            rapidamente o nosso futuro, potenciando o surgimento de novas áreas profissionais.
            Kriol Campus, com o objetivo de promover o contacto dos mais jovens com as novas
            tecnologias de uma forma divertida e inovadora. Um local onde crianças, e jovens devidamente
            orientadas por monitores, podem explorar todo o seu potencial criativo nas áreas de programação,
            robótica, web design, games, entre outros, sempre numa base pedagógica e lúdica que propicie o
            desenvolvimento da sua criatividade e capacidades cognitivas, preparando os nossos jovens para
            serem inovadores e ousados, com um “maker mindset” de sucesso.
          </p>

        </div>


        <div className="about-info">
          <AboutUs
            image={mission}
            title="Missão"
            text="Criar a próxima geração de  líderes digitais e 
            transformadores com competências viradas para a economia digital, 
            inovação e empreendedorismo."
          />
          <AboutUs
            image={vision}
            title="Visão"
            text="A nossa visão é  transformar África através da inovação e ciência. "
          />
          <AboutUs
            image={value}
            title="Valores"
            text="Os nossos valores:
            Criatividade, Inovação.
            Nós criamos, experimentamos, ensinamos, e fazemos ideias ganharem vida.
            "
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
