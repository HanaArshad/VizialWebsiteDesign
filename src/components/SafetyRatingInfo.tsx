import { FunctionComponent } from "react";
import styles from "./SafetyRatingInfo.module.css";

type SafetyRatingInfoType = {
  onClose?: () => void;
};

const SafetyRatingInfo: FunctionComponent<SafetyRatingInfoType> = ({
  onClose,
}) => {
  return (
    <div className={styles.safetyRatingInfo}>
      <div className={styles.safetyRatingInfoChild} />
      <b className={styles.standards}>Standards</b>
      <div className={styles.infrastructureHighContainer}>
        <p className={styles.infrastructure}>
          <b>Infrastructure</b>
          (based on external survey)
        </p>
        <p className={styles.infrastructure}>
          <span>
            <span className={styles.high1}>High</span>
            <span>: 80% of infrastructure has statisfactory cleanliness and quality</span>
          </span>
        </p>
        <p className={styles.infrastructure}>
          <span>
            <span className={styles.medium1}>Medium</span>
            <span>: 60% of infrastructure has statisfactory cleanliness and quality</span>
          </span>
        </p>
        <p className={styles.infrastructure}>
          <span>
            <span className={styles.low1}>Low</span>
            <span>: 40% of infrastructure has statisfactory cleaniness and quality</span>
          </span>
        </p>
      </div>
      <div className={styles.perceptionOfSafetyContainer}>
        <p className={styles.infrastructure}>
          <span>
            <b className={styles.perceptionOfSafety}>Perception of Safety</b>
          </span>
          <span>
            <span> (based on external survey)</span>
          </span>
        </p>
        <p className={styles.infrastructure}>
          <span>
            <span className={styles.high1}>High</span>
            <span>{`: >80% of population voting safe`}</span>
          </span>
        </p>
        <p className={styles.infrastructure}>
          <span>
            <span className={styles.medium1}>Medium</span>
            <span>{`: >60% of population voting safe`}</span>
          </span>
        </p>
        <p className={styles.infrastructure}>
          <span>
            <span className={styles.low1}>Low</span>
            <span>{`: >40% of population voting safe`}</span>
          </span>
        </p>
      </div>
      <img
        className={styles.closebuttonLevelsIcon}
        alt=""
        src="/vector5.svg"
        onClick={onClose}
      />
    </div>
  );
};

export default SafetyRatingInfo;
