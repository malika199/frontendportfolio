
import React from "react";

import classes from "./footer.module.scss";
import Link from "next/link";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#experience",
    display: "Projects",
  },
  {
    path: "#skills",
    display: "Skills",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
     
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </div>
        
            <div className={`${classes.footer__creator}`}>
              <h6>Created by Malika</h6>
            </div>

          {/* ========= footer bottom ========= */}
       
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Developed by Malika Derfoufi. All right
                reserved.{" "}
              </p>
            </div>
       
    </footer>
  );
};

export default Footer;
