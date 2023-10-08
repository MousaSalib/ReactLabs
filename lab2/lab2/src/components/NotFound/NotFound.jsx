import React from 'react'
import styles from "./NotFound.module.css"
import notFoundImage from '../../assets/notFoundImage.jpg'

export default function NotFound() {
  return (
    <>
        <div className={styles.bg}>
            <img src= {notFoundImage}/>
            <h1 className={styles.con}>Not Found!</h1>
        </div>
    </>
  )
}
