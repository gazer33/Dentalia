import React from 'react'
import Image from 'next/image'
import styles from './Beneficios.module.css'
import { WiStars } from "react-icons/wi";
import { CgMathPercent } from "react-icons/cg";
import { FaTooth } from "react-icons/fa";

const Beneficios = () => {
  return (
    <>
    <div className={styles.beneficiosContainer}>

      <div className={styles.texts}>
        <span>
          Beneficios tangibles para colaboradores y aseguradoras
        </span>
        <p>
          + 2 millones de perosnas ya disfrutan de un plan dentalia.
          </p>
         
          <div className={styles.text1}>
           <div className={styles.line}></div>
            <div className={styles.icon}><WiStars size={60} /></div>
             <p className={styles.description}>Hasta 2 limpiezas dentales  sin costo al año incluidos</p>
          </div>
          <div className={styles.text2}>
          <div className={styles.line}></div> 
           <div className={styles.icon} ><CgMathPercent size={55} /> </div> 
           <p> Descuentos hasta del 70%</p>
          </div>
          <div className={styles.text3}>
          <div className={styles.line}></div>  
          <div className={styles.icon}><FaTooth size={25} /> </div> 
          <p>Salud dental integral con más de 400 tratameintos</p>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.btn}>
             Conocer beneficios 
            </button>
          </div>
       
      </div>
      <div className={styles.imgContianer}>
        <Image  src={"/image/Beneficios/BeneficiosImg.png"} width={600} height={629} alt='imagen'/>
      </div>
    </div>
    </>
  )
}

export default Beneficios