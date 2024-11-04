"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../services.module.css';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const serviceData: Service[] = [
  {
    icon: "/image/MotionGraphics.jpeg", // Replace with actual path to your icons
    title: "Motion Graphics",
    description: "Whether you halfway through the editing process, we can put the finishing touches.",
  },
  {
    icon: "/image/ScriptwritingandEditing.png", 
    title: "Scriptwriting and Editing",
    description: "Whether you halfway through the editing process, we can put the finishing touches.",
  },
  {
    icon: "/image/VideoDistribution.png",
    title: "Video Distribution",
    description: "Producing creative solutions to deliver your videos across various platforms.",
  },
  {
    icon: "/image/VideoHosting.png",
    title: "Video Hosting",
    description: "Professional video hosting to reach your audience with ease and efficiency.",
  },
];

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.header}
      >
        <h2>Our Services</h2>
        <p>What We Do?</p>
      </motion.div>
      
      <div className={styles.serviceCards}>
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <img src={service.icon} alt={service.title} className={styles.icon} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
