import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi I'm Vlady</h1>
                <p className={styles.description}>I'm a Software Engineer with one year of experience in web development. Reach out if you're looking for custom development!</p>
                <a 
                    href="/resume.pdf" 
                    download="Resume-Vladimir-Rodriguez.pdf" 
                    className={styles.resumetBtn}
                >
                    DOWNLOAD RESUME
                </a>
            </div>
            <img
                src={getImageUrl("hero/me.png")}
                alt="Me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.buttonBlur} />
        </section>
    );
}
