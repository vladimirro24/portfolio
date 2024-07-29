import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi I'm Vlady</h1>
                <p className={styles.description}>I’m a software engineer specializing in web development, with experience in front-end and a strong understanding of back-end. I’m passionate about creating amazing websites and, in addition, I’m a big fan of pandas.</p>
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
