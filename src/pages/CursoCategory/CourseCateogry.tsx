import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainView from "../../components/MainView/mainView";
import { cursoData } from "../../data/Curso/Curso";
import "./coursecategory.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import EventbriteButton from "react-eventbrite-popup-checkout";


interface ICurso {
  name: string;
  image: string;
  slug: string;
  aulas: string;
  duracao: string;
  nivel: string;
  turma: string;
  idade: string;
  preco: number;
  description: string;
  periodo: any;
  conteudo: string;

}

interface IParams {
  slug: string;
  slug_2: string;
}

const btn1Style = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "20px 0 0 0",
  backgroundColor: "#e4431b",
};

const btn2Style = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  backgroundColor: "#e4431b",
};

function CourseCateogry() {
  const [showDescription, setShowDescription] = useState("");
  const [showContent, setShowContent] = useState("none");
  const [bgBtn1, setBGbtn1] = useState(btn1Style);
  const [bgBtn2, setBGbtn2] = useState({});

  const [curso, setCurso] = useState<ICurso>();
  const { slug, slug_2 } = useParams<IParams>();

  useEffect(() => {
    const curso: any = cursoData.find((curso) => curso.slug === slug);
    const curso2 = curso.cursos.find((curso: any) => curso.slug === slug_2);

    setCurso(curso2);
  }, [slug, slug_2]);

  return (
    <div className="course-category-container">
      <MainView>
        <img src={curso?.image} alt="img" />
      </MainView>

      <div className="curso-tab-content">
        <div className="curso-tab">
          <div className="tab-header">
            <div className="tab-header-btn">
              <p
                onClick={() => {
                  setBGbtn1(btn1Style);
                  setBGbtn2({});
                  setShowContent("none");
                  setShowDescription("");
                }}
                className="btn-header btn-1"
                style={bgBtn1}
              >
                Descricção
              </p>

              <p
                onClick={() => {
                  setBGbtn2(btn2Style);
                  setBGbtn1({
                    boxShadow: "",
                    borderRadius: "",
                    backgroundColor: "",
                  });
                  setShowContent("");
                  setShowDescription("none");
                }}
                className="btn-header btn-2"
                style={bgBtn2}
              >
                Conteúdo
              </p>
            </div>

            <div className="tab-header-sign">
              <Link to="/inscricao">Inscreva-se</Link>
            </div>
          </div>
          <div className="tab-body" style={{ display: showDescription }}>
            <div className="content-desc">
              <h3 className="titles">{curso?.name}</h3>
              <p>{curso?.description}</p>
            </div>
            <div className="content-details">
              <h3 className="titles">Detalhes</h3>

              <table>
                <tbody>
                  <tr>
                    <td className="awesome-icon">
                      {" "}
                      <i className="ico fas fa-user"></i>
                    </td>
                    <td className="desc-name">Idade</td>
                    <td>{curso?.idade}</td>
                  </tr>
                  <tr>
                    <td className="awesome-icon">
                      <i className="ico fas fa-clock"></i>
                    </td>
                    <td className="desc-name">Duração</td>
                    <td>{curso?.duracao}</td>
                  </tr>
                  <tr>
                    <td className="awesome-icon">
                      <i className="ico fas fa-level-up-alt"></i>
                    </td>
                    <td className="desc-name">Nivel</td>
                    <td>{curso?.nivel}</td>
                  </tr>
          
                </tbody>
              </table>
            </div>
          </div>
          <div className="tab-body" style={{ display: showContent }}>
            <div className="content-content">{curso?.conteudo}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CourseCateogry;
