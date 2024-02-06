import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { TextField, Icon, InputLabel, Select, FormControl, FormHelperText, MenuItem } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./RecordsRespondedTo.module.css";
import SearchBar from "./SearchBar";

type RecordsRespondedToType = {
  onClose?: () => void;
};

const RecordsRespondedTo: FunctionComponent<RecordsRespondedToType> = ({
  onClose,
}) => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");


  const handleSearch = (value: string) => {
    setInputValue(value);
  }; 
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

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onStatisticsReportIncidentsClick = useCallback(() => {
    navigate("/trends");
  }, [navigate]);

  const onWarningsStatisticsClick = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsStatisticsClick = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeReportIncidentsClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onPolicyRecordsClick = useCallback(() => {
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
      
        <div className={styles.recordsRespondedTo}>
          <div className={styles.totalwarningp2}>
            <div className={styles.totalwarningp2Child} />
            <div className={styles.totalwarningp2Item} />
          </div>
          <div className={styles.topBarReportincidents}>
            <div className={styles.hearder} />
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            <img
              className={styles.notificationpopupReportincideIcon}
              alt=""
              src="/vector1.svg"
              onClick={openNotificationPopUp}
            />
            <div className={styles.profilepopReportincidents}>
              <button className={styles.group} onClick={openProfilePopUp}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
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
          <div className={styles.allelementssidebarReportInci}>
            <div className={styles.sidebarReportIncidents} />
            <button
              className={styles.logoutReportIncidents}
              onClick={openLogoutPopup}
            >
              <div className={styles.logOut}>Log Out</div>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <div className={styles.logoutReportIncidentsChild} />
            </button>
            <div className={styles.allelementssidebarReportInciChild} />
            <button
              className={styles.statisticsReportIncidents}
              onClick={onStatisticsReportIncidentsClick}
            >
              <button className={styles.trendsWrapper}>
                <div className={styles.trends}>Trends</div>
              </button>
              <img
                className={styles.imageStatisticsIcon}
                alt=""
                src="/image-statistics.svg"
              />
            </button>
            <button
              className={styles.warningsStatistics}
              onClick={onWarningsStatisticsClick}
            >
              <button className={styles.warningsWrapper}>
                <div className={styles.trends}>Warnings</div>
              </button>
              <img className={styles.vectorIcon3} alt="" src="/warnings.png" />
            </button>
            <button
              className={styles.mapsStatistics}
              onClick={onMapsStatisticsClick}
            >
              <button className={styles.mapsWrapper}>
                <div className={styles.maps}>Maps</div>
              </button>
              <img className={styles.vectorIcon4} alt="" src="/maps.svg" />
              
            </button>
            <button
              className={styles.homeReportIncidents}
              onClick={onHomeReportIncidentsClick}
            >
              <div className={styles.home}>Home</div>
              <img
                className={styles.homeImageStatisticsIcon}
                alt=""
                src="/home-image-statistics.svg"
              />
            </button>
            <div className={styles.recordsRecords}>
              <img
                className={styles.recordsimageIcon}
                alt=""
                src="/recordsimage.svg"
              />
              <div className={styles.records}>Records</div>
            </div>
            <button
              className={styles.policyRecords}
              onClick={onPolicyRecordsClick}
            >
              <img className={styles.vectorIcon7} alt="" src="/policies.svg" />
              <div className={styles.policies}>Policies</div>
            </button>
          </div>
          <div className={styles.reportBoxReportincidenceParent}>
            <div className={styles.reportBoxReportincidence} />
            <div className={styles.staristicsreportReportinciden}>
              <b className={styles.statisticsReport}>Statistics Report:</b>
            </div>
            <div className={styles.staristicsreportReportinciden1}>
              <div className={styles.statisticsReport}>
                Historical Incidents
              </div>
            </div>
            <div
              className={styles.scrollReportincidents}
              data-animate-on-scroll
            >
              <ol className={styles.warningsReportincidents}>
                <div className={styles.level3ThomasContainer}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.level3}>Level 3</span>
                    <span className={styles.span}>{` `}</span>
                    <span>{`            Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level3ThomasContainer1}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.level3}>Level 3</span>
                    <span className={styles.span}>{`     `}</span>
                    <span>{`         Market Tavern - CCTV 12               15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level1ThomasContainer}>
                  <p className={styles.level3ThomasSt}>
                    <span
                      className={styles.span}
                    >{`Level 1             `}</span>
                   <span>{` Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level2ThomasContainer}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.level2}>Level 2</span>
                    <span className={styles.span}>{`  `}</span>
                    <span>{`            Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level1ThomasContainer1}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.span}>{`Level 1     `}</span>
                    <span>{`         Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level3ThomasContainer2}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.level3}>{`Level 3 `}</span>
                    <span className={styles.span}>{`    `}</span>
                    <span>{`         Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level1ThomasContainer2}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.span}>{`Level 1     `}</span>
                    <span>{`         Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level2ThomasContainer1}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.level2}>Level 2</span>
                    <span className={styles.span}>{`  `}</span>
                    <span>{`            Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level1ThomasContainer3}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.span}>{`Level 1     `}</span>
                    <span>{`         Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level1ThomasContainer4}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.span}>{`Level 1     `}</span>
                    <span>{`         Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level2ThomasContainer2}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.level2}>Level 2</span>
                    <span className={styles.span}>{`     `}</span>
                    <span>{`         Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level1ThomasContainer5}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.span}>{`Level 1              `}</span>
                    <span>{`Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level3ThomasContainer3}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.level3}>Level 3</span>
                    <span className={styles.span}>{`             `}</span>
                    <span>{`Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
                <div className={styles.level2ThomasContainer3}>
                  <p className={styles.level3ThomasSt}>
                    <span className={styles.level2}>Level 2</span>
                    <span className={styles.span}>{` `}</span>
                    <span>{`            Market Tavern - CCTV 12              15/11/2023 Sat 9:30am              weapons                                   `}</span>
                  </p>
                  <p
                    className={styles.level3ThomasSt}
                  >{`                     `}</p>
                  <p className={styles.level3ThomasSt}>&nbsp;</p>
                </div>
              </ol>
            </div>
            <div className={styles.searchBar}>
          <SearchBar onSearch={handleSearch} />
        </div>
            <img className={styles.groupChild} alt="" src="/line-27.svg" />
          </div>
          <div className={styles.headerReportincidents}>
            <b className={styles.statisticsReport1}>{`Places: `}</b>
          </div>
          
         <div className={styles.placesparent}>
                  <FormControl
              className={styles.placesParent}
              variant="outlined"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "158px",
                height: "51px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "51px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "51px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "51px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "51px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
              }}
            >
              <InputLabel color="primary">Places</InputLabel>
              <Select color="primary" label="Places" disableUnderline displayEmpty>
                <MenuItem value="Market Tavern">Market Tavern</MenuItem>
                <MenuItem value="Great Bar">Great Bar</MenuItem>
                <MenuItem value="Irish Pub">Irish Pub</MenuItem>
                <MenuItem value="Century Bar">Century Bar</MenuItem>
                <MenuItem value="Sport Bar">Sport Bar</MenuItem>
                <MenuItem value="Tiki Bar">Tiki Bar</MenuItem>
                <MenuItem value="Student Bar">Student Bar</MenuItem>
                <MenuItem value="Velvet Lounge">Velvet Lounge</MenuItem>
                <MenuItem value="Tipsy Lounge">Tipsy Lounge</MenuItem>
                <MenuItem value="Pulse NightClub">Pulse NightClub</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
           
            </div>
           
            <div className={styles.newGroupParent}>
      <div className={styles.newArrowLineParent}>
        <img
          className={styles.newArrowUpLine}
          alt=""
          src="/redarrow.svg"
        />
        <img
          className={styles.newArrowUpLine1}
          alt=""
          src="/heroiconsarrowup16solid.svg"
        />
        <img className={styles.newVectorIcon} alt="" src="/heroiconsarrowup16solid.svg" />
        <img className={styles.newVectorIcon1} alt="" src="/VectorDownload.svg" />
        <b className={styles.newDownload}>Download</b>
        <b className={styles.newSend}>
          <p className={styles.newLevel3IrishPub}>Send</p>
        </b>
        <img className={styles.newVectorIcon2} alt="" src="/VectorSend.svg" />
        <ol className={styles.newWarningsReportIncidents}>
          <div className={styles.newLevel3Container}>
            <p className={styles.newLevel3IrishPub}>
              <span className={styles.newLevel3}>Level 3</span>
              <span className={styles.newSpan}>{` `}</span>
              <span>{`      Market Tarven - CCTV 05                       `}</span>
            </p>
            <p
              className={styles.newLevel3IrishPub}
            >{`                     `}</p>
            <p className={styles.newLevel3IrishPub}>&nbsp;</p>
          </div>
        </ol>
        <ol className={styles.newWarningsReportIncidents1}>
          <div className={styles.newLevel3Container}>
            <p className={styles.newLevel3IrishPub}>
              <span className={styles.newLevel3}>Level 3</span>
              <span className={styles.newSpan}>{` `}</span>
              <span>{`      Market Tarven - CCTV 06                       `}</span>
            </p>
            <p
              className={styles.newLevel3IrishPub}
            >{`                     `}</p>
            <p className={styles.newLevel3IrishPub}>&nbsp;</p>
          </div>
        </ol>
        <div className={styles.summaryTitle}>
          <h2>Summary Report - 01/01/24 - 01/02/24</h2>
        </div>
        <b className={styles.newThisMonth}>This Month</b>
        <div className={styles.newTotalIncidentsContainer}>
          <p className={styles.newLevel3IrishPub}>
            <b className={styles.newPedestrianTraffic}>{`Total Incidents:105 `}</b>
            <span>{`(      10% decrease from `}</span>
          </p>
          <p className={styles.newLevel3IrishPub}>previous month)</p>
        </div>
        <div className={styles.newPedestrianTrafficContainer}>
          <p className={styles.newLevel3IrishPub}>
            <b className={styles.newPedestrianTraffic}>{`Pedestrian Traffic: `}</b>
            <span>{`(      25% increase from `}</span>
          </p>
          <p className={styles.newLevel3IrishPub}>previous month)</p>
        </div>
        <div className={styles.newNoArrestsContainer}>
          <p className={styles.newLevel3IrishPub}>
            <b className={styles.newPedestrianTraffic}>{`No. Arrests:47 `}</b>
            <span>{`(     5% increase from `}</span>
          </p>
          <p className={styles.newLevel3IrishPub}>previous month)</p>
        </div>
        <b className={styles.newIncidents}>Incidents</b>
      </div>
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
    </LocalizationProvider>
  );
};

export default RecordsRespondedTo;
