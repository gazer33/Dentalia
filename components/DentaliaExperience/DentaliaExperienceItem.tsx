import React from 'react';
import Image from 'next/image';
import styles from './DentaliaExperienceItem.module.css';

interface DentaliaExperienceItemProps {
  icon: JSX.Element
  title: string;
  description: string;
}

const DentaliaExperienceItem: React.FC<DentaliaExperienceItemProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default DentaliaExperienceItem;
