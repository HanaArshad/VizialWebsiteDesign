import { FunctionComponent, useState, useCallback } from "react";
import { Button, Icon } from "@mui/material";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import InfoPage from "../components/InfoPage";
import ProfilePopUp from "../components/ProfilePopUp";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onRectangleButton5Click = useCallback(() => {
    navigate("/trends");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);
  const onRectangleButton1Click1 = useCallback(() => {
    navigate("/trends");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/policy-comparison");
  }, [navigate]);

  const onRectangleButton3Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const openNotificationPopUp = useCallback(() => {
    setNotificationPopUpOpen(true);
  }, []);

  const closeNotificationPopUp = useCallback(() => {
    setNotificationPopUpOpen(false);
  }, []);

  const openInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(true);
  }, []);

  const closeInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(false);
  }, []);

  const openProfilePopUp = useCallback(() => {
    setProfilePopUpOpen(true);
  }, []);

  const closeProfilePopUp = useCallback(() => {
    setProfilePopUpOpen(false);
  }, []);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsDashboardClick = useCallback(() => {
    navigate("/trends");
  }, [navigate]);

  const onWarningsDashboardClick = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onWarningsDashboardClick1 = useCallback(() => {
    navigate("/trends");
  }, [navigate]);
  const onMapsDasboardClick = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeDashboardClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onRecordsDashboardClick = useCallback(() => {
    navigate("/records-responded-to");
  }, [navigate]);

  const onPoliciesDashboardClick = useCallback(() => {
    navigate("/policy-comparison");
  }, [navigate]);

  const onRectangleButton4Click = useCallback(() => {
    navigate("/records-responded-to");
  }, [navigate]);


  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.mapsBigbuttonDashboard}>
          <Button
            className={styles.mapsBigbuttonDashboardChild}
            disableElevation={true}
            color="secondary"
            variant="outlined"
            endIcon={<Icon>arrow_forward_sharp</Icon>}
            sx={{ borderRadius: "0px 0px 0px 0px", width: 95, height: 37 }}
            onClick={onRectangleButtonClick}
          >
            View
          </Button>
          <div className={styles.mapsBigbuttonDashboardItem} />
          <b className={styles.map}>Map</b>
          <img
            className={styles.mapsBigbuttonDashboardInner}
            alt=""
            src="/rectangle-59@2x.png"
          />
          <Button
            className={styles.rectangleButton}
            disableElevation={true}
            color="secondary"
            variant="outlined"
            endIcon={<Icon>arrow_forward_sharp</Icon>}
            sx={{ borderRadius: "0px 0px 0px 0px", width: 95, height: 37 }}
            onClick={onRectangleButton1Click}
          >
            View
          </Button>
        </div>
        <div className={styles.mapsBigbuttonDashboard1}>
          <div className={styles.rectangleDiv} />
          <b className={styles.policies}>Policies</b>
          <div className={styles.lighting}>Lighting</div>
          <div className={styles.violence}>Violence</div>
          <Button
            className={styles.mapsBigbuttonDashboardChild1}
            disableElevation={true}
            color="secondary"
            variant="outlined"
            endIcon={<Icon>arrow_forward_sharp</Icon>}
            sx={{ borderRadius: "0px 0px 0px 0px", width: 95, height: 37 }}
            onClick={onRectangleButton2Click}
          >
            View
          </Button>
        </div>
        <div className={styles.warningsBigbuttonDashboard}>
          <button className={styles.warningsBigbuttonDashboardChild} />
          <b className={styles.warnings}>Warnings</b>
          <div className={styles.warningsBigbuttonDashboardItem} />
          <div className={styles.latest02122023SatContainer}>
            <p className={styles.latest}>Latest:</p>
            <p className={styles.latest}>02/12/2023 Sat 9:30 am Queen St -</p>
            <p className={styles.latest}>{`CCTV 12     `}</p>
          </div>
          <Button
            className={styles.warningsBigbuttonDashboardInner}
            disableElevation={true}
            color="secondary"
            variant="outlined"
            endIcon={<Icon>arrow_forward_sharp</Icon>}
            sx={{ borderRadius: "0px 0px 0px 0px", width: 95, height: 37 }}
            onClick={onRectangleButton3Click}
          >
            View
          </Button>
          <div className={styles.warningsBigbuttonDashboardChild1} />
          <div className={styles.level3}>Level 3</div>
        </div>
        <div className={styles.topBarDashboard}>
          <img
            className={styles.logoDashboardIcon}
            alt=""
            src="/logo-dashboard@2x.png"
          />
          <img
            className={styles.notificationDashboardIcon}
            alt=""
            src="/vector1.svg"
            onClick={openNotificationPopUp}
          />
          <img
            className={styles.vectorIcon}
            alt=""
            src="/info.svg"
            onClick={openInfoPagePopup}
          />
          <img
            className={styles.profileDashboardIcon}
            alt=""
            src="/group1.svg"
            onClick={openProfilePopUp}
          />
        </div>
        <div className={styles.analysisBigbuttonDashboard}>
          <div className={styles.mapsBigbuttonDashboardItem} />
          <b className={styles.trends}>Trends</b>
          <img
            className={styles.fxemojibarchartIcon}
            alt=""
            src="/fxemojibarchart.svg"
          />
        </div>
        <div className={styles.allelementssidebarDashboard}>
          <div className={styles.sidebarDashboard} />
          <button className={styles.logoutDashboard} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <div className={styles.logoutDashboardChild} />
          </button>
          <button
            className={styles.statisticsDashboard}
            onClick={onStatisticsDashboardClick}
          >
            <button className={styles.trendsWrapper}>
              <div className={styles.trends1}>Trends</div>
            </button>
            <img className={styles.groupIcon1} alt="" src="/image-statistics.svg" />
          </button>
          <button
            className={styles.warningsDashboard}
            onClick={onWarningsDashboardClick}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.trends1}>Warnings</div>
            </button>
            <img className={styles.vectorIcon1} alt="" src="/warnings.png" />
          </button>
          <button className={styles.mapsDasboard} onClick={onMapsDasboardClick}>
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            
            <img className={styles.vectorIcon4} alt="" src="/maps.svg" />
          </button>
          <button
            className={styles.homeDashboard}
            onClick={onHomeDashboardClick}
          >
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon5} alt="" src="/homeW.png" />
          </button>
          <button
            className={styles.recordsDashboard}
            onClick={onRecordsDashboardClick}
          >
            <div className={styles.records}>Records</div>
            <img
              className={styles.recordsimageIcon}
              alt=""
              src="/RecordsImage1.svg"
            />
          </button>
          <button
            className={styles.policiesDashboard}
            onClick={onPoliciesDashboardClick}
          >
            <div className={styles.policies1}>Policies</div>
            <img className={styles.vectorIcon6} alt="" src="/policies.svg" />
          </button>
        </div>
        <div className={styles.recordsBigbuttonDashboard}>
          <div className={styles.recordsBigbuttonDashboardChild} />
          <b className={styles.records1}>Records</b>
          <div className={styles.recordsSymbol}>
            <div className={styles.irishPub}>Irish Pub</div>
            <div className={styles.tispyTerrace}>Tispy Terrace</div>
            <div className={styles.sportsBar}>Sports Bar</div>
            <div className={styles.velvetLounge}>Velvet Lounge</div>
            <div className={styles.tikiBar}>Tiki Bar</div>
            <img
              className={styles.recordsSymbolChild}
              alt=""
              src="/group-65.svg"
            />
            <img
              className={styles.recordsSymbolItem}
              alt=""
              src="/group-67.svg"
            />
            <img
              className={styles.recordsSymbolInner}
              alt=""
              src="/group-68.svg"
            />
            <img
              className={styles.recordsSymbolChild1}
              alt=""
              src="/group-69.svg"
            />
            <img
              className={styles.recordsSymbolChild2}
              alt=""
              src="/group-70.svg"
            />
            <img
              className={styles.recordsSymbolChild3}
              alt=""
              src="/group-66.svg"
            />
          </div>
          <Button
            className={styles.recordsBigbuttonDashboardItem}
            disableElevation={true}
            color="secondary"
            variant="outlined"
            endIcon={<Icon>arrow_forward_sharp</Icon>}
            sx={{ borderRadius: "0px 0px 0px 0px", width: 95, height: 37 }}
            onClick={onRectangleButton4Click}
          >
            View
          </Button>
        </div>
        <img className={styles.vectorIcon7} alt="" src="/redW1.svg" />
        <img
          className={styles.emojioneV1chartIncreasingIcon}
          alt=""
          src="/emojionev1chartincreasing.svg"
        />
        <img
          className={styles.heroiconsarrowUp16Solid}
          alt=""
          src="/heroiconsarrowup16solid.svg"
        />
        <div className={styles.heroiconsarrowUp16Solid1}>
          <img className={styles.vectorIcon8} alt="" src="/redarrow.svg" />
        </div>
        <img
          className={styles.flatColorIconsscatterPlot}
          alt=""
          src="/flatcoloriconsscatterplot.svg"
        />
        <Button
          className={styles.dashboardChild}
          disableElevation={true}
          color="secondary"
          variant="outlined"
          endIcon={<Icon>arrow_forward_sharp</Icon>}
          sx={{ borderRadius: "0px 0px 0px 0px", width: 95, height: 37 }}
          onClick={onRectangleButton5Click}
        >
          View
        </Button>
        <img
          className={styles.flatColorIconspieChart}
          alt=""
          src="/flatcoloriconspiechart.svg"
        />
      </div>
      {isNotificationPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <NotificationPopUp onClose={closeNotificationPopUp} />
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
    </>
  );
};

export default Dashboard;
