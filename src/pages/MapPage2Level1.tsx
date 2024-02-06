import { FunctionComponent, useState, useCallback } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./MapPage2Level1.module.css";

const MapPage2Level1: FunctionComponent = () => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openNotificationPopUp = useCallback(() => {
    setNotificationPopUpOpen(true);
  }, []);

  const closeNotificationPopUp = useCallback(() => {
    setNotificationPopUpOpen(false);
  }, []);

  const openProfilePopUp = useCallback(() => {
    setProfilePopUpOpen(true);
  }, []);

  const closeProfilePopUp = useCallback(() => {
    setProfilePopUpOpen(false);
  }, []);

  const openInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(true);
  }, []);

  const closeInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(false);
  }, []);

  const onLevel1TextClick = useCallback(() => {
    navigate("/map-page-level-1");
  }, [navigate]);

  const onLevel3TextClick = useCallback(() => {
    navigate("/map-page-level-3");
  }, [navigate]);

  const onAllElementsSideBarMapP2L2ContainerClick = useCallback(() => {
    navigate("/policy-comparison");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsMapP2L2Click = useCallback(() => {
    navigate("/trends");
  }, [navigate]);

  const onWarningsMapP2L2Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsMapP2L2Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeMapP2L2Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onREcordsMapP2L2Click = useCallback(() => {
    navigate("/records-responded-to");
  }, [navigate]);

  const onPolicyMapP2L2Click = useCallback(() => {
    navigate("/policy-comparison");
  }, [navigate]);

  return (
    <>
      <div className={styles.mapPage2Level2}>
        <div className={styles.topbarMapp2Level2}>
          <div className={styles.topbarMapp2Level2Child} />
          <img
            className={styles.screenshot202311271652466}
            alt=""
            src="/logo@2x.png"
          />
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector1.svg"
            onClick={openNotificationPopUp}
          />
          <img
            className={styles.groupIcon}
            alt=""
            src="/group1.svg"
            onClick={openProfilePopUp}
          />
          <img
            className={styles.vectorIcon1}
            alt=""
            src="/info.svg"
            onClick={openInfoPagePopup}
          />
        </div>
        <img
          className={styles.mapimageMapp2Level2}
          alt=""
          src="/imagemap-mapp2@2x.png"
        />
        <div className={styles.headerbarMapp2Level2}>
          <div className={styles.headerbarMapp2Level2Child} />
          <b className={styles.safetyLevelMap}>Safety Level Map</b>
        </div>
        <div className={styles.leveloptionsMapp2Level2}>
          <div className={styles.leveloptionsMapp2Level2Child} />
          <div className={styles.level1} onClick={onLevel1TextClick}>
            Level 1
          </div>
          <div className={styles.leveloptionsMapp2Level2Item} />
          <div className={styles.leveloptionsMapp2Level2Inner} />
          <div className={styles.level3} onClick={onLevel3TextClick}>
            Level 3
          </div>
          <div className={styles.level2}>Level 2</div>
        </div>
        <div
          className={styles.allelementssidebarMapp2L2}
          onClick={onAllElementsSideBarMapP2L2ContainerClick}
        >
          <div className={styles.sidebarMapp2L2} />
          <button className={styles.logoutMapp2L2} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon1} alt="" src="/group.svg" />
            <div className={styles.logoutMapp2L2Child} />
          </button>
          <button
            className={styles.statisticsMapp2L2}
            onClick={onStatisticsMapP2L2Click}
          >
            <button className={styles.trendsWrapper}>
              <div className={styles.trends}>Trends</div>
            </button>
            <img className={styles.groupIcon2} alt="" src="/image-statistics.svg" />
          </button>
          <button
            className={styles.warningsMapp2L2}
            onClick={onWarningsMapP2L2Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.trends}>Warnings</div>
            </button>
            <img className={styles.vectorIcon2} alt="" src="/warnings.png" />
          </button>
          <div className={styles.allelementssidebarMapp2L2Child} />
          <button className={styles.mapsMapp2L2} onClick={onMapsMapP2L2Click}>
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon3} alt="" src="/mapsW.svg" />
          
          </button>
          <button className={styles.homeMapp2L2} onClick={onHomeMapP2L2Click}>
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon6} alt="" src="/home-image-statistics.svg" />
          </button>
          <button
            className={styles.recordsMapp2l2}
            onClick={onREcordsMapP2L2Click}
          >
            <img
              className={styles.recordsimageIcon}
              alt=""
              src="/RecordsImage1.svg"
            />
            <div className={styles.records}>Records</div>
          </button>
          <button
            className={styles.policyMapp2l2}
            onClick={onPolicyMapP2L2Click}
          >
            <img className={styles.vectorIcon7} alt="" src="/policies.svg" />
            <div className={styles.policies}>Policies</div>
          </button>
        </div>
      </div>
      {isNotificationPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <NotificationPopUp onClose={closeNotificationPopUp} />
        </PortalPopup>
      )}
      {isProfilePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeProfilePopUp}
        >
          <ProfilePopUp onClose={closeProfilePopUp} />
        </PortalPopup>
      )}
      {isInfoPagePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeInfoPagePopup}
        >
          <InfoPage onClose={closeInfoPagePopup} />
        </PortalPopup>
      )}
      {isLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup}
        >
          <Logout onClose={closeLogoutPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default MapPage2Level1;



