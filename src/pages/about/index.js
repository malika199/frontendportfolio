import React from "react";
import Link from "next/link";
import SectionSubtitle from "../../components/UI/subtitle/SectionSubtitle";
import ServicesItem from "@/components/UI/serviceItems/ServicesItem";
import Image from "next/image";

// import img01 from "../../public/images/img-01.jpg";
// import img02 from "../../public/images/img-02.jpg";
// import img03 from "../../public/images/img-03.jpg";
// import img04 from "../../public/images/hero.jpg";

import classes from "./about.module.scss";

const About = () => {
  return (
    <section id="about">
                      <SectionSubtitle subtitle="About me" />

      <div classes class="col-lg-12 container text-center">
        <div class="row">
          <div class="col col-lg-6">
            <div className={`${classes.about__content}`}>
             

              <div className=" d-flex align-items-center gap-5">
                <div>
                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Problem Solving
                  </h6>

                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Search A Lot
                  </h6>
                </div>

                <div>
                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Creative Idea
                  </h6>

                  <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    High Quality
                  </h6>
                </div>
              </div>

              
            </div>
          </div>

          <div class="col col-lg-6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
