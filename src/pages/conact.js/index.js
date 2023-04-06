import React from "react";
import Link from "next/link";
import SectionSubtitle from "../../components/UI/subtitle/SectionSubtitle";
import classes from "./contact.module.scss";

import {
  FaPhone,
  FaUser,
  FaEnvelope,
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <SectionSubtitle subtitle="Contact me" />
      <h3 className="mt-4 mb-4">Contact with me</h3>

      <ul className={`${classes.contact__info__list}`}>
        <li className={`${classes.info__item}`}>
          <span>
            <FaUser />
          </span>
          <p>Malika - Derfoufi</p>
        </li>
        <li className={`${classes.info__item}`}>
          <span>
            <FaEnvelope />
          </span>
          <p>malika.derfoufii@gmail.com</p>
        </li>
        <li className={`${classes.info__item}`}>
          <span>
            <FaPhone />
          </span>
          <p>0769506749</p>
        </li>
      </ul>

      <div className={`${classes.social__links}`}>
        <Link href="#">
          <FaGithub />
        </Link>
        <Link href="#">
          <FaFacebookF />
        </Link>
        <Link href="#">
          <FaLinkedinIn />
        </Link>
        <Link href="#">
          <FaInstagram />
        </Link>
      </div>
     
    </section>
  );
};

export default Contact;
