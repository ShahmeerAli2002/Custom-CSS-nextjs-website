"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Stats.module.css';

interface Stat {
  value: number;
  label: string;
  icon: string;
}

const statsData: Stat[] = [
  { value: 1068, label: "Happy Clients", icon: "/image/HappyClients.png" },
  { value: 230, label: "Completed Projects", icon: "/image/CompletedProjects.png" },
  { value: 230, label: "Prospective Clients", icon: "/image/ProspectiveClients.png" },
  { value: 230, label: "Ideas Realized", icon: "/image/IdeasRealized.png" },
];

const Stats: React.FC = () => {
  return (
    <section className={styles.stats}>
      <h2 className={styles.heading}>Stats</h2>
      <div className={styles.statsGrid}>
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <img src={stat.icon} alt={stat.label} className={styles.icon} />
            <h3 className={styles.value}>{stat.value}</h3>
            <p className={styles.label}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
