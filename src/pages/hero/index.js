import React from "react";
import SectionSubtitle from "../../components/UI/subtitle/SectionSubtitle";
// import { Button } from 'reactstrap';
import Link from "next/link";
import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      {/* <SectionSubtitle subtitle="Hello" /> */}

     <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col col-lg-6">
            <div  class={classes.fadein} >
            <div className={`${classes.hero__content}`}>
              <h2 className="mt-3 mb-3">I&apos;m Malika Derfoufi</h2>
              <h5 className="mb-4">FullStack Developer</h5>
              <p>
              Créative, polyvalente et passionnée par
              la programmation informatique avec un bon œil pour le design.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">Download CV</Link>
                </button>

               
              </div>
            </div>
            </div>
            </div>
          {/* ========== hero img ============= */}
          <div class="col col-lg-6">
            <div className={`${classes.hero__img} text-end`}>
              <img  className={classes.moving_image} alt="hero-image" src="https://res.cloudinary.com/doieuxngb/image/upload/v1680736261/ddo8wu9wigiqbhmam2db.jpg"  width="400" height="400" /> 

              
                 

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">4 Years</h5>
                </div>
              </div>
            </div>
         </div>
        </div>
      </div>  
    </section>
  );
};

export default Hero;
