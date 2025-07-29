import React, { useEffect, useState } from 'react';
import styles from './Portfolio.module.css';
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const [imgSrc, setImgSrc] = useState("");
  const [isLayerVisible, setIsLayerVisible] = useState(false);

  function display(event) {
    const imgElement = event.currentTarget.querySelector("img");
    if (imgElement) {
      setImgSrc(imgElement.src);
      setIsLayerVisible(true);
    }
  }

  function hideLayer() {
    setIsLayerVisible(false);
  }

  const images = [p1, p2, p3, p1, p2, p3];

  return (
    <>
      <div className={`container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 py-5 text-center ${styles.marginHeading}`}>
        <h2 className={`text-uppercase fs-1 fw-bolder mb-3 ${styles.tColor}`}>Portfolio Section</h2>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="bar2"></div>
          <i className={`fa-solid fa-star mx-4 ${styles.tColor}`}></i>
          <div className="bar2"></div>
        </div>

        <div className="container">
          <div className="row g-4">
            {images.map((img, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className={`overflow-hidden rounded-3 position-relative ${styles.position}`} onClick={display}>
                  <img src={img} alt="portfolio" className="w-100 h-auto object-fit-cover rounded-3" />
                  <div className={`${styles.portfolioOverlay} w-100 h-100 position-absolute d-flex align-items-center justify-content-center start-0 top-0`}>
                    <i className={`fa-solid fa-plus text-white ${styles.faPlus}`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isLayerVisible && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.7)", zIndex: 999 }}
          onClick={hideLayer}
        >
          <img src={imgSrc} alt="enlarged" className="img-fluid rounded-3 shadow" style={{ maxHeight: "80%", maxWidth: "80%" }} />
        </div>
      )}
    </>
  );
}
