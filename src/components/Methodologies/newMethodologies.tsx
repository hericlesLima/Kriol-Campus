import React, { useState } from "react";

import image1 from "../../assets/img/metodologies/kid-tablet.webp";
import image2 from "../../assets/img/metodologies/gamification.webp";
import image3 from "../../assets/img/metodologies/coding_child.webp";
import image4 from "../../assets/img/metodologies/reading.webp";
import "./newMethodologies.scss";
import Footer from "../Footer/Footer";
import MainView from "../MainView/mainView";
import Modals from "../Modal/Modal";

function Methodologies() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const closeModal1 = () => {
    setModal1(false);
  };

  const closeModal2 = () => {
    setModal2(false);
  };

  return (
    <div className="methodologies-containers">
      <MainView>
        <div className="methodologies-header">
          <div className="methodologies-header-title">
            <h1 className="methodologies-title">Metodologia</h1>
          </div>
        </div>
      </MainView>

      <div className="container-1">
        <div className="container-1-text">
          <div className="game-learning">
            <h1 className="game-learning-title" style={{ color: "#fe6f51" }}>
              &lt; Game Learning /&gt;
            </h1>
            <p style={{ color: "#f2f2f2", margin: "2rem" }}>
              Aprender Fazendo. <br />
              As crianças aprendem melhor fazendo. <br />
              A maior parte do nosso tempo de aula é dedicado a ganhar
              experiência prática enquanto trabalhamos em projetos de
              programação. <br />
              Trabalhar em projetos incentiva nossos alunos a se expressarem
              através da programação.
            </p>
          </div>
        </div>

        <div className="container-1-image">
          <img className="kid-1" src={image1} alt="kid-tablet" />
        </div>

        <div className="container-1-no-content"></div>
      </div>
      <div className="container-2">
        <div className="container-2-no-content"></div>

        <div className="container-2-image">
          <img className="kid-2" src={image2} alt="gamefication" />
        </div>

        <div className="container-2-text">
          <div className="gamification">
            <h1 className="gamification-title" style={{ color: "#4d4d4d" }}>
              &lt; Empreendedorismo /&gt;
            </h1>
            <p style={{ color: "#f2f2f2", margin: "2rem" }}>
              A Kriol Campus segue o princípio do ESTEAM ( Entrepreneurship
              Science Technology Engineering Matemathics) com os mais novos.
            </p>

            <button className="openModalButton" onClick={() => setModal2(true)}>
              Ver mais ...
            </button>
          </div>
        </div>
      </div>
      <div className="container-3">
        <div className="container-3-text">
          <div className="softwares">
            <h1 className="softwares-title" style={{ color: "#fe6f51" }}>
              &lt; Software e Linguagens profissionais /&gt;
            </h1>
            <p style={{ color: "#f2f2f2", margin: "2rem" }}>
              As crianças e adolescentes hoje em dia já são nativos digitais, e
              têm facilidade em aprender as novas linguagens de programação.
              Sendo assim para alem dos softwares educacionais, a Kriol Campus
              vai introduzindo linguagens e softwares profissionais, para que
              eles possam ter uma aplicação pratica no mundo real.
            </p>
          </div>
        </div>

        <div className="container-3-image">
          <img className="kid-3" src={image3} />
        </div>

        <div className="container-3-no-content"></div>
      </div>
      <div className="container-4">
        <div className="container-4-no-content"></div>

        <div className="container-4-image">
          <img className="kid-4" src={image4} />
        </div>

        <div className="container-4-text">
          <div className="empreendedorismo">
            <h1 className="empreendedorismo-title" style={{ color: "#4d4d4d" }}>
              &lt; Gamification /&gt;
            </h1>
            <p style={{ color: "#f2f2f2", margin: "2rem" }}>
              Uma abordagem lúdica de aprendizagem. <br />
              Os projetos de classe são baseados nos interesses dos alunos, para
              inspirar a imaginação. <br />
              Fazendo uso de competição e jogos para aumentar a motivação.{" "}
            </p>
            <button className="openModalButton" onClick={() => setModal2(true)}>
              Ver mais ...
            </button>
          </div>
        </div>
      </div>

      <Modals openModal={modal1} closeModal={closeModal1}>
        <div className="gamefication-content">
          <p>
            A Gamification ou gamificação descreve o incentivo ao envolvimento
            das pessoas em contextos e atividades não relacionados ao jogo,
            usando mecânicas de estilo de jogo. Usando a aplicação de elementos
            típicos do jogo (por exemplo, pontuação, competição com outros,
            regras de jogo) para outras áreas de atividade. A gamificação
            alavanca as tendências naturais das crianças e jovens para a
            competição, realização, colaboração e desenvolvendo o espírito de
            equipa. Na Kriol Campus, utilizamos o Gamification de forma lúdica,
            onde os alunos recebem ou perdem pontuações como se estivessem em um
            jogo. A cada tarefa entregue, ganham-se pontos, vidas ou créditos.
            Cada aluno pertence a um grupo com a sua própria mascote, que vai
            evoluindo conforme as aulas ocorrem. Isso faz com que o envolvimento
            nas aulas seja maior, e claro, tornam-se muito mais divertidas.
          </p>

          <button onClick={closeModal1}>Close</button>
        </div>
      </Modals>

      <Modals openModal={modal2} closeModal={closeModal2}>
        <div className="gamefication-content">
          <p>
            A Kriol Campus segue o princípio do ESTEAM ( Entrepreneurship
            Science Technology Engineering Matemathics) com os mais novos.
            Estimulamos o empreendedorismo, através dos jogos e também
            estimulamos que criem jogos e os transformem em algo rentável, em
            várias óticas. Rentável para a Kriol Campus é ter um ROI ( Retorno
            no Investimento) do tempo, e na criatividade, e isso pode
            expressar-se em algo social, financeiro, aprendizado. Vamos cuidar
            de introduzir educação financeira às crianças e adolescentes de
            forma a terem uma melhor compreensão do mundo da tecnologia e
            digital a sua volta. sobre como funciona o mercado, quais os
            melhores canais de distribuição e divulgação. Os alunos têm contato
            com conceitos de marketing, vendas, direito, contabilidade, que são
            extremamente importantes para qualquer empreendedor digital e ou
            futuro empresário.
          </p>

          <button onClick={closeModal2}>Close</button>
        </div>
      </Modals>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Methodologies;
