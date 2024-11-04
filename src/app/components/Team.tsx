"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Team.module.css';

interface TeamMember {
  name: string;
  position: string;
  photo: string;
}

const teamData: TeamMember[] = [
  { name: "Alice Johnson", position: "Photographer", photo: "/image/team1.jpg" },
  { name: "John Smith", position: "Editor", photo: "/image/team2.jpeg" },
  { name: "Emily Davis", position: "Director", photo: "/image/team3.jpeg" },
  { name: "Michael Brown", position: "Producer", photo: "/image/team4.jpeg" },
];

const Team: React.FC = () => {
  return (
    <section className={styles.team}>
      <h2 className={styles.heading}>Nice to Meet <span>Our Team</span></h2>
      <div className={styles.teamGrid}>
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className={styles.teamMember}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <img src={member.photo} alt={member.name} className={styles.photo} />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.position}>{member.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
