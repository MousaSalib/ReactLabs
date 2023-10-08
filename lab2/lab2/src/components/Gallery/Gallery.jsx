import React from 'react'
import styles from './Gallery.module.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img5.jpg'

export default function Gallery() {
  return (
    <div className={`${styles.bg} container-fluid`}>
      <div className={`${styles.container}`}>
        <div>
          <img src={img1}/>
          <h4 className='text-warning text-center'>Vampire Sherk</h4>
          <p className='text-light text-center'>Special Guest</p>
        </div>
        <div className='taht'>
          <h4 className='text-warning text-center'>Blooddy Ricker</h4>
          <p className='text-light text-center'>Premium Guest</p>
          <img src={img2}/>
        </div>
         <div >
          <img src={img3}/>
          <h4 className='text-warning text-center'>Horror Fantsma</h4>
          <p className='text-light text-center'>Exclusive Guest</p>
        </div>
        <div className='taht'>
          <h4 className='text-warning text-center'>Tukang Sihir</h4>
          <p className='text-light text-center'>Exclusive Guest</p>
          <img src={img4}/>
        </div>
        
        
        
        
      </div>
    </div>  
  )
}
