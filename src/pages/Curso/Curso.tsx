import React from "react";

import MainView from "../../components/MainView/mainView";
import CourseCard from "../../components/CoursesCard/courseCard";
import Footer from "../../components/Footer/Footer";
import { cursoData } from "../../data/Curso/Curso";
import curso from "../../assets/img/lottie/course.json";

import "./curso.scss";
import Lottie from "react-lottie";

function Curso() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: curso,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="curso-container">
      <MainView>
        <div className="lottie-container">
          <Lottie options={defaultOptions} />
        </div>
      </MainView>

      <div className="course-content">
        <div className="course-content-title">
          <h2 className="title">
            Nós trazemos os melhores cursos para as nossas crianças.{" "}
          </h2>
        </div>

        <div className="course">
          {cursoData.map((curso) => (
            <CourseCard
              to={curso.slug}
              title={curso.name}
              image={curso.image}
              text={curso.description}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Curso;
