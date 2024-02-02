import Image from 'next/image';
import React from 'react';
import styles from './image.module.css'
const ImageDentalia = () => {
    return(

        <div className={styles.imageContainer}>
        <Image
          src="/carousel/carreteMujer.png" // Ruta de tu imagen
          alt="Descripción de la imagen"
          width={500} // Ancho deseado de la imagen
          height={300} // Altura deseada de la imagen
          layout="responsive" // Esto hace que la imagen sea responsive
        />
      </div> 
    )
} 
export default ImageDentalia;