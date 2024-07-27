import React from 'react'

import styles from "./Stack.module.css";
import skills from "../../data/skills.json";
import skillsnet from "../../data/skillsnet.json";
import { getImageUrl } from "../../utils";

export const Stack = () => {
  return (
    <section className={styles.container} id="stack">
      <h2 className={styles.title}>Dev Stack</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
          </div>
        </div>
        <h2 className={styles.title}>Network Stack</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
          {skillsnet.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
