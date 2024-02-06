import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./WarningsPage.module.css";
import SearchBar from "./SearchBar";

type WarningsPageType = {
  onClose?: () => void;
};

const WarningsPage: FunctionComponent<WarningsPageType> = ({ onClose }) => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
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

  const openInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(true);
  }, []);

  const closeInfoPagePopup = useCallback(() => {
    setInfoPagePopupOpen(false);
  }, []);

  const onVectorIconClick = useCallback(() => {
    navigate("/warnings-page-2");
  }, [navigate]);

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsWarningP1Click = useCallback(() => {
    navigate("/trends");
  }, [navigate]);

  const onWarningsWarningP1Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsWarningP1Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeWarningP1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/records-responded-to");
  }, [navigate]);

  const onPolicyWarningsP2ContainerClick = useCallback(() => {
    navigate("/policy-comparison");
  }, [navigate]);

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
    <>
      <div className={styles.warningsPage1}>

        <img
          className={styles.reportBoxReportincidenceIcon}
          alt=""
          src="/report-box-reportincidence.svg"
        />
        <div className={styles.searchBar}>
        <SearchBar onSearch={handleSearch} />
        </div>
        <div className={styles.topBarWarningp1}>
          <div className={styles.hearder} />
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <img
            className={styles.notificationpopupWarningp1Icon}
            alt=""
            src="/vector1.svg"
            onClick={openNotificationPopUp}
          />
          <div className={styles.profilepopWarningp1}>
            <button className={styles.group} onClick={openProfilePopUp}>
           
              <img className={styles.vectorIcon1} alt="" src="/group1.svg" />
            </button>
          </div>
          <img
            className={styles.vectorIcon2}
            alt=""
            src="/info.svg"
            onClick={openInfoPagePopup}
          />
        </div>
        
        <nav className={styles.level3}>
          <div className={styles.level3Child} />
          <div className={styles.level3Item} />
          <img
            className={styles.vectorIcon3}
            alt=""
            src="/vector4.svg"
            onClick={onVectorIconClick}
          />
          <b className={styles.highPriority}>{`High Priority `}</b>
        </nav>
        <div className={styles.allelementssidebarWarningp1}>
          <div className={styles.sidebarWarningp1} />
          <button className={styles.logoutWarningp1} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
            <div className={styles.logoutWarningp1Child} />
          </button>
          <button
            className={styles.statisticsWarningp1}
            onClick={onStatisticsWarningP1Click}
          >
            <button className={styles.trendsWrapper}>
              <div className={styles.trends}>Trends</div>
            </button>
            <img className={styles.groupIcon1} alt="" src="/image-statistics.svg" />
          </button>
          <div className={styles.allelementssidebarWarningp1Child} />
          <button
            className={styles.warningsWarningp1}
            onClick={onWarningsWarningP1Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.warnings}>Warnings</div>
            </button>
            <img className={styles.vectorIcon4} alt="" src="/warningW.svg" />
          </button>
          <button
            className={styles.mapsWarningp1}
            onClick={onMapsWarningP1Click}
          >
            <button className={styles.mapsWrapper}>
              <div className={styles.maps}>Maps</div>
            </button>
            <img className={styles.vectorIcon5} alt="" src="/maps.svg" />
      
          </button>
          <button
            className={styles.homeWarningp1}
            onClick={onHomeWarningP1Click}
          >
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon8} alt="" src="/Home-image-statistics.svg" />
          </button>
          <button
            className={styles.recordsimageParent}
            onClick={onGroupButtonClick}
          >
             <img className={styles.recordsimageIcon} alt="" src="/RecordsImage1.svg" />
            <div className={styles.records}>Records</div>
          </button>
        
        </div>
        <div className={styles.greatBarCctvContainer}>
          <p
            className={styles.greatBar}
          >{`Great Bar         CCTV 12           Violence `}</p>
          <p className={styles.greatBar}>{`                     `}</p>
          <p className={styles.greatBar}>&nbsp;</p>
        </div>
        <div className={styles.sportsBarCctvContainer}>
          <p className={styles.greatBar}>Sports Bar       CCTV 12            Substances</p>
          <p className={styles.greatBar}>{`                     `}</p>
          <p className={styles.greatBar}>&nbsp;</p>
        </div>
        <div className={styles.bxcheckbox} />
        <div className={styles.bxcheckbox1}>
          <div className={styles.bxcheckbox2} />
        </div>
        <div
          className={styles.policyWarningsp2}
          onClick={onPolicyWarningsP2ContainerClick}
        >
          <img className={styles.vectorIcon9} alt="" src="/policies.svg" />
          <div className={styles.policies}>Policies</div>
        </div>
        <div className={styles.memorycheckboxCross} />
        <div className={styles.memorycheckboxCross1} />
        <b className={styles.levelsPlacesCamerasContainer}>
          <p
            className={styles.greatBar}
          >{`Levels              Places                               Cameras                   Date                        Factors              False Alarm              No Action           Response            `}</p>
        </b>
        <div className={styles.warnings1}>
          <p className={styles.greatBar}>{`Warnings: `}</p>
        </div>
        <div className={styles.scrollReportincidents} data-animate-on-scroll>
          <div className={styles.groupParent}>
            <div className={styles.groupWrapper}>
              <div className={styles.groupWrapper}>
                <div className={styles.level2MarketContainer}>
                  <p className={styles.greatBar}>
                    <span className={styles.level2}>Level 2</span>
                    <span className={styles.span}>{` `}</span>
                    <span>{`           Market Tavern                CCTV 12                    9:30am                    Weapons           `}</span>
                  </p>
                  <p className={styles.greatBar}>{`                     `}</p>
                  <p className={styles.greatBar}>&nbsp;</p>
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
            <div className={styles.groupContainer}>
              <div className={styles.level1IrishPubCctv14630Parent}>
                <div className={styles.level1IrishContainer}>
                  <p className={styles.greatBar}>
                    <span className={styles.span}>{`Level 1 `}</span>
                    <span>{`           Irish Pub                           CCTV 14                    6:30am                    Weapons           `}</span>
                  </p>
                  <p className={styles.greatBar}>{`                     `}</p>
                  <p className={styles.greatBar}>&nbsp;</p>
                </div>
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel3}
                  label=""
                  control={<Checkbox color="primary" />}
                />
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel4}
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
              <div className={styles.level2CenturyBarCctv154Parent}>
                <div className={styles.level2CenturyContainer}>
                  <p className={styles.greatBar}>
                    <span className={styles.level2}>Level 2</span>
                    <span className={styles.span}>{` `}</span>
                    <span>{`           Century Bar                      CCTV 15                    4:30am                    Weapons           `}</span>
                  </p>
                  <p className={styles.greatBar}>{`                     `}</p>
                  <p className={styles.greatBar}>&nbsp;</p>
                </div>
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel}
                  label=""
                  control={<Checkbox color="primary" />}
                />
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel7}
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
              <div className={styles.level3GreatBarCctv13830Parent}>
                <div className={styles.level3GreatContainer}>
                  <p className={styles.greatBar}>
                    <span className={styles.level31}>Level 3</span>
                    <span className={styles.span}>{` `}</span>
                    <span>{`           Great Bar                          CCTV 13                    8:30am                    Weapons           `}</span>
                  </p>
                  <p className={styles.greatBar}>{`                     `}</p>
                  <p className={styles.greatBar}>&nbsp;</p>
                </div>
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel3}
                  label=""
                  control={<Checkbox color="primary" />}
                />
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel10}
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
              <div className={styles.level3SportBarCctv16230Parent}>
                <div className={styles.level3SportContainer}>
                  <p className={styles.greatBar}>
                    <span className={styles.level31}>Level 3</span>
                    <span className={styles.span}>{` `}</span>
                    <span>{`           Sport Bar                          CCTV 16                    2:30am                    Weapons           `}</span>
                  </p>
                  <p className={styles.greatBar}>{`                     `}</p>
                  <p className={styles.greatBar}>&nbsp;</p>
                </div>
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel3}
                  label=""
                  control={<Checkbox color="primary" />}
                />
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel13}
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
              <div className={styles.level1StudentBarCctv1811Parent}>
                <div className={styles.level1StudentContainer}>
                  <p className={styles.greatBar}>
                    <span className={styles.span}>{`Level 1 `}</span>
                    <span>{`           Student Bar                      CCTV 18                    11:30pm                    Weapons           `}</span>
                  </p>
                  <p className={styles.greatBar}>{`                     `}</p>
                  <p className={styles.greatBar}>&nbsp;</p>
                </div>
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel}
                  label=""
                  control={<Checkbox color="primary" />}
                />
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel16}
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
            <div className={styles.groupWrapper3}>
              <div className={styles.level3VelvetLoungeCctv19Parent}>
                <div className={styles.level3VelvetContainer}>
                  <p className={styles.greatBar}>
                    <span className={styles.level31}>Level 3</span>
                    <span className={styles.span}>{` `}</span>
                    <span>{`           Velvet Lounge                 CCTV 19                    2:30pm                    Weapons           `}</span>
                  </p>
                  <p className={styles.greatBar}>{`                     `}</p>
                  <p className={styles.greatBar}>&nbsp;</p>
                </div>
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel18}
                  label=""
                  control={<Checkbox color="primary" />}
                />
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel19}
                  label=""
                  control={<Checkbox color="primary" />}
                />
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel20}
                  label=""
                  control={<Checkbox color="primary" />}
                />
              </div>
            </div>
            <div className={styles.groupWrapper4}>
              <div className={styles.level3SportBarCctv16230Parent}>
                <div className={styles.level3SportContainer}>
                  <p className={styles.greatBar}>
                    <span className={styles.level2}>Level 2</span>
                    <span className={styles.span}>{` `}</span>
                    <span>{`           Tipsy Lounge                   CCTV 21                    3:30pm                    Weapons           `}</span>
                  </p>
                  <p className={styles.greatBar}>{`                     `}</p>
                  <p className={styles.greatBar}>&nbsp;</p>
                </div>
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel3}
                  label=""
                  control={<Checkbox color="primary" />}
                />
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel13}
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
            <div className={styles.groupWrapper5}>
              <div className={styles.level1StudentBarCctv1811Parent}>
                <div className={styles.level1PulseContainer}>
                  <p className={styles.greatBar}>
                    <span className={styles.span}>{`Level 1 `}</span>
                    <span>{`           Pulse NightClub               CCTV 12                    6:30pm                    Weapons           `}</span>
                  </p>
                  <p className={styles.greatBar}>{`                     `}</p>
                  <p className={styles.greatBar}>&nbsp;</p>
                </div>
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel3}
                  label=""
                  control={<Checkbox color="primary" />}
                />
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel16}
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
            <div className={styles.groupWrapper6}>
              <div className={styles.level2TikiBarCctv17930pParent}>
                <div className={styles.level2TikiContainer}>
                  <p className={styles.greatBar}>
                    <span className={styles.level2}>Level 2</span>
                    <span className={styles.span}>{` `}</span>
                    <span>{`           Tiki Bar                             CCTV 17                    9:30pm                    Weapons           `}</span>
                  </p>
                  <p className={styles.greatBar}>{`                     `}</p>
                  <p className={styles.greatBar}>&nbsp;</p>
                </div>
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel}
                  label=""
                  control={<Checkbox color="primary" />}
                />
                <FormControlLabel
                  className={styles.rectangleFormcontrollabel28}
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
        <div className={styles.warningsPage1Child} />
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

export default WarningsPage;
function setInputValue(value: string) {
  throw new Error("Function not implemented.");
}

