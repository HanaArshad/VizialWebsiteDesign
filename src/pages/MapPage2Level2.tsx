import { FunctionComponent, useState, useCallback } from "react";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./MapPage2Level2.module.css";
import { MapComponent } from "../Map/Map_level3";
import { useAiOutput } from '../backend_connection/AiOutputContext';

const MapPage2Level2: FunctionComponent = () => {
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

  const onLevel2TextClick = useCallback(() => {
    navigate("/map-page-level-2");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsMapP2L3Click = useCallback(() => {
    navigate("/trends");
  }, [navigate]);

  const onWarningsMapP2L3Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsMapP2L3Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeMapP2L3Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onRecordsMapp2L3Click = useCallback(() => {
    navigate("/records-responded-to");
  }, [navigate]);

  const onPolicyMapP2L3Click = useCallback(() => {
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
      <div className={styles.mapPage2Level3}>
        <div className={styles.topbarMapp2Level3}>
          <div className={styles.topbarMapp2Level3Child} />
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
          className={styles.imagemapMapp2Level3}
          alt=""
          src="/imagemap-mapp2@2x.png"
        />
        <div className={styles.headerbarMapp2Level3}>
          <div className={styles.mapComponent}>
            <MapComponent aiOutput={aiOutput}/>
          </div>
          <div className={styles.headerbarMapp2Level3Child} />
          <b className={styles.safetyLevelMap}>Safety Level Map</b>
        </div>
        <div className={styles.leveloptionsMapp2Level3}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.level1} onClick={onLevel1TextClick}>
              Level 1
            </div>
            <div className={styles.groupInner} />
            <div className={styles.level3}>Level 3</div>
            <div className={styles.level2} onClick={onLevel2TextClick}>
              Level 2
            </div>
          </div>
        </div>
        <div className={styles.allelementssidebarMapp2L3}>
          <div className={styles.sidebarMapp2L3} />
          <button className={styles.logoutMapp2L3} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon1} alt="" src="/group.svg" />
            <div className={styles.logoutMapp2L3Child} />
          </button>
          <button
            className={styles.statisticsMapp2L3}
            onClick={onStatisticsMapP2L3Click}
          >
            <button className={styles.trendsWrapper}>
              <div className={styles.trends}>Trends</div>
            </button>
            <img className={styles.groupIcon2} alt="" src="/image-statistics.svg" />
          </button>
          <button
            className={styles.warningsMapp2L3}
            onClick={onWarningsMapP2L3Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.trends}>Warnings</div>
            </button>
            <img className={styles.vectorIcon2} alt="" src="/warnings.png" />
          </button>
          <div className={styles.allelementssidebarMapp2L3Child} />
          <button className={styles.mapsMapp2L3} onClick={onMapsMapP2L3Click}>
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon3} alt="" src="/mapsW.svg" />
           
          </button>
          <button className={styles.homeMapp2L3} onClick={onHomeMapP2L3Click}>
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon6} alt="" src="/Home-image-statistics.svg" />
          </button>
          <button
            className={styles.recordsMapp2l3}
            onClick={onRecordsMapp2L3Click}
          >
            <img
              className={styles.recordsimageIcon}
              alt=""
              src="/RecordsImage1.svg"
            />
            <div className={styles.records}>Records</div>
          </button>
          <button
            className={styles.policyMapp2l3}
            onClick={onPolicyMapP2L3Click}
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

export default MapPage2Level2;
