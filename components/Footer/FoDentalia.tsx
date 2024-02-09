import React from 'react'
import Image from 'next/image'
import styles from './footerDentalia.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const FoDentalia = () => {
  return (
    <>
     <div className={styles.footerContainer}>
        <div className={styles.aboveContainer}>
            <div className={styles.logoContainer}>
                <Image src={"/image/LogoFooter.png"} alt='image' width={200} height={110}  />
                <p>2024 © Clínica dental dentalia®</p>
            </div>
            <div className={styles.subscriptionContainer}>
            <div className={styles. descriptionSubs}>
                <p>Suscribirme al newsletter</p>
                <div className={styles.inputContainer}>
                    <input type="text" placeholder='hola@dentalia.com'  className={styles.input} />
                    <button className={styles.btn}>SUSCRIBIRME</button>
                </div>
            </div>
            </div>
            <div className={styles.urgenciasContainer}>
            <div className={styles.socials}>
                <div><FaFacebookF /></div>
                <div><FaInstagram /></div>
                <div><FaLinkedinIn /></div>
                <div> <FaTwitter /></div>
            </div>
            <div className={styles.urgenciasData}>
                <button className={styles.urgenciasBtn}>URGENCIAS</button>
            <div className={styles.urgenciasLine}></div>
            <div className={styles.contactosUrgencias}>
                <p className={styles.contactoTitulo}>Contáctanos</p>
                <p className={styles.numero}><FaPhoneAlt /> 800 003 3682</p>
                <span>hola@dentalia.com</span>
                </div>
            </div>
            
            </div>
           
        </div>
        <div className={styles.line}> 
        </div>
        
        <div className={styles.dataContainer}>
            <div className={styles.Promociones}>
            <h4>Promociones</h4>
            <ul>
        <li>Promociones vigentes</li>
         <li>Términos y condiciones</li>
         <li>Política de privacidad</li>
        </ul>
        </div>
        <div className={styles.Contactos}>
        <h4>Contáctanos</h4>
        <ul>
        <li>Clinícas</li>
         <li>Tratamientos</li>
         <li>Sé parte de dentalia</li>
         <li>Facturación</li>
        </ul>
        </div>
        <div className={styles.CoberturaDental}>
        <h4>Cobertura dental</h4>
        <ul>
        <li> Empresas</li>
         <li>Consulta de beneficios</li>
         <li>Política de privacidad</li>
        </ul>
        </div>
        <div className={styles.ConoceMas}>
        <h4>Conoce más</h4>
        <ul>
        <li>Un concepto innovador en clínicas dentales.</li>
         <li>Tu experiencia en dentalia.</li>
         <li>Evalúa tu salud dental para prevenir.</li>
        </ul>
        </div>
        </div>
    </div>    
    <div className={styles.underContainer}>
    <p>Clave de autorización COFEPRIS: 213300201A1384</p>
    <p>Responsable sanitario: </p>
 <p>Lorena Guadalupe Badial Ochoa / Universidad Autónoma de Guadalajara / Cédula No. 2063153 </p>
    </div>
    </>
  )
}

export default FoDentalia