import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>

        <ul className={styles.links}>
          <li className={styles.link}>
          <a href="mailto:vladimirro.business@gmail.com">
            <img 
            className={styles.contact}
            src={getImageUrl("contact/emailIcon.png")} 
            alt="Email" />
          </a>
          </li>
          <li className={styles.link}>
          <a target="_blank" href="https://www.linkedin.com/in/vladimir-rodriguez/">
            <img
              className={styles.contact}
              src={getImageUrl("contact/linkedinIcon.png")} 
              alt="LinkedIn"/>
          </a>
          </li>
          <li className={styles.link}>
          <a target="_blank" href="https://www.github.com/vladimirro24">
            <img 
            className={styles.contact}
            src={getImageUrl("contact/githubIcon.png")} 
            alt="Github" />
          </a>
          </li>
        </ul>
        <h1>Feel free to reach out!</h1>
        <h3>Created by vlady🐼</h3>
        <h3>All Rights Reserved © 2024</h3>
      </div>
      
    </footer>
  );
};