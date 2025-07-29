import React from 'react'
import styles from './Footer.module.css';

export default function Footer() {
  return <>
  <footer className="text-white">
    <div className={`tex-center text-white p-5 ${styles.bgColor}`}>
    <div className="container">
      <div className="row py-5">
        <div className="col-md-4 text-center mb-5">
          <h3 className='text-uppercase'>Location</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className="col-md-4 text-center mb-5">
        <h3 className="text-uppercase mb-3 text-white">Around the Web</h3>
        <div className="d-flex justify-content-center gap-3">
        <span className={styles.iconRing}>
        <i className="fa-brands fa-facebook-f"></i>
        </span>
        <span className={styles.iconRing}>
        <i className="fa-brands fa-twitter"></i>
        </span>
        <span className={styles.iconRing}>
        <i className="fa-brands fa-linkedin-in"></i>
        </span>
        <span className={styles.iconRing}>
        <i className="fa-brands fa-dribbble"></i>
      </span>
  </div>
</div>

         <div className="col-md-4 text-center mb-5">
          <h3 className='text-uppercase'>About Freelancer</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
    </div>

    <div className={`text-center py-2 d-flex justify-content-center ${styles.bgColor2}`}>
      <p>Copyright &copy; Your Website 2022</p>
    </div>

    
  </footer>
  </>
}
