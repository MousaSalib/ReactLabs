import React from 'react'
import styles from './Contact.module.css';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className={`${styles.cont} container-fluid  w-100 fixed-bottom pt-3`}>
      <div className={`${styles.form}`}>
        <form className="d-flex justify-content-center">
          <input className="form-control me-2 w-50 text-center" type="email" placeholder="Your E-mail adress here" aria-label="Search"/>
          <button className="btn btn-outline-warning" type="submit">Subscribe</button>
        </form>
      </div>
      <div className={`${styles.icons} d-flex justify-content-center p-3`}>
        <Link to={"#"}><i className="ps-5 fa fa-facebook fa-2x text-light"></i></Link>
        <Link to={"#"}><i className="ps-5 fa fa-twitter fa-2x text-light"></i></Link>
        <Link to={"#"}><i className="ps-5 fa fa-linkedin fa-2x text-light"></i></Link>
        <Link to={"#"}><i className="ps-5 fa fa-instagram fa-2x text-light"></i></Link>
</div>

    
    </div>
  )
}
