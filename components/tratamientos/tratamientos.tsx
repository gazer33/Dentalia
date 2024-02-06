import React from 'react'
import styles from './tratamientos.module.css'
import Image from 'next/image'

type MyButtonProps = {
  
  label: string;
}

const MyButton: React.FC<MyButtonProps> = ({ label }) => {
  return (
    <button className={styles.myButton} >
      <span className={styles.plusSign}>+</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
};



const Tratamientos = () => {
  return (
    <>
    <div className={styles.tratamientosTitulo}>
        <h2>Tratamientos</h2>
    </div>
    <p className={styles.tratamientosDes}>En dentalia eres nuestra prioridad, por eso contamos con los <br /> mejores tratamientos para todas las edades.</p>
    <div className={styles.imagesRow}>
          <div className={styles.columnImage} >
              <Image src="/image/tratamientosImages/tratamientosimg1.png" alt='img1'  className={styles.imagesTra} width={360} height={521}/> 
              <h3 className={styles.subtitulo}> Tratamientos estéticos</h3>
              <p>Encuentra lo más nuevo y moderno en odontología estética.</p>
          <MyButton label="Conocer más"  />

              </div>

          <div className={styles.columnImage}>  
          <Image src="/image/tratamientosImages/tratamientosimg2.png" alt='img1'  className={styles.imagesTra} width={360} height={520}/> 
          <h3 className={styles.subtitulo}> Tratamientos clínicos</h3>
          <p>Contamos con los mejores especialistas en salud dental para toda la familia.
          </p>
          <MyButton label="Conocer más"  />

          </div>
          <div className={styles.columnImage}>  
          <Image src="/image/tratamientosImages/tratamientosimg3.png" alt='img1'  className={styles.imagesTra} width={360} height={520}/> 
          <h3 className={styles.subtitulo}>Tratamientos niños</h3>
          <p >Cuida desde el inicio la salud dental de tus hijos</p>
          <MyButton label="Conocer más"  />
          </div>
            
           </div>
    </>
  )
}

export default Tratamientos