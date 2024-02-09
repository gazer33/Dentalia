import React from 'react';
import Link from 'next/link';
import Banner from '../../components/Banner/Banner';
import ImageDentalia from '../../public/image/ImageDentalia/Image'
import DentaliaExperience from '../../components/DentaliaExperience/DentaliaExperience';
import styles from './page.module.css'
import Testimonials from '../../components/testimonials/testimonials'
import ClinicList from '../../components/ClinicMap/ClinicList';
import './globals.css'
import Tecnologia from '../../components/tecnologia/tecnologia';
import Tratamientos from '../../components/tratamientos/tratamientos';
import QuienesSomos from '../../components/QuienesSomos/QuienesSomos';
import Beneficios from '../../components/Beneficios/Beneficios';
import BlanqueamientoDental from '../../components/BlanqueamientoDental/BlanqueamientoDental';
import FoDentalia from '../../components/Footer/FoDentalia'
import Message from '../../components/Message/message';
const DentalPage: React.FC = () => {
  return (
    
    <div className={styles.body}>
      <header>
        <Banner />
      </header>
      <Message />
      <ImageDentalia />
     <div className={styles.tituloExperiencia}>
      <h2 >
        Vive la experiencia dentalia
        </h2>
         </div>
     <section className={styles.experience}>
     
     
     <DentaliaExperience/>

     <Testimonials />
     </section>
     <ClinicList />

     <section className={styles. tecnologia}>
      <Tecnologia />

    <Tratamientos />

     </section>
     <section className={styles.QuienesSomos}>
      <QuienesSomos />
     </section>
<section className={styles.beneficios}>
    <Beneficios />
    </section>

    <section>
    <BlanqueamientoDental />
    </section>  

    <section className={styles.footer}>


    </section>
    <section>
      <FoDentalia />
    </section>
    </div>
    
    
   
    
    
  );
};

export default DentalPage;
