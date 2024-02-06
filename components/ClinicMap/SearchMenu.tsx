import React from 'react';
import styles from './SearchMenu.module.css';
import { FaLocationArrow } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Clinics from './SearchMenuItem'


const SearchMenu: React.FC = () => {
  return (
    <div className={styles.searchMenu}>
      <div className={styles.searchBar}>
        <input className={styles.input} type="text" placeholder="Buscar clínica" />
        <button className={styles.searchButton}>
          {<CiSearch size={25} />}
        </button>
      </div>
      <ul className={styles.clinicList}>
        {Clinics.map(clinic => (
          <li key={clinic.id} className={styles.clinicItem}>
            <span className={styles.clinicName}>{clinic.name}</span>
            <span className={styles.clinicCount}> <BsArrowUpRightCircle /> {clinic.count} Clínicas</span>
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
        <FaLocationArrow  className={styles.iconButton}/> Ver todas nuestras clinicas
          </div>
           </div>

    </div>
    
  );
};

export default SearchMenu;
