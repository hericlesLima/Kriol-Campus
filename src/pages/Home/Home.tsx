import React from "react";
import why_learn from "../../assets/img/why-learning.svg";
import blocochilds from "../../assets/img/bloco-childs.png";
import launchTest from "../../assets/img/lottie/launchTest.json";
import father from "../../assets/img/lottie/father.json";
import video from "./video/kriol.mp4";
import Typewriter from "typewriter-effect";
import "./home.scss";

import Carousel from "../../components/Carousel/Carousel";

import Footer from "../../components/Footer/Footer";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: launchTest,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: father,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="home">
      <div className="start-home">
        <div className="video-opacity" />

        <div className="video-overlay">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Kriol Campus")
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  "Let's <strong class='strong' >code</strong> and make <strong class='strong'>things</strong>"
                )
                .pauseFor(1000)
                .start();
            }}
          />
          <Link className="link-sign" to="/inscricao">
            Inscreva-se <i className="fas fa-sign-in-alt"></i>
          </Link>
         <div className="icon-scroll"/>
        </div>
        <video className="home-video" src={video} autoPlay muted loop />
      </div>

      <div className="curso-container">
        <Carousel />
      </div>

      <div className="content-2">
        <div className="content-2-text">
          <div className="content-2-text-1">
            <h2>Conhe??a a Kriol Campus</h2>
            <p>
              A nossa solu????o ?? pr??tica, aprendizagem baseada em projetos desde
              programa????o at?? ?? constru????o de rob??s, fornece uma metodologia
              abrangente e envolvente para aumentar o desempenho dos alunos nas
              salas de aula e aumentando as suas habilidades e compet??ncias.
            </p>
            <div className="home-content-btn">
              <Link className="link-about" to="/about">
                Mais sobre n??s
              </Link>
            </div>
          </div>
        </div>
        <div className="content-2-image">
          <div className="kid-hi">
            <Lottie options={defaultOptions2} />
          </div>
        </div>
      </div>

      <div className="content-1">
        <div className="content-image">
          <img src={why_learn} alt="podcast" />
        </div>
        <div className="content-text">
          <h2 className="content-text-text">
            Porque estudar programa????o desde cedo?
          </h2>
          <div className="content-text-1">
            <p>
              A aprendizagem de programa????o permite o desenvolvimento de uma
              s??rie de compet??ncias essenciais no mundo atual, Kriol Campus
              desenvolve nos seus alunos as Compet??ncias do S??culo 21,
              preparando-os para os desafios da era digital. Aliando inova????o ao
              conceito do STEAM ??? Ci??ncias (Science), Tecnologia (Technology),
              Engenharia (Engineering), Artes (Arts) e Matem??tica (Math),
              estamos criando os futuros l??deres digitais.
            </p>
          </div>
        </div>
      </div>

      <div className="content-3">
        <div className="content-3-title">
          <h1>Elevamos o seu conhecimento ao pr??ximo n??vel</h1>
          <h2>Embarque connosco nessa aventura</h2>
        </div>

        <div className="content-3-img">
          <Lottie options={defaultOptions} />
        </div>
      </div>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  );
}
export default Home;
