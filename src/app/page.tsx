import React from 'react';
import Link from 'next/link';
import Banner from '../../components/Banner/Banner';
import ImageDentalia from '../../public/image/ImageDentalia/Image'
import DentaliaExperience from '../../components/DentaliaExperience/DentaliaExperience';
import styles from './page.module.css'
import Testimonials from '../../components/testimonials/testimonials'
import ClinicList from '../../components/ClinicMap/ClinicList';
const DentalPage: React.FC = () => {
  return (
    <div>
      <header>
        <Banner />
      </header>
      
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
    </div>
  );
};

export default DentalPage;
