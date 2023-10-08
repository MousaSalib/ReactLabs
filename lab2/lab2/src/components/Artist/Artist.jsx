import React from 'react'
import imgArtist from '../../assets/artist-bg.jpg'
import styles from './Artist.module.css'
export default function Artist() {
  return (
    <div>
      <div className='container-fluid'>
        <div className={styles.child}>
          <img src= {imgArtist}/>
          <div className={styles.grand}>
            <h1 className='text-light'>DJ Remerson Huke</h1>
            <h4 className='text-light'>Lead DJ On Deadpoll</h4>
            <p className='text-center text-light'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore
            </p>
            <div className={styles.icons}>
              <i className={`${styles.icon} fa fa-facebook text-light icon`} aria-hidden="true"></i>
              <i className={`${styles.icon} fa fa-twitter text-light icon`} aria-hidden="true"></i>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}
