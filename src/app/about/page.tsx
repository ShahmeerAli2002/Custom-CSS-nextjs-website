"use client";

import React from 'react';
import styles from './about.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>
          Videograph is a creative agency dedicated to capturing unforgettable moments through the lens. Our team of experienced videographers and editors work tirelessly to bring stories to life, using state-of-the-art equipment and innovative techniques to ensure every project exceeds expectations.
        </p>
        <div className={styles.mission}>
          <h3>Our Mission</h3>
          <p>
            To deliver high-quality video production services that highlight the essence of each story we tell, while consistently pushing the boundaries of creativity and innovation.
          </p>
        </div>
        <div className={styles.values}>
          <h3>Our Core Values</h3>
          <ul>
            <li>Creativity</li>
            <li>Commitment to Quality</li>
            <li>Client Satisfaction</li>
            <li>Innovation</li>
            <li>Integrity</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
