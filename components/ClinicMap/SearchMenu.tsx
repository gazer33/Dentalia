import React from 'react';
import styles from './SearchMenu.module.css';
import { FaLocationArrow } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";

interface Clinic {
  id: number;
  name: string;
  count: number;
}

const clinics: Clinic[] = [
  { id: 1, name: 'Chihuahua', count: 2 },
  { id: 2, name: 'Ciudad de México', count: 25 },
  { id: 1, name: 'Chihuahua', count: 2 },
  { id: 2, name: 'Ciudad de México', count: 25 },
  { id: 1, name: 'Chihuahua', count: 2 },
  { id: 2, name: 'Ciudad de México', count: 25 },
  { id: 1, name: 'Chihuahua', count: 2 },
  { id: 2, name: 'Ciudad de México', count: 25 },
  { id: 1, name: 'Chihuahua', count: 2 },
  { id: 2, name: 'Ciudad de México', count: 25 },
  { id: 1, name: 'Chihuahua', count: 2 },
  { id: 2, name: 'Ciudad de México', count: 25 },
  { id: 1, name: 'Chihuahua', count: 2 },
  { id: 2, name: 'Ciudad de México', count: 25 },
  { id: 1, name: 'Chihuahua', count: 2 },
  { id: 2, name: 'Ciudad de México', count: 25 },
  // ... Añade más clínicas aquí
];

const SearchMenu: React.FC = () => {
  return (
    <div className={styles.searchMenu}>
      <div className={styles.searchBar}>
        <input className={styles.input} type="text" placeholder="Buscar clínica" />
        <button className={styles.searchButton}>
          {/* Icono de búsqueda */}
        </button>
      </div>
      <ul className={styles.clinicList}>
        {clinics.map(clinic => (
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
