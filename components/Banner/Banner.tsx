import React from "react";
import Link from "next/link";
import styles from './Banner.module.css';
import { fromJSON } from "postcss";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";



const Banner = () => {
  return (
    <>
   <div className={styles.banner}>
  <p>
    Obtén una valoración dental integral GRATIS en tu 1ra cita. 
    <a href="#" className="text-blue-300 underline hover:text-blue-200">
      ¡Agenda ahora!
    </a>
  </p>
</div>



<div className={styles.header}> 

  <div className={styles.logoContainer}>
    <Image src="/image/Logo.png" alt="Logo" width={115} height={50} />
  </div>
  
  <nav className={styles.navigation}>
   <a href="#" className="text-gray-700 hover:text-gray-900">Quienes somos</a>
        <a href="#">Clinicas </a>
        <a href="#"className={styles.menuItem}>Tratamientos </a>
        <a href="#">Empresas </a>
        <a href="#">Cobertura dental </a>
        <a href="#">Blog </a>
  </nav>
  <div className={styles.btnsContainer}>
    <button className={styles.llamanos}><FaPhone /> Llámanos </button>
    <button className={styles.Agenda}>Agenda Gratis </button>

  </div>
<label htmlFor="check" className={styles.iconMenuOpen}> <IoIosMenu /> </label>

</div>

   
 
</>
  );
};

export default Banner;