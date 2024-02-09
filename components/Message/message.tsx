import React from 'react'
import styles from './message.module.css'
import { MdChat } from "react-icons/md";

const Message = () => {
  return (
    <>
    <div className={styles.circuleMsg}>
      
   <p> <MdChat  size={30}/></p>

       </div>
      </>
  )
}

export default Message