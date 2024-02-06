import React from 'react'
import Image from 'next/image'
import styles from './tecnologia.module.css'
const Tecnologia = () => {
  return (
    <>
    
    <div className={styles.tecnologiaText}>
      <h2>Tecnología de vanguardia</h2> </div>
       <div className={styles.divDescription}><p className={styles.description} >Nuestras clínicas está equipadas con la
         más avanzada tecnología dental,
          nuestros ortopantomógrafos permiten 
          realizar radiografías panorámicas y
           por consiguiente diagnósticos mucho más confiables.</p>
           </div>
           <div className={styles.imagesRow}>
            <Image src="/image/tecnologiaImages/tecnologiaImg1.png" alt='img1'  className={styles.imagesTec} width={394} height={372}/>
            <Image src="/image/tecnologiaImages/tecnologiaImg2.png" alt='img2'  className={styles.imagesTec} width={394} height={372} />
            <Image src="/image/tecnologiaImages/tecnologiaImg3png.png" alt='img3'  className={styles.imagesTec} width={394} height={372}/>
           </div>
           </>
  )
}

export default Tecnologia