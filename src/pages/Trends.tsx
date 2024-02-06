import { FunctionComponent, useState, useCallback, useEffect } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Menu,
} from "@mui/material";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Logout from "../components/Logout";
import SafetyRatingInfo from "../components/SafetyRatingInfo";
import { useNavigate } from "react-router-dom";
import styles from "./Trends.module.css";

type TrendsType = {
  onClose?: () => void;
};

const Trends: FunctionComponent<TrendsType> = ({ onClose }) => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [dropdownLinegraphTrendsAnchorEl, setDropdownLinegraphTrendsAnchorEl] =
    useState<HTMLElement | null>(null);
  const [
    dropdownLinegraphTrendsSelectedIndex,
    setDropdownLinegraphTrendsSelectedIndex,
  ] = useState(-1);
  const [isSafetyRatingInfoPopupOpen, setSafetyRatingInfoPopupOpen] =
    useState(false);
  const navigate = useNavigate();
  const dropdownLinegraphTrendsOpen = Boolean(dropdownLinegraphTrendsAnchorEl);
  const handleDropdownLinegraphTrendsClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setDropdownLinegraphTrendsAnchorEl(event.currentTarget);
  };
  const handleDropdownLinegraphTrendsMenuItemClick = (index: number) => {
    setDropdownLinegraphTrendsSelectedIndex(index);
    setDropdownLinegraphTrendsAnchorEl(null);
  };
  const handleDropdownLinegraphTrendsClose = () => {
    setDropdownLinegraphTrendsAnchorEl(null);
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

  const openLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(true);
  }, []);

  const closeLogoutPopup = useCallback(() => {
    setLogoutPopupOpen(false);
  }, []);

  const onWarningsMapP2L3Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onHomeMapP2L3Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onRecordsTrendsClick = useCallback(() => {
    navigate("/records-responded-to");
  }, [navigate]);

  const onPolicyStatisticsClick = useCallback(() => {
    navigate("/policy-comparison");
  }, [navigate]);

  const onMapsStatisticsClick = useCallback(() => {
    navigate("/map-page-2");
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

  const openSafetyRatingInfoPopup = useCallback(() => {
    setSafetyRatingInfoPopupOpen(true);
  }, []);

  const closeSafetyRatingInfoPopup = useCallback(() => {
    setSafetyRatingInfoPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.trends}>
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
        <div className={styles.allelementssidebarMapp2L3}>
          <div className={styles.sidebarMapp2L3} />
          <button className={styles.logoutMapp2L3} onClick={openLogoutPopup}>
            <div className={styles.logOut}>Log Out</div>
            <img className={styles.groupIcon1} alt="" src="/group.svg" />
            <div className={styles.logoutMapp2L3Child} />
          </button>
          <button
            className={styles.warningsMapp2L3}
            onClick={onWarningsMapP2L3Click}
          >
            <button className={styles.warningsWrapper}>
              <div className={styles.warnings}>Warnings</div>
            </button>
            <img className={styles.vectorIcon2} alt="" src="/warnings.png" />
          </button>
          <button className={styles.homeMapp2L3} onClick={onHomeMapP2L3Click}>
            <div className={styles.home}>Home</div>
            <img className={styles.vectorIcon3} alt="" src="/Home-image-statistics.svg" />
          </button>

          <button className={styles.recordsTrends} onClick={onRecordsTrendsClick}>
            <div className={styles.records}>Records</div>
            <img className={styles.vectorIcon34} alt="" src="/RecordsImage1.svg" />
          </button>
          <button
            className={styles.policyStatistics}
            onClick={onPolicyStatisticsClick}
          >
            <img className={styles.vectorIcon4} alt="" src="/policies.svg" />
            <div className={styles.policies}>Policies</div>
          </button>
        </div>
        <button
          className={styles.mapsStatistics}
          onClick={onMapsStatisticsClick}
        >
          <button className={styles.mapsWrapper}>
            <div className={styles.maps}>Maps</div>
          </button>
          <img className={styles.vectorIcon5} alt="" src="/maps.svg" />
      
        </button>
        <div className={styles.analysisAnalysis}>
          <div className={styles.topbarMapp2Level3Child} />
          <button className={styles.statisticsMapp2L3}>
            <button className={styles.trendsWrapper}>
              <div className={styles.trends1}>Trends</div>
            </button>
            <img className={styles.groupIcon2} alt="" src="/TrendsW.svg" />
          </button>
        </div>
        <FormControl
          className={styles.placesParent}
          variant="outlined"
          sx={{
            borderRadius: "0px 0px 0px 0px",
            width: "336px",
            height: "54px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "54px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "54px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "54px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "54px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
          }}
        >
          <InputLabel color="primary">Places</InputLabel>
          <Select
            color="primary"
            size="medium"
            label="Places"
            disableUnderline
            displayEmpty
          >
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
        <div className={styles.scrollReportincidentsWrapper}>
          <div className={styles.scrollReportincidents} data-animate-on-scroll>
            <div className={styles.bargraphTrendsWrapper}>
              <div className={styles.bargraphTrends}>
                <div className={styles.bargraphTrendsChild} />
                <div className={styles.xaxisBargraphTrends}>
                  <div className={styles.mon}>Mon</div>
                  <div className={styles.tue}>Tue</div>
                  <div className={styles.wed}>Wed</div>
                  <div className={styles.thu}>Thu</div>
                  <div className={styles.fri}>Fri</div>
                  <div className={styles.sat}>Sat</div>
                  <div className={styles.sun}>Sun</div>
                </div>
                <div className={styles.bargraphTrendsItem} />
                <div className={styles.bargraphTrendsInner} />
                <div className={styles.barsBargraphTrends}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.groupItem} />
                    <div className={styles.groupInner} />
                    <div className={styles.rectangleDiv} />
                    <div className={styles.groupChild1} />
                    <div className={styles.groupChild2} />
                    <div className={styles.groupChild3} />
                  </div>
                </div>
                <b className={styles.averageFrequencyOfContainer}>
                  <p className={styles.averageFrequencyOf}>
                    Average frequency of factors per day
                  </p>
                </b>
                <div className={styles.frequency}>Frequency</div>
                <div className={styles.yaxisLinegraphTrends}>
                  <div className={styles.div}>20</div>
                  <div className={styles.div1}>25</div>
                  <div className={styles.div2}>15</div>
                  <div className={styles.div3}>10</div>
                  <div className={styles.div4}>5</div>
                  <div className={styles.div5}>0</div>
                </div>
              </div>
            </div>
            <div className={styles.barGraphAi}>Bar graph AI trends</div>
            <div className={styles.violencePeaksOnContainer}>
              <p
                className={styles.averageFrequencyOf}
              >{`Violence peaks on Saturday and is at it’s lowest on Wednesday. `}</p>
              <p
                className={styles.averageFrequencyOf}
              >{`Pedestrian activity is high on Thursday, Friday and Saturday’s. `}</p>
            </div>
            <img className={styles.vectorIcon8} alt="" src="/vector.svg" />
            <div className={styles.linegraphAnalysis}>
              <div className={styles.linegraphAnalysisChild} />
              <div className={styles.dropdownLinegraphTrends}>
                
              </div>
              <b className={styles.monthlyAverageFor}>
                Monthly Average for Factors VS Bench line
              </b>
              <div className={styles.legendLinegraphTrends}>
                <div className={styles.legendLinegraphTrendsChild} />
                <div className={styles.legendLinegraphTrendsItem} />
                <div className={styles.legendLinegraphTrendsInner} />
                <div className={styles.averageAcrossPubs}>
                  Average across pubs
                </div>
                <div className={styles.irishPub}>Market Tarern</div>
                <div className={styles.benchLineSingapore}>
                  Bench line (Wellington)
                </div>
              </div>
              <div className={styles.actualgraphLinegraphTrends}>
                <div className={styles.frequency1}>Frequency</div>
                <div className={styles.yaxisLinegraphTrends1}>
                  <div className={styles.div6}>20</div>
                  <div className={styles.div7}>25</div>
                  <div className={styles.div8}>15</div>
                  <div className={styles.div9}>10</div>
                  <div className={styles.div10}>5</div>
                  <div className={styles.div11}>0</div>
                </div>
                <img className={styles.vectorIcon11} alt="" src="/redline.svg" />
                <div className={styles.actualgraphLinegraphTrendsChild} />
                <div className={styles.actualgraphLinegraphTrendsItem} />
                <div className={styles.solarcursorLinear} />
                
                <img className={styles.vectorIcon11} alt="" src="/purpleline.svg" />
                <img className={styles.vectorIcon10} alt="" src="/blueline.svg" />
                <div className={styles.xaxisLinegraphTrends}>
                  <div className={styles.pm}>12pm</div>
                  <div className={styles.pm1}>1pm</div>
                  <div className={styles.pm2}>2pm</div>
                  <div className={styles.pm3}>3pm</div>
                  <div className={styles.pm4}>4pm</div>
                  <div className={styles.pm5}>5pm</div>
                  <div className={styles.am}>6am</div>
                  <div className={styles.am1}>7am</div>
                  <div className={styles.am2}>8am</div>
                  <div className={styles.am3}>9am</div>
                  <div className={styles.am4}>10am</div>
                  <div className={styles.am5}>11am</div>
                  <div className={styles.am6}>0am</div>
                  <div className={styles.am7}>1am</div>
                  <div className={styles.am8}>2am</div>
                  <div className={styles.am9}>3am</div>
                  <div className={styles.am10}>4am</div>
                  <div className={styles.am11}>5am</div>
                  <div className={styles.pm6}>6pm</div>
                  <div className={styles.pm7}>7pm</div>
                  <div className={styles.pm8}>8pm</div>
                  <div className={styles.pm9}>9pm</div>
                  <div className={styles.pm10}>10pm</div>
                  <div className={styles.pm11}>11pm</div>
                </div>
                <div className={styles.time}>Time</div>
              </div>
            </div>
            <div className={styles.violencePeaksBetweenContainer}>
              <p
                className={styles.averageFrequencyOf}
              >{`Violence peaks between the 12am - 3 am period. `}</p>
              <p
                className={styles.averageFrequencyOf}
              >{`Violence at the Irish Pub is above the benchmark and average for another pubs in the area. `}</p>
            </div>
            <div className={styles.lineGraphAi}>Line graph AI trends</div>
            <div className={styles.safetykpiTrends}>
              <div className={styles.bargraphTrendsChild} />
              <b className={styles.safetyRatings}>Safety Ratings</b>
              <div className={styles.incidentsPerPedestrianContainer}>
                <p className={styles.averageFrequencyOf}>
                  <span>
                    <span>Incidents per pedestrian 0.05</span>
                  </span>
                </p>
                <p className={styles.e}>
                  <span>
                    <span>e</span>
                  </span>
                </p>
                <p className={styles.averageFrequencyOf}>
                  <span>
                    <span>{`Response Time (mins)         10 `}</span>
                  </span>
                </p>
                <p className={styles.e}>
                  <span>
                    <span>e</span>
                  </span>
                </p>
                <p className={styles.averageFrequencyOf}>
                  <span>
                    <span>
                      <span>{`Infrastructure                      `}</span>
                    </span>
                  </span>
                  <span>
                    <b className={styles.med}>MED</b>
                  </span>
                </p>
                <p className={styles.e}>
                  <span>
                    <span>e</span>
                  </span>
                </p>
                <p className={styles.averageFrequencyOf}>
                  <span>
                    <span>
                      <span>{`Perception of Safety            `}</span>
                    </span>
                    <b className={styles.low}>LOW</b>
                  </span>
                </p>
               
              </div>
             
              <img className={styles.vectorIcon12} alt="" src="/infotick.svg" />
              <img
                className={styles.vectorIcon13}
                alt=""
                src="/infomore.svg"
                onClick={openSafetyRatingInfoPopup}
              />
            </div>
            <FormControl
              className={styles.factorsParent}
              variant="outlined"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "167px",
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
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary">Factors</InputLabel>
              <Select
                color="primary"
                size="small"
                label="Factors"
                disableUnderline
                displayEmpty
              >
                <MenuItem value="Pedestrians">Pedestrians</MenuItem>
                <MenuItem value="Substances">Substances</MenuItem>
                <MenuItem value="Violence">Violence</MenuItem>
                <MenuItem value="Weapons">Weapons</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className={styles.demographicTrends}>
              <div className={styles.demographicTrendsChild} />
              <b className={styles.demographicsSurryHills}>
                Demographics: Surry Hills
              </b>
              <div className={styles.genderMale582Container}>
                <p className={styles.averageFrequencyOf}>Gender</p>
                <p className={styles.averageFrequencyOf}> Male: 58.2%</p>
                <p className={styles.averageFrequencyOf}> Female: 41.8%</p>
                <p className={styles.averageFrequencyOf}>Age</p>
                <p className={styles.averageFrequencyOf}> 0-4: 2.4%</p>
                <p className={styles.averageFrequencyOf}> 5-14: 3.2%</p>
                <p className={styles.averageFrequencyOf}> 15-24: 9.4%</p>
                <p className={styles.averageFrequencyOf}> 25-64: 74.6%</p>
                <p className={styles.averageFrequencyOf}> 64+: 10.4%</p>
                <p className={styles.averageFrequencyOf}>Socioeconomic</p>
                <p className={styles.averageFrequencyOf}> High Income: 37.3%</p>
                <p className={styles.averageFrequencyOf}> Low Income: 16.9%</p>
              </div>
            </div>
            <div className={styles.aisuggestionsAnalysis}>
              <div className={styles.bargraphTrendsChild} />
              <div className={styles.deploySecurityPresenceContainer}>
                <p
                  className={styles.averageFrequencyOf}
                >{`Deploy Security presence between 12am - 3am on Saturday and Sunday to decrease violence. `}</p>
                <p className={styles.averageFrequencyOf}>&nbsp;</p>
                <p className={styles.averageFrequencyOf}>
                  Improve lighting and maintenance to improve perception of
                  safety.
                </p>
                <p className={styles.averageFrequencyOf}>&nbsp;</p>
                <p className={styles.averageFrequencyOf}>
                  Implement initiatives to increase pedestrian activity on
                  Wednesday,
                </p>
                </div>
  <div className={styles.moreInfoContainer}>
    <p className={styles.moreInfo}>MoreInfo</p>
    <div className={styles.arrowIcon}></div>
    <img className={styles.vectorIcon50} alt="" src="/Vectorblack.svg" />
              </div>
              <b className={styles.aiGeneratedSuggestions}>

                AI Generated Suggestions:
              </b>
            </div>
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
      {isSafetyRatingInfoPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSafetyRatingInfoPopup}
        >
          <SafetyRatingInfo onClose={closeSafetyRatingInfoPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Trends;
