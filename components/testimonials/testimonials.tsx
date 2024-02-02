// React component code
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import styles from './testimonials.module.css'; // Asegúrate de que este es el camino correcto al archivo CSS
import Clients from './testimonialsItem';

const Testimonials = () => {
  return (
    <>
      <h2 className={styles.testimonialsTitle}>
        Nuestros pacientes
        </h2>
      <div className={styles.list}>
        {Clients.map((client, index) => (
          <React.Fragment key={index}>
            <div className={styles.testimonials}>
              {Array.from({ length: client.ranking }, (_, i) => (
                <span key={i} className={styles.star}>
                  <FaStar size={19}/>
                </span>
              ))}
              <br />
              <h3>{client.text}</h3>
              <div className={styles.author}>
                <Image src={client.author_image} alt='image' width={50} height={50} />
                <p>{client.author}</p>
                <p>{client.company}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Testimonials;
