import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

import MainView from '../../components/MainView/mainView'
import { cursoData } from '../../data/Curso/Curso';
import './cursodetails.scss'
import Card from '../../components/Card/Card';
import Lottie from 'react-lottie'

interface CursoData {
  id: number,
  name: string,
  description: string,
  image: any,
  slug: string,
  cursos: any
}

interface IParams {
  slug: string
}

function CursoDetails() {

  const [cursoDt, setCursoDt] = useState<CursoData>();
  const { slug } = useParams<IParams>();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cursoDt?.image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    
    const curso = cursoData.find(curso => curso.slug === slug)
    setCursoDt(curso)

  }, [slug]);

  return (
    <div className="curso-details-container">

      <MainView>
        <div className="lottie-container-2">
          <Lottie
            options={defaultOptions}
          /></div>
      </MainView>


      <div className="course-description-content">

        <h1>{cursoDt?.name}</h1>
     

      </div>


      <div className="curso-details-content" >
         
          {

            cursoDt?.cursos.map((curso: { name: string; description: string; image: string; slug: string; }) => (
              <Card
                  title={curso.name}
                  text={curso.description}
                  image={curso.image}
                  to={curso.slug} 
                  curso={cursoDt.slug}
              /> 
            ))
          }
      </div>
      <Footer />
    </div>
  )
}

export default CursoDetails
