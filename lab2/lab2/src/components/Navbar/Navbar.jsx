import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import Logo from "../../assets/logo.jpg"


export default function Navbar() {
  return (
    <>
        <nav className= 'navbar navbar-expand-lg navbar-warning bg-warning'>
            <div className="container">
               <Link className="navbar-brand" to={''}><img src={Logo} className={`${styles.logo}`}/></Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className= "navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className={`${styles.bg} nav-a active p-2`} aria-current="page" to={''}>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`${styles.bg} nav-a p-2`} to={'artist'}>Artist</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`${styles.bg} nav-a p-2`} to={'gallery'}>Gallery</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`${styles.bg} nav-a p-2`} to={'test'}>Testimonial</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`${styles.bg} nav-a p-2`} to={'about'}>AboutParty</Link>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
    </>
  )
}


