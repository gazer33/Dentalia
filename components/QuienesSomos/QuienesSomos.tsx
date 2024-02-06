import React from 'react'
import Image from 'next/image'
import styles from './QuienesSomos.module.css'
import Counter1 from '../counter/Counter'
import Counter2 from '../counter/counter2'
import Counter3 from '../counter/counter3'
import Counter4 from '../counter/counter4'

const QuienesSomos = () => {
  return (
<>
    <div className={styles.ImgText}>
<div className={styles.ImgContainer}>
<Image src="/image/QuienesSomosImage/QuienesSomos.png" alt='imagen' width={675} height={476} />
</div>
<div className={styles.text}>
<h2>¿Quiénes Somos?</h2>
<p>Clinicas dentales con más de 17 años <br /> cuidando tu sonrisa.</p>
<div className={styles.butonContainer}>
  <button className={styles.buton}>Conoce más</button>
  </div>
</div>
    </div>
    <div className={styles.datos}>
<div className={styles.circule}>
  <p><Counter1 /></p>
</div>
 <p>Odontólogos y especialistas en general</p>
 <div className={styles.circule}>
 <p><Counter2 /></p>
 </div>
 <p>Poblaciones cubiertas con nuestra red dentalia</p>
 <div className={styles.circule}>
 <p><Counter3 /></p>
 </div>
 <p>Atendemos a +140 mil pacientes al año</p>
 <div className={styles.circule}>
 <p><Counter4 /></p>
 </div>
 <p>Contamos con + de 65 clínicas propias</p>
 </div>
</>
    )
}

export default QuienesSomos