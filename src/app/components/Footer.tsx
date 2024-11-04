"use client";

import React from 'react';
import styles from '../footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Videograph</h2>
          <p>Videograph is an award-winning, full-service creative agency specializing in video production.</p>
        </div>

        <div className={styles.links}>
          <h3>Who we are</h3>
          <ul>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Locations</a></li>
          </ul>
        </div>

        <div className={styles.links}>
          <h3>Our work</h3>
          <ul>
            <li><a href="#">Films</a></li>
            <li><a href="#">Commercials</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2024 All rights reserved | This website is made with 💙 by Shahmeer Ali</p>
        <div className={styles.socialIcons}>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
