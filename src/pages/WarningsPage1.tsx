import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { Button, Checkbox, FormControlLabel, Icon } from "@mui/material";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import Logout from "../components/Logout";
import InfoPage from "../components/InfoPage";
import { useNavigate } from "react-router-dom";
import styles from "./WarningsPage1.module.css";
import SearchBar from "./SearchBar";



type WarningsPage1Type = {
  onClose?: () => void;
};

const WarningsPage1: FunctionComponent<WarningsPage1Type> = ({ onClose }) => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");


  const handleSearch = (value: string) => {
    setInputValue(value);
  }; 

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

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsWarningP2Click = useCallback(() => {
    navigate("/trends");
  }, [navigate]);

  const onWarningsWarningP2Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsWarningP2Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeWarningP2Click = useCallback(() => {
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

  const onPolicyWarningsP2ContainerClick = useCallback(() => {
    navigate("/policy-comparison");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  return (
    <>
      <div className={styles.warningsPage2}>
        <img
          className={styles.reportBoxReportincidenceIcon}
          alt=""
          src="/report-box-reportincidence.svg"
        />
        <div className={styles.topbarWaringp2}>
          <div className={styles.header} />
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <img
            className={styles.noticifcationpopupWarningp2Icon}
            alt=""
            src="/vector1.svg"
            onClick={openNotificationPopUp}
          />
          <img
            className={styles.profilepopupWarningp2Icon}
            alt=""
            src="/group1.svg"
            onClick={openProfilePopUp}
          />
        </div>
        <div className={styles.level3HeaderWarningp2}>
          <div className={styles.header1} />
          <b className={styles.highPriorities}>{`High Priorities `}</b>
        </div>
        <div className={styles.allelementssidebarWarningp2}>
          <div className={styles.sidebarWarningp2} />
          <button className={styles.logoutWarningp2} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <div className={styles.logoutWarningp2Child} />
          </button>
          <button
            className={styles.statisticsWarningp2}
            onClick={onStatisticsWarningP2Click}
          >
            <button className={styles.trendsWrapper}>
              <div className={styles.trends}>Trends</div>
            </button>
            <img className={styles.groupIcon1} alt="" src="/image-statistics.svg" />
          </button>
          <div className={styles.allelementssidebarWarningp2Child} />
          <button
            className={styles.warningsWarningp2}
            onClick={onWarningsWarningP2Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.warnings}>Warnings</div>
            </button>
            <img className={styles.vectorIcon} alt="" src="/warningW.svg" />
          </button>
          <button
            className={styles.mapsWarningp2}
            onClick={onMapsWarningP2Click}
          >
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon1} alt="" src="/maps.svg" />
          
          </button>
          <button
            className={styles.homeWarningp2}
            onClick={onHomeWarningP2Click}
          >
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon4} alt="" src="/Home-image-statistics.svg" />
          </button>
          <Button
            className={styles.recordsimageParent}
            onClick={onGroupButtonClick}
          >
            <img className={styles.recordsimageIcon} alt="" src="/RecordsImage1.svg" />
            <div className={styles.records}>Records</div>
          </Button>
        </div>
        <img
          className={styles.vectorIcon5}
          alt=""
          src="/info.svg"
          onClick={openInfoPagePopup}
        />
        <div className={styles.searchBar}>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className={styles.scrollWarningp2} data-animate-on-scroll>
          <div className={styles.table}>
            <div className={styles.row}>
              <div className={styles.cell}>
                <div className={styles.content}>
                  <div className={styles.text}>Street</div>
                </div>
              </div>
              <div className={styles.cell}>
                <div className={styles.content}>
                  <div className={styles.text}>Camera</div>
                </div>
              </div>
              <div className={styles.cell}>
                <div className={styles.content}>
                  <div className={styles.text}>Time</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>Pitt st</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>CCTV 4</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>9:30am</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>Thomas st</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>CCTV 5</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>10:30am</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>Thomas st</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>CCTV 6</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>8:30am</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>Pitt st</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>CCTV 4</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>9:30pm</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>Thomas st</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>CCTV 6</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>10:30pm</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>Pitt st</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>CCTV 4</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>11:30pm</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>Thomas st</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>CCTV 5</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>12:00am</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>Pitt st</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>CCTV 4</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>4:00pm</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>Thomas st</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>CCTV 5</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>10:00pm</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>Pitt st</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>CCTV 4</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>1:00pm</div>
                </div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>Thomas st</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>CCTV 5</div>
                </div>
              </div>
              <div className={styles.cell3}>
                <div className={styles.content}>
                  <div className={styles.text3}>11:00pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.policyWarningsp2}
          onClick={onPolicyWarningsP2ContainerClick}
        >
          <img className={styles.vectorIcon6} alt="" src="/policies.svg" />
          <div className={styles.policies}>Policies</div>
        </div>
        <div className={styles.levelsPlacesCamerasTimeFacParent}>
          <b className={styles.levelsPlacesCamerasContainer}>
            <p
              className={styles.levels}
            >{`Levels             Places                              Cameras                   Time                        Factors                False Alarm      No Action             Response    `}</p>
          </b>
          <div className={styles.groupWrapper} data-animate-on-scroll>
            <div className={styles.groupParent}>
              <div className={styles.groupContainer}>
                <div className={styles.groupContainer}>
                  <div className={styles.level3MarketContainer}>
                    <p className={styles.levels}>
                      <span className={styles.level3}>{`Level 3 `}</span>
                      <span>{`           Market Tavern                CCTV 12                    9:30am                    Weapons           `}</span>
                    </p>
                    <p className={styles.levels}>{`                     `}</p>
                    <p className={styles.levels}>&nbsp;</p>
                  </div>
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel1}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel2}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                </div>
              </div>
              <div className={styles.groupFrame}>
                <div className={styles.groupContainer}>
                  <div className={styles.level3MarketContainer}>
                    <p className={styles.levels}>
                      <span className={styles.level31}>Level 3</span>
                      <span>{`           Irish Pub                           CCTV 14                    6:30am                    Weapons           `}</span>
                    </p>
                    <p className={styles.levels}>{`                     `}</p>
                    <p className={styles.levels}>&nbsp;</p>
                  </div>
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel1}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel2}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                </div>
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.groupContainer}>
                  <div className={styles.level3MarketContainer}>
                    <span>Level 3</span>
                    <span className={styles.span}>{` `}</span>
                    <span
                      className={styles.velvetLounge}
                    >{`           Velvet Lounge                 CCTV 19                    2:30pm                    Weapons           `}</span>
                  </div>
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel1}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel2}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                </div>
              </div>
              <div className={styles.groupWrapper1}>
                <div className={styles.groupContainer}>
                  <div className={styles.level3MarketContainer}>
                    <p className={styles.levels}>
                      <span className={styles.level32}>Level 3</span>
                      <span className={styles.span}>{` `}</span>
                      <span>{`           Great Bar                          CCTV 13                    8:30am                    Weapons           `}</span>
                    </p>
                    <p className={styles.levels}>{`                     `}</p>
                    <p className={styles.levels}>&nbsp;</p>
                  </div>
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel1}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel2}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                </div>
              </div>
              <div className={styles.groupWrapper2}>
                <div className={styles.groupContainer}>
                  <div className={styles.level3MarketContainer}>
                    <p className={styles.levels}>
                      <span className={styles.level32}>Level 3</span>
                      <span className={styles.span}>{` `}</span>
                      <span>{`           Sport Bar                          CCTV 16                    2:30am                    Weapons           `}</span>
                    </p>
                    <p className={styles.levels}>{`                     `}</p>
                    <p className={styles.levels}>&nbsp;</p>
                  </div>
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel1}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                  <FormControlLabel
                    className={styles.rectangleFormcontrollabel2}
                    label=""
                    control={<Checkbox color="primary" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className={styles.warningsPage2Child}
          disableElevation={true}
          color="secondary"
          variant="contained"
          startIcon={<Icon>arrow_back_sharp</Icon>}
          sx={{ borderRadius: "0px 0px 0px 0px", width: 73, height: 31 }}
          onClick={onRectangleButtonClick}
        >
          Back
        </Button>
        <div className={styles.warningsPage2Item} />
        <div className={styles.warnings1}>
          <p className={styles.levels}>{`Warnings: `}</p>
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

export default WarningsPage1;
