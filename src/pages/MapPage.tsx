import { FunctionComponent, useState, useCallback } from "react";
import { Button } from "@mui/material";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import Logout from "../components/Logout";
import InfoPage from "../components/InfoPage";
import { useNavigate } from "react-router-dom";
import styles from "./MapPage.module.css";
import { MapComponent } from "../Map/Map";
import { useAiOutput } from '../backend_connection/AiOutputContext';
import { aiOuputMD } from "../Map/ManualData"; //**For manually added data, if want you want to use algorithm then delete */

const MapPage: FunctionComponent = () => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
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

  const onLevel1Click = useCallback(() => {
    navigate("/map-page-level-1");
  }, [navigate]);

  const onLevel3Click = useCallback(() => {
    navigate("/map-page-level-3");
  }, [navigate]);

  const onLevel2Click = useCallback(() => {
    navigate("/map-page-level-2");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsMapP2Click = useCallback(() => {
    navigate("/trends");
  }, [navigate]);

  const onWarningsMapP2Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onHomeMapP2Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/records-responded-to");
  }, [navigate]);

  const openInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(true);
  }, []);

  const closeInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(false);
  }, []);

  const onGroupButton1Click = useCallback(() => {
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
      <div className={styles.mapPage2}>
        <div className={styles.topbarMapp2}>
          <div className={styles.topbarMapp2Child} />
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
        </div>
        <img
          className={styles.imagemapMapp2Icon}
          alt=""
          src="/imagemap-mapp2@2x.png"
        />
        
        /* For manually added data, if want you want to use algorithm then delete aiOuputMD replace with aiOutput*/
        <div className={styles.headerbarMapp2}>
          <div className={styles.mapComponent}>
            <MapComponent aiOutput={aiOuputMD}/>  
          </div>
          <div className={styles.headerbarMapp2Child} />
          <b className={styles.safetyLevelMap}>Safety Level Map</b>
        </div>
        <div className={styles.leveloptionsMapp2}>
          <div className={styles.leveloptionsMapp2Child} />
          <button className={styles.level1} onClick={onLevel1Click}>
            Level 1
          </button>
          <button className={styles.level3} onClick={onLevel3Click}>
            Level 3
          </button>
          <button className={styles.level2} onClick={onLevel2Click}>
            Level 2
          </button>
          <div className={styles.leveloptionsMapp2Item} />
          <div className={styles.leveloptionsMapp2Inner} />
        </div>
        <div className={styles.allelementssidebarMapp2}>
          <div className={styles.sidebarMapp2} />
          <button className={styles.logoutMapp2} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon1} alt="" src="/group.svg" />
            <div className={styles.logoutMapp2Child} />
          </button>
          <button
            className={styles.statisticsMapp2}
            onClick={onStatisticsMapP2Click}
          >
            <button className={styles.trendsWrapper}>
              <div className={styles.trends}>Trends</div>
            </button>
            <img className={styles.groupIcon2} alt="" src="/image-statistics.svg" />
          </button>
          <button
            className={styles.warningsMapp2}
            onClick={onWarningsMapP2Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.trends}>Warnings</div>
            </button>
            <img className={styles.vectorIcon1} alt="" src="/warnings.png" />
          </button>
          <div className={styles.allelementssidebarMapp2Child} />
          <button className={styles.mapsMapp2}>
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon4} alt="" src="/mapsW.svg" />
            
          </button>
          <button className={styles.homeMapp2} onClick={onHomeMapP2Click}>
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon5} alt="" src="/home-image-statistics.svg" />
          </button>

          <button className={styles.recordsimageParent}
            onClick={onGroupButtonClick}>
            
            <img className={styles.recordsimageIcon} alt=""src="/RecordsImage1.svg" />
            <div className={styles.records}>Records</div>
          </button>
        
        </div>
        <img
          className={styles.vectorIcon6}
          alt=""
          src="/info.svg"
          onClick={openInfoPagePopup}
        />
        <button className={styles.vectorParent} onClick={onGroupButton1Click}>
          <img className={styles.vectorIcon7} alt="" src="/policies.svg" />
          <div className={styles.policies}>Policies</div>
        </button>
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
      {isLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogoutPopup}
        >
          <Logout onClose={closeLogoutPopup} />
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
    </>
  );
};

export default MapPage;
