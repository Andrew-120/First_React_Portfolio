import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h2 className={`text-uppercase fs-1 fw-bolder mb-3 ${styles.tColor}`}>Contact Section</h2>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="bar2"></div>
          <i className={`fa-solid fa-star mx-4 ${styles.tColor}`}></i>
          <div className="bar2"></div>
        </div>

        <form className="w-50">
          <input type="text" placeholder="userName" className="form-control mb-3" />
          <input type="number" placeholder="userAge" className="form-control mb-3" />
          <input type="email" placeholder="userEmail" className="form-control mb-3" />
          <input type="password" placeholder="userPassword" className="form-control mb-3" />
          <button className= {`btn text-white ${styles.btnColor}`}>Send Message</button>
        </form>
      </div>
    </>
  );
}
