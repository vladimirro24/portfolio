import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pandaImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Ajusta según la visibilidad deseada
    );

    if (pandaImageRef.current) {
      observer.observe(pandaImageRef.current);
    }

    return () => {
      if (pandaImageRef.current) {
        observer.unobserve(pandaImageRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/pandaImage.png")}
          alt="Me sitting with a laptop"
          className={`${styles.aboutImage} ${isVisible ? styles.visible : styles.hidden}`}
          ref={pandaImageRef}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.image} src={getImageUrl("about/dev.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.image} src={getImageUrl("about/hardware.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>IT Support</h3>
              <p>
                I have experience in preventive maintenance of technological infrastructure.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.image} src={getImageUrl("about/switches.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Network Technician</h3>
              <p>
                I have designed, installed and configured wired and wireless networks in schools and companies.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
