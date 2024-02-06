import { FunctionComponent, useEffect } from "react";
import styles from "./RatingInfo.module.css";

type RatingInfoType = {
  onClose?: () => void;
};

const RatingInfo: FunctionComponent<RatingInfoType> = ({ onClose }) => {
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
    <div className={styles.ratingInfo}>
      <div className={styles.lightingStandardsState10LxWrapper}>
        <div className={styles.lightingStandardsStateContainer}>
          <p className={styles.lightingStandardsState}>
            Lighting standards state 10 lx (Lux) as the acceptable level of
            street illumination.
          </p>
          <p className={styles.lightingStandardsState}>&nbsp;</p>
          <p className={styles.lightingStandardsState}>
            A 10* rating represents illumination level greater than or equal to
            10 lx.
          </p>
          <p className={styles.lightingStandardsState}>&nbsp;</p>
          <p className={styles.lightingStandardsState}>
            The rating drops by 1* for each lx below 10.
          </p>
          <p className={styles.blankLine2}>
            <b>&nbsp;</b>
          </p>
          <p className={styles.lightingStandardsState}>
            <b>&nbsp;</b>
          </p>
          <p className={styles.lightingStandardsState}>
            <b>&nbsp;</b>
          </p>
        </div>
      </div>
      <b className={styles.lighting}>Lighting:</b>
      <b className={styles.maintenence}>Maintenence:</b>
      <div className={styles.mapIcosDescription} data-animate-on-scroll>
        <div className={styles.basedOnGlobalContainer}>
          <p className={styles.lightingStandardsState}>
            Based on global standards, streets are graded A, B, C or D based on
            the level of litter observed.
          </p>
          <p className={styles.lightingStandardsState}>&nbsp;</p>
          <p className={styles.lightingStandardsState}>
            Grade A: No litter or refuse
          </p>
          <p className={styles.lightingStandardsState}>&nbsp;</p>
          <p className={styles.lightingStandardsState}>
            Grade B: Predominantly free of litter and refuse
          </p>
          <p className={styles.lightingStandardsState}>&nbsp;</p>
          <p className={styles.lightingStandardsState}>
            Grade C: Widespread distribution of litter or refuse
          </p>
          <p className={styles.lightingStandardsState}>&nbsp;</p>
          <p className={styles.lightingStandardsState}>
            Grade D: Heavily littered
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

export default RatingInfo;
