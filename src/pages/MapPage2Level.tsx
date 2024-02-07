import { FunctionComponent, useState, useCallback } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./MapPage2Level.module.css";
import { MapComponent } from "../Map/Map_level1";
import { useAiOutput } from '../backend_connection/AiOutputContext';

const MapPage2Level: FunctionComponent = () => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [isLogoutPopup1Open, setLogoutPopup1Open] = useState(false);
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

  const onLevel3TextClick = useCallback(() => {
    navigate("/map-page-level-3");
  }, [navigate]);

  const onLevel2TextClick = useCallback(() => {
    navigate("/map-page-level-2");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onWarningsMapP2L1Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onHomeMapP2L1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const openLogoutPopup1 = useCallback(() => {
    setLogoutPopup1Open(true);
  }, []);

  const closeLogoutPopup1 = useCallback(() => {
    setLogoutPopup1Open(false);
  }, []);

  const onStatisticsMapP2L1Click = useCallback(() => {
    navigate("/trends");
  }, [navigate]);

  const onWarningsMapP2L11Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsMapP2L11Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeMapP2L11Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onRecordsMapP2L1Click = useCallback(() => {
    navigate("/records-responded-to");
  }, [navigate]);

  const onPolicyMapP2L1Click = useCallback(() => {
    navigate("/policy-comparison");
  }, [navigate]);

  // call AiOutput: -> Connect to backend
  const aiOutputContext = useAiOutput();
  if (!aiOutputContext) {
    console.error("AiOutputContext is not available");
    return null;
  }
  const { aiOutput } = aiOutputContext; 
  // call AiOutput -> Connect to backend

  return (
    <>
      <div className={styles.mapPage2Level1}>
        <div className={styles.topbarMapp2l1}>
          <div className={styles.topbarMapp2l1Child} />
          <img
            className={styles.logoMapp2l1Icon}
            alt=""
            src="/logo-mapp2l1@2x.png"
          />
          <img
            className={styles.notificationMapp2l1Icon}
            alt=""
            src="/vector2.svg"
            onClick={openNotificationPopUp}
          />
          <img
            className={styles.profileMapp2l1Icon}
            alt=""
            src="/group1.svg"
            onClick={openProfilePopUp}
          />
          <img
            className={styles.vectorIcon}
            alt=""
            src="/info.svg"
            onClick={openInfoPagePopup}
          />
        </div>
        <img
          className={styles.mapimageMapp2l1Icon}
          alt=""
          src="/mapimage-mapp2l1@2x.png"
        />
        <div className={styles.headerbarMapp2l1}>
          <div className={styles.mapComponent}>
            <MapComponent aiOutput={aiOutput}/>
          </div>
          <div className={styles.headerbarMapp2l1Child} />
          <b className={styles.safetyLevelMap}>Safety Level Map</b>
        </div>
        <div className={styles.leveloptionsMapp2l1}>
          <div className={styles.leveloptionsMapp2l1Child} />
          <div className={styles.level1}>Level 1</div>
          <div className={styles.leveloptionsMapp2l1Item} />
          <div className={styles.leveloptionsMapp2l1Inner} />
          <div className={styles.level3} onClick={onLevel3TextClick}>
            Level 3
          </div>
          <div className={styles.level2} onClick={onLevel2TextClick}>
            Level 2
          </div>
        </div>
        <div className={styles.allelementssidebarMapp2L1}>
          <div className={styles.sidebarMapp2L1} />
          <button className={styles.logoutMapp2L1} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <div className={styles.logoutMapp2L1Child} />
          </button>
        
          <button
            className={styles.statisticsMapp2L1}
            onClick={onStatisticsMapP2L1Click}
          >
            <button className={styles.trendsWrapper}>
              <div className={styles.reportIncidents}>Trends</div>
            </button>
            <img className={styles.groupIcon2} alt="" src="/image-statistics.svg" />
          </button>
          <button
            className={styles.warningsMapp2L1}
            onClick={onWarningsMapP2L11Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.reportIncidents}>Warnings</div>
            </button>
            <img className={styles.vectorIcon3} alt="" src="/warnings.png" />
          </button>
          <div className={styles.allelementssidebarMapp2L1Child} />
          <button className={styles.mapsMapp2L1} onClick={onMapsMapP2L11Click}>
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon4} alt="" src="/mapsW.svg" />
            
          </button>
          <button className={styles.homeMapp2L1} onClick={onHomeMapP2L11Click}>
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon7} alt="" src="/home-image-statistics.svg" />
          </button>
          <button
            className={styles.recordsMapp2l1}
            onClick={onRecordsMapP2L1Click}
          >
            <img
              className={styles.recordsimageIcon}
              alt=""
              src="/RecordsImage1.svg"
            />
            <div className={styles.records}>Records</div>
          </button>
          <button
            className={styles.policyMapp2l1}
            onClick={onPolicyMapP2L1Click}
          >
            <img className={styles.vectorIcon13} alt="" src="/policies.svg" />
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
      {isLogoutPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup1}
        >
          <Logout onClose={closeLogoutPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default MapPage2Level;

