import React from 'react';
import styles from './DentaliaExperience.module.css'
import DentaliaExperienceItem from './DentaliaExperienceItem';
import Image from 'next/image';
import { FaCalendarCheck } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { AiOutlineDollar } from "react-icons/ai";
import { MdBiotech } from "react-icons/md";

const DentaliaExperience = () => {
  return (
    
    <div className={styles.experienceContainer}>
     
    <DentaliaExperienceItem
      icon={<FaCalendarCheck size={42} /> }
      title="Valoración gratuita"
      description="Nosotros priorizamos tu salud, es por ello que en tu 1ª cita haremos una valoración del estado general de tu boca."
    />
    <div className={styles.line}></div>
    <DentaliaExperienceItem
      icon={<LuMapPin size={42} />}
      title="Ubicaciones y flexibilidad"
      description="Contamos con +65 clínicas alrededor del país. Abrimos de lunes a domingo."
    />
    <div className={styles.line}/>
    <DentaliaExperienceItem
      icon={<AiOutlineDollar  size={42} />}
      title="Facilidades de pago"
      description="Pagos en efectivo, con tarjetas, meses sin intereses y financiamiento."
    />
    <div className={styles.line}/>
    <DentaliaExperienceItem
      icon= {<MdBiotech  size={42} />}
      title="Tecnología de punta"
      description="La mejor tecnología de diagnóstico para cualquier tipo tratamiento dental."
    />
    
  </div>
  );
};

export default DentaliaExperience;
