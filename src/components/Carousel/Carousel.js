import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import style from "./styles.module.scss";


import programmer from "../../assets/img/carousel-images/programmer.svg";
import gamer from "../../assets/img/carousel-images/gamer.svg";
import graphic_Designer from "../../assets/img/carousel-images/graphic_designer.svg";
import web_designer from "../../assets/img/carousel-images/webdesigner.svg";
import robotic from "../../assets/img/carousel-images/kid-robotic.svg";
import animation from "../../assets/img/carousel-images/anmation.svg";
import digital_market from "../../assets/img/carousel-images/digita_market.svg";


import { cursoData } from "../../data/Curso/Curso";

export default function carousel_exe() {
  const items = [
    {
      name: cursoData[0].name,
      image: programmer,
      background: "#9FE6A0",
      path: cursoData[0].path,
      description: cursoData[0].description,
    },
    {
      name: cursoData[1].name,
      image:gamer,
      background: "#fdbf52",
      path: cursoData[1].path,
      description: cursoData[1].description,
    },
    {
      name: cursoData[2].name,
      image: graphic_Designer,
      background: "#ff75a0",
      path: cursoData[2].path,
      description: cursoData[2].description,
    },
    {
      name: cursoData[3].name,
      image: robotic,
      background: "#00EAD3",
      path: cursoData[3].path,
      description: cursoData[3].description,
    },
    {
      name: cursoData[4].name,
      image:  digital_market,
      background: "#CC9B6D",
      path: cursoData[4].path,
      description: cursoData[4].description,
     
    },
  /*  {
      name: cursoData[5].name,
      image:  digital_market, 
      background: "#867AE9",
      path: cursoData[5].path,
    
    },*/
   /* {
      name: cursoData[6].name,
      image:animation , 
      background: "#CC9B6D",
      path: cursoData[5].path,
    },*/
  ];

  return (
    <Carousel
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#f2f2f2",
        },
      }}
      indicators = {false}
    
      next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      }
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <section
        className={style.carousel_master}
        style={{ backgroundColor: props.item.background }}
      >
        <div className={style.slide_image}>
          <div className={style.carousel_content_image}>
            <img src={props.item.image} alt = {props.item.name} />
          </div>

          <div className={style.description_area}>
            <button type="text">
              <a
                href={props.item.path}
                style={{ color: props.item.background }}
              >
                Check It Out  <i className="fas fa-chevron-right" ></i>
              </a>
            </button>

            <h1> {props.item.name} </h1>

            <p> {props.item.description} </p>
          </div>
        </div>
      </section>
    </Paper>
  );
}
