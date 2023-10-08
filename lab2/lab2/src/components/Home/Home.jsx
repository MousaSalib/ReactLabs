import React from 'react';
import homeBg from '../../assets/bg-home.jpg'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <div className={`${styles.container} container-fluid`}>
        <div>
          <img src={homeBg} className={styles.imgHome}/>
        </div>
        <div>
          <h1 className='text-warning text-center'>Hallween Party</h1>
          <p className='text-center text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <div className="d-flex justify-content-center m-5">
            <button className='btn btn-warning'>Explore more</button>
          </div>
          
        </div>
        
      </div>
    </>
  )
}
