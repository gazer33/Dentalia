import React from 'react';
import Image from 'next/image';
import SearchMenu from './SearchMenu'; // Importa tu componente de menú de búsqueda
import styles from './ClinicList.module.css'; // Importa tus estilos CSS

const ClinicList: React.FC = () => {
  return (
  <>
  <div></div>
    <div className={styles.tituloClinica}><h2>Ubica tu clínica</h2></div>
    <p className={styles.description}>Existe una clínica dentalia® cerca de ti. Encuéntranos en + 65 clínicas a lo largo del país.</p>
    <div className={styles.ClinicList}>
      <div className={styles.imageContainer}>
        <Image src="/image/ClinicListImage/imageMap.png" alt='' width={580} height={400}/ >
      </div>
      <div className={styles.searchMenuContainer}>
        <SearchMenu />
      </div>
    </div>
    </>
  );
};


export default ClinicList;
