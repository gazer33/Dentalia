import Image from 'next/image';
import React from 'react';
import styles from './image.module.css'
const ImageDentalia = () => {
    return(

        <div className={styles.imageContainer}>
        <Image
          src="/image/carousel/carreteMujer.png" // Ruta de tu imagen
          alt="Descripción de la imagen"
          width={1400} // Ancho deseado de la imagen
          height={500} // Altura deseada de la imagen
        />
      </div> 
    )
} 
export default ImageDentalia;