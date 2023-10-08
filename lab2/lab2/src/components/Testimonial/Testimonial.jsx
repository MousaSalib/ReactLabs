import React from 'react'
import styles from './Testimonial.module.css'
import img1 from '../../assets/img5.jpg'
import img2 from '../../assets/imageMag.jpg'

export default function Testimonial() {
  return (
    <div>
      <div className={`${styles.container} container-fuid`}>
        <h1 className={`${styles.header} text-warning`}>Halloween Testimonial</h1>
        <div className={`${styles.content}`}>
          <img src={img1}/>
          <div className='ms-2'>
            <h3 className='text-warning'>Tukang Shihir</h3>
            <h5 className='text-light '>Man Eater</h5>
            <p className='text-light col-7'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris.</p>
          </div>
          <img src={img2}/>
          <div className='ms-2'>
            <h3 className='text-warning'>Tukang Shihir</h3>
            <h5 className='text-light '>Man Eater</h5>
            <p className='text-light  col-7'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris.</p>
          </div>
        </div>
      
      </div>
    </div>
  )
}
