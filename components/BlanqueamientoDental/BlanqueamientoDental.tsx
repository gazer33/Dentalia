import React from 'react'
import styles from './BlanqueamientoDental.module.css'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


type MyButtonProps = {
  
  label: string;
}

const MyButton: React.FC<MyButtonProps> = ({ label }) => {
  return (
    <button className={styles.myButton} >
     <div className={styles.button}> <span className={styles.plusSign}>+</span>
      <span className={styles.label}>{label}</span>
      </div>
      <span className={styles.btnLine}></span>
    </button>
  );
};

const BlanqueamientoDental = () => {
  return (
    <>
    <div className={styles.Blanqueamiento}>
      <div className={styles.titleContainer}>
        <h2>Blanqueamiento dental: todo lo que debes saber</h2>
      <div className={styles.btnTitleContainer}>
      <MyButton label="Leer más"  />
      </div>
      <div className={styles.imageContainer}>
    <Image src={"/image/Blanqueamiento/blanqueamiento.png"} alt='imagen' width={675} height={430} />
      </div>
      </div>
      <div className={styles.preguntasImgContainer}>
        <div className={styles.pregunta1}>
        <p>¿Qué es el bruxismo y cómo puede afectar tu salud bucal?</p>
        <div className={styles.btnPregunta1}>
        <MyButton label="Leer más"  />
        </div>
        </div>
        <div className={styles.pregunta2}>
        <p>¿Debo tomar medicamento si tengo dolor de muelas?</p>
        <div className={styles.btnPregunta2}>
        <MyButton label="Leer más"  />
        </div>
        <div className={styles.btnContainer}>
        <button className={styles.btn}> Más articulos</button>
        </div>
        </div>
        <div className={styles.logo}>
          <Image src={"/image/Logo.png"} width={170} height={100} alt='image' />
        
        </div>
      </div>
    </div>
    </>
  )
}

export default BlanqueamientoDental