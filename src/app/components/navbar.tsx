"use client";

import React, { useState } from 'react';
import styles from '../page.module.css';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>VIDEOGRAPH</div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/stats">Stats</Link></li>
        <li><Link href="/servicesfi">Services</Link></li>
        <li><Link href="/team">Team</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className={styles.socialIcons}>
        {/* Social media icons can be added here */}
      </div>
    </nav>
  );
};

export default Navbar;
