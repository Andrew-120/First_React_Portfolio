import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return <>
  <nav className={`navbar navbar-expand-lg navbar-dark text-white fixed-top p-4 mb-5 ${styles.bgColor}`}>
  <div className="container">
    <NavLink className="navbar-brand text-uppercase fs-2 fw-bolder" to={''}>Start FrameWork</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <NavLink className= {({isActive})=> isActive ? `rounded-3 nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-3 py-2 ${styles.hamada}` : `nav-link text-uppercase text-white fw-bold mt-3 mt-md-0`} aria-current="page"  to={'/about'}>About</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className={({isActive})=> isActive ? `rounded-3 nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-3 py-2 ${styles.hamada}` : `nav-link text-uppercase text-white fw-bold mt-3 mt-md-0`} to={'/portfolio'}>Portfolio</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className={({isActive})=> isActive ? `rounded-3 nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-3 py-2 ${styles.hamada}` : `nav-link text-uppercase text-white fw-bold mt-3 mt-md-0`} to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}
