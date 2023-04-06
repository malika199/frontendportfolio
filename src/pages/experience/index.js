import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import  classes  from "./experience.module.scss"
import { getExperiences } from "../../Graphql/Query";
import { FaGithub } from 'react-icons/fa';

import Link from "next/link";
import {  useRef } from 'react';
import { useDrag } from 'react-use-gesture';
import SectionSubtitle from "@/components/UI/subtitle/SectionSubtitle";


function Experience(props) {
  const { loading, error, data } = useQuery(getExperiences);
  const ref = useRef(null);
  const itemRef = useRef(null);

  const handleScroll = (position = 'middle', pixels) => {
    let movePixel;
    if (pixels) {
      movePixel = -pixels * 2;
    } else {
      switch (position) {
        case 'left':
          movePixel = -(itemRef?.current?.clientWidth || 0);
          break;
        case 'right':
          movePixel = itemRef?.current?.clientWidth || 0;
          break;
        case 'middle':
        default:
          movePixel = (itemRef?.current?.clientWidth || 0) * (items.length / 2);
      }
    }
    if (ref?.current) {
      ref?.current?.scrollTo({
        left: (ref?.current?.scrollLeft || 0) + movePixel,
        behavior: 'smooth',
      });
    }
  };

  const bind = useDrag(({ down, movement: [mx] }) => {
    if (down && mx !== 0) {
      handleScroll(undefined, mx);
    }
  });


//   console.log(data);
  if (loading) return "Loading";

  return (
    

    <div class="container mt-4 P-5">
       
      <SectionSubtitle subtitle="Projects" />

      <div className="row" >
        {data.getExperiences && data.getExperiences.length > 0
                ? data.getExperiences.map((data) => (
                    <div  className="col-4" scope="row" key={data.title}>
                        <div className={`${classes.portfolio__item}`}>

                           <h6 className="p-2">  {data.title} </h6>
                            <p className={classes.data}> Du <strong>{new Date(data.datedebut).toLocaleDateString("fr-FR")}</strong>  Au <strong>{new Date(data.datefin).toLocaleDateString("fr-FR")}</strong>  </p>
                            <p className={classes.data}> {data.description}</p> 
                            <a className={classes.data} href={data.link}>
                            <FaGithub />
                            </a>
                     </div>
                    </div>
                    ))
                : "No data availible"}
      </div>
    </div>
  );
}

export default Experience;
