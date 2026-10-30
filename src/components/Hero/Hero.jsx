import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi I'm Vlady</h1>
                <p className={styles.description}>I'm a Software Engineer with multidisciplinary experience in software development, networking, telecommunications, and IT infrastructure. Passionate about building innovative solutions, solving technical challenges, and continuously learning. Open to new opportunities and professional growth.</p>
                <a 
                    href="/Resume.pdf" 
                    download="Resume-Vladimir-Rodriguez.pdf" 
                    className={styles.resumetBtn}
                >
                    DOWNLOAD RESUME
                </a>
            </div>
            <img
                src={getImageUrl("hero/me.jpeg")}
                alt="Me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.buttonBlur} />
        </section>
    );
}
