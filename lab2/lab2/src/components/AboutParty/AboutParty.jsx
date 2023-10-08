import React from 'react'
import styles from './AboutParty.module.css'

export default function AboutParty() {
  return (
    <div className={`${styles.container} container-fluid`}>
      <div className={`${styles.child}`}>
        <h1 className='text-warning text-center m-5'>About the party</h1>
        <p className='text-center m-5 text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <div className="d-flex justify-content-center m-5">
          <button className="btn btn-warning">Know more</button>
        </div>
      </div>
    </div>
  )
}
