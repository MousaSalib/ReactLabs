import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { tokenContext } from '../../context/tokenContext'
import logo from "../../images/logo300.png";
import styles from "./Navbar.module.css"


export default function Navbar() {
  let {token, setToken} = useContext(tokenContext);
  let navigate = useNavigate()
  function logOut() {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate('login')

  }
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <img src={`${logo}`} className={styles.img}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {token?  <>
                  <li className="nav-item">
                    <Link className="nav-link" to={'profile'}>Profile</Link>
                  </li>  
                  <li className="nav-item">
                    <button className="nav-link" to={'login'} onClick={logOut}>Logout</button>
                  </li>  
      
                </> 
                : 
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'register'}>Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'login'}>Login</Link>
                  </li> 
                </>
      }
      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}
