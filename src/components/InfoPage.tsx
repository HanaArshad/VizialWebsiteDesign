import { FunctionComponent, useEffect } from "react";
import styles from "./InfoPage.module.css";

type InfoPageType = {
  onClose?: () => void;
};

const InfoPage: FunctionComponent<InfoPageType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.infoPage}>
      <b className={styles.factors}>Factors:</b>
      <div className={styles.mapIcosDescription} data-animate-on-scroll>
        <div className={styles.pedestriansNumberOfContainer}>
          <p className={styles.pedestriansNumberOfPedestr}>
            <b className={styles.pedestrians}>{`Pedestrians: `}</b>
            <span>
              Number of pedestrians that passes through this street per day
            </span>
          </p>
          <p className={styles.pedestriansNumberOfPedestr}>
            <b className={styles.pedestrians}>{`Lightings: `}</b>
            <span>Brightness of this street at night under the light</span>
          </p>
          <p className={styles.pedestriansNumberOfPedestr}>
            <b className={styles.pedestrians}>{`Violence: `}</b>
            <span>Threatening behaviours such as fights</span>
          </p>
          <p className={styles.pedestriansNumberOfPedestr}>
            <b className={styles.pedestrians}>{`Weapons: `}</b>
            <span>Presence of dangerous objects such as knives and guns</span>
          </p>
          <p className={styles.pedestriansNumberOfPedestr}>
            <b className={styles.pedestrians}>{`Substances: `}</b>
            <span>
              Presence of abusive substances such as alcohol and cigarettes
            </span>
          </p>
          <p className={styles.pedestriansNumberOfPedestr}>
            <b className={styles.pedestrians}>{`Maintenance: `}</b>
            <span>{`Cleanliness of this street based on rubbish `}</span>
          </p>
        </div>
      </div>
      <img
        className={styles.closebuttonLevelsIcon}
        alt=""
        src="/vector3.svg"
        onClick={onClose}
      />
    </div>
  );
};

export default InfoPage;
