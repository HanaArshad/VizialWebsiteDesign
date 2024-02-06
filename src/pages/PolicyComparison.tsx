import { FunctionComponent, useState, useCallback, useEffect } from "react";
import {
  Button,
  TextField,
  Icon,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NotificationPopUp from "../components/NotificationPopUp";
import PortalPopup from "../components/PortalPopup";
import ProfilePopUp from "../components/ProfilePopUp";
import InfoPage from "../components/InfoPage";
import Logout from "../components/Logout";
import RatingInfo from "../components/RatingInfo";
import { useNavigate } from "react-router-dom";
import styles from "./PolicyComparison.module.css";

const PolicyComparison: FunctionComponent = () => {
  const [isNotificationPopUpOpen, setNotificationPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
  const [isInfoPagePopupOpen, setInfoPagePopupOpen] = useState(false);
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] =
    useState(null);
  const [isRatingInfoPopupOpen, setRatingInfoPopupOpen] = useState(false);
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

  const onStatisticsMapP2Click = useCallback(() => {
    navigate("/trends");
  }, [navigate]);

  const onWarningsMapP2Click = useCallback(() => {
    navigate("/warnings-page-1");
  }, [navigate]);

  const onMapsMapP2Click = useCallback(() => {
    navigate("/map-page-2");
  }, [navigate]);

  const onHomeMapP2Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/records-responded-to");
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

  const openRatingInfoPopup = useCallback(() => {
    setRatingInfoPopupOpen(true);
  }, []);

  const closeRatingInfoPopup = useCallback(() => {
    setRatingInfoPopupOpen(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.policyComparison}>
          <div className={styles.topbarMapp2Level4}>
            <div className={styles.topbarMapp2Level4Child} />
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
              <img className={styles.vectorIcon2} alt="" src="/warnings.png" />
            </button>
            <div className={styles.allelementssidebarMapp2Child} />
            <button className={styles.mapsMapp2} onClick={onMapsMapP2Click}>
              <button className={styles.mapsWrapper}>
                <div className={styles.maps}>Maps</div>
              </button>
              <img className={styles.vectorIcon3} alt="" src="/maps.svg" />
            </button>
            <button className={styles.homeMapp2} onClick={onHomeMapP2Click}>
              <div className={styles.home}>Home</div>
              <img className={styles.vectorIcon6} alt="" src="/home-image-statistics.svg" />
            </button>
            <button
              className={styles.recordsimageParent}
              onClick={onGroupButtonClick}
            >
              <img className={styles.recordsimageIcon} alt=""
              src="/RecordsImage1.svg" />
              <div className={styles.records}>Records</div>
            </button>
            <div className={styles.recordsPolicy}>
              <img className={styles.vectorIcon7} alt="" src="/vectorpolicyW.svg" />
              <div className={styles.policies}>Policies</div>
            </div>
          </div>
          <b className={styles.policy}>Policy</b>
          <div className={styles.timelinegraphPolicy}>
            <div className={styles.timelinegraphPolicyChild} />
            <div className={styles.start}>Start</div>
            <div className={styles.end}>End</div>
            <div className={styles.jan2023}>Jan 2023</div>
            <div className={styles.may2023}>May 2023</div>
            <div className={styles.jul2023}>Jul 2023</div>
            <div className={styles.sep2023}>Sep 2023</div>
            <div className={styles.timelinegraphPolicyItem} />
            <div className={styles.timelinegraphPolicyInner} />
            <b className={styles.timeline}>Timeline:</b>
            <div className={styles.rectangleDiv} />
            <div className={styles.timelinegraphPolicyChild1} />
            <div className={styles.timelinegraphPolicyChild2} />
            <div className={styles.timelinegraphPolicyChild3} />
            <div className={styles.announcement}>Announcement</div>
            <div className={styles.implementation}>Implementation</div>
            <div className={styles.testing}>Testing</div>
            <div className={styles.dataCollection}>
              Data Collection + Comparison
            </div>
            <div className={styles.mar2024}>Mar 2024</div>
          </div>
          <div className={styles.graphsgraphsPolicy}>
            <div className={styles.averagePerMonthContainer}>
              <b>{` `}</b>
              <span>Average per Month</span>
            </div>
            <div className={styles.correlationPolicy}>
              <div className={styles.correlationOverPolicy}>
                Correlation over policy lifetime:
              </div>
              <div className={styles.pedestrians}>Pedestrians</div>
              <div className={styles.substances}>Substances</div>
              <div className={styles.violence}>Violence</div>
              <div className={styles.weapons}>Weapons</div>
              <div className={styles.factor}>Factor</div>
              <div className={styles.coefficient}>Coefficient</div>
              <img className={styles.correlationPolicyChild} alt="" />
              <div className={styles.div}>0.75</div>
              <div className={styles.div1}>-0.10</div>
              <div className={styles.div2}>-0.55</div>
              <div className={styles.div3}>-0.60</div>
            </div>
            <div className={styles.improvementPolicy}>
              <div className={styles.isThePolicy}>
                Is the policy improving safety?
              </div>
              <img
                className={styles.thumbPolicyIcon}
                alt=""
                src="/thumb-policy.svg"
              />
              <div className={styles.factorsAreProgressingContainer}>
                <b>3/4</b>
                <span> factors are progressing in a favourable direction</span>
              </div>
            </div>
            <div className={styles.pedestrians1graphPolicy}>
              <div className={styles.pedestrians1}>Pedestrians</div>
              <div className={styles.policyLifetime}>Policy Lifetime</div>
              <img
                className={styles.pedestrians1graphPolicyChild}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyItem}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyInner}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild1}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild2}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild3}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild4}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild5}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild6}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild7}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild8}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild9}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild10}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild11}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild12}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild13}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild14}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.pedestrians1graphPolicyChild15}
                alt=""
                src="/group-76.svg"
              />
              <div className={styles.start1}>Start</div>
              <div className={styles.end1}>End</div>
              <div className={styles.lineDiv} />
              <div className={styles.pedestrians1graphPolicyChild16} />
              <div className={styles.div4}>30</div>
              <div className={styles.div5}>0</div>
            </div>
            <div className={styles.violencegraphPolicy}>
              <div className={styles.policyLifetime1}>Policy Lifetime</div>
              <div className={styles.violence1}>Violence</div>
              <img
                className={styles.violencegraphPolicyChild}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyItem}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyInner}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild1}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild2}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild3}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild4}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild5}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild6}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild7}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild8}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild9}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild10}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild11}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild12}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild13}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild14}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild15}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild16}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild17}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild18}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild19}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild20}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.violencegraphPolicyChild21}
                alt=""
                src="/group-76.svg"
              />
              <div className={styles.violencegraphPolicyChild22} />
              <div className={styles.div6}>10</div>
              <div className={styles.div7}>0</div>
              <div className={styles.start2}>Start</div>
              <div className={styles.end2}>End</div>
              <div className={styles.violencegraphPolicyChild23} />
            </div>
            <div className={styles.graphsgraphsPolicyChild} />
            <div className={styles.weaponsgraphPolicy}>
              <div className={styles.policyLifetime2}>Policy Lifetime</div>
              <div className={styles.div6}>10</div>
              <img
                className={styles.weaponsgraphPolicyChild}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyItem}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyInner}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild1}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild2}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild3}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild4}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild5}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild6}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild7}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild8}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild9}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild10}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild11}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild12}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild13}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild14}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild15}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild16}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.weaponsgraphPolicyChild17}
                alt=""
                src="/group-76.svg"
              />
              <div className={styles.weapons1}>Weapons</div>
              <div className={styles.start2}>Start</div>
              <div className={styles.end2}>End</div>
              <div className={styles.div9}>0</div>
              <div className={styles.violencegraphPolicyChild23} />
              <div className={styles.weaponsgraphPolicyChild19} />
            </div>
            <div className={styles.substancesgraphPolicy}>
              <div className={styles.policyLifetime3}>Policy Lifetime</div>
              <img
                className={styles.substancesgraphPolicyChild}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyItem}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyInner}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild1}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild2}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild3}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild4}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild5}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild6}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild7}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild8}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild9}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild10}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild11}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild12}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild13}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild14}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild15}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild16}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild17}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild18}
                alt=""
                src="/group-76.svg"
              />
              <img
                className={styles.substancesgraphPolicyChild19}
                alt=""
                src="/group-76.svg"
              />
              <div className={styles.div4}>10</div>
              <div className={styles.div5}>0</div>
              <div className={styles.pedestrians1}>Substances</div>
              <div className={styles.start1}>Start</div>
              <div className={styles.end1}>End</div>
              <div className={styles.substancesgraphPolicyChild20} />
              <div className={styles.substancesgraphPolicyChild21} />
            </div>
            <b className={styles.impactOfSelected}>
              Impact of Selected Policy on the following Factors:
            </b>
          </div>
          <div className={styles.comparisonPolicy}>
            <b className={styles.comparison}>Comparison:</b>
            <div className={styles.beforeimplementationPolicy}>
              <div className={styles.beforeimplementationPolicyChild} />
              <b className={styles.factors}>
                <span>
                  <span className={styles.factors1}>Factors:</span>
                </span>
                <span>{`    `}</span>
                <span className={styles.span}>{`              `}</span>
              </b>
              <b className={styles.beforeImplementation}>
                Before Implementation
              </b>
              <b
                className={styles.pedestrians2}
              >{`Pedestrians:                  `}</b>
              <b className={styles.substances2}>Substances</b>
              <b className={styles.weapons2}>Weapons:</b>
              <b className={styles.lighting}>Lighting</b>
              <b className={styles.violence2}>Violence:</b>
              <b className={styles.maintenance}>Maintenance:</b>
              <img
                className={styles.biarrowUpIcon}
                alt=""
                src="/biarrowup.svg"
              />
              <img
                className={styles.biarrowUpIcon1}
                alt=""
                src="/biarrowup.svg"
              />
              <img
                className={styles.biarrowUpIcon2}
                alt=""
                src="/biarrowup@2x.png"
              />
              <div className={styles.calendarStatistics}>
                <div className={styles.wrapper} data-animate-on-scroll>
                  <DatePicker
                    value={frameDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setFrameDateTimePickerValue(newValue);
                    }}
                    sx={{}}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: false,
                        required: false,
                        autoFocus: false,
                        error: false,
                        color: "primary",
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
              </div>
              <b className={styles.b}>8</b>
              <b className={styles.b1}>8</b>
              <b className={styles.b2}>5</b>
              <b className={styles.b3}>7</b>
              <b className={styles.rating}>8/10*Rating</b>
              <b className={styles.cGrade}>C Grade</b>
              <b className={styles.dailyAverage}>
                <span>
                  <span className={styles.factors1}>Daily Average:</span>
                </span>
                <span>{`    `}</span>
                <span className={styles.span}>{`              `}</span>
              </b>
              <img
                className={styles.biarrowUpIcon3}
                alt=""
                src="/biarrowup.svg"
              />
            </div>
            <div className={styles.afterimplementationPolicy}>
              <div className={styles.beforeimplementationPolicyChild} />
              <div
                className={styles.pedestrians3}
              >{`Pedestrians:                  `}</div>
              <div className={styles.substances3}>Substances</div>
              <div className={styles.weapons3}>Weapons:</div>
              <div className={styles.lighting1}>Lighting</div>
              <div className={styles.violence3}>Violence:</div>
              <div className={styles.maintenance1}>Maintenance:</div>
              <div className={styles.div12}>1</div>
              <div className={styles.div13}>24</div>
              <div className={styles.div14}>1</div>
              <div className={styles.div15}>0</div>
              <b className={styles.rating1}>8/10*Rating</b>
              <b className={styles.bGrade}>B Grade</b>
              <div className={styles.factors2}>
                <span>
                  <span className={styles.factors1}>Factors:</span>
                </span>
                <span>{`    `}</span>
                <span className={styles.span}>{`              `}</span>
              </div>
              <img
                className={styles.biarrowUpIcon4}
                alt=""
                src="/biarrowup@2x.png"
              />
              <img
                className={styles.biarrowUpIcon5}
                alt=""
                src="/biarrowup@2x.png"
              />
              <img
                className={styles.biarrowUpIcon6}
                alt=""
                src="/biarrowup@2x.png"
              />
              <img
                className={styles.biarrowUpIcon7}
                alt=""
                src="/biarrowup.svg"
              />
              <div className={styles.afterImplementation}>
                After Implementation
              </div>
              <div className={styles.dailyAverage2}>
                <span>
                  <span className={styles.factors1}>Daily Average:</span>
                </span>
                <span>{`    `}</span>
                <span className={styles.span}>{`              `}</span>
              </div>
            </div>
          </div>
          <div className={styles.calendarStatistics1}>
            <div className={styles.wrapper} data-animate-on-scroll>
              <DatePicker
                value={frameDateTimePicker1Value}
                onChange={(newValue: any) => {
                  setFrameDateTimePicker1Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: false,
                    required: false,
                    autoFocus: false,
                    error: false,
                    color: "primary",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
          </div>
          <FormControl
            className={styles.actionsParent}
            variant="outlined"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "238px",
              height: "48px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "48px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "48px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "48px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "48px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary">Actions</InputLabel>
            <Select
              color="primary"
              
              label="Actions"
              disableUnderline
              displayEmpty
            >
              <MenuItem value="Smart lighting">Smart lighting</MenuItem>
              <MenuItem value="Enhanced security">Enhanced security</MenuItem>
              <MenuItem value="Additional Camera">Additional Camera</MenuItem>
              <MenuItem value="Staff training">Staff training</MenuItem>
              <MenuItem value="Alcohol management">Alcohol management</MenuItem>
              <MenuItem value="enviornmental design">
                enviornmental design
              </MenuItem>
              <MenuItem value="safe entrances/exits">
                safe entrances/exits
              </MenuItem>
              <MenuItem value="" />
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className={styles.placesParent}
            variant="outlined"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "238px",
              height: "48px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "48px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "48px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "48px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "48px",
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
          <b
            className={styles.moreInfo}
            onClick={openRatingInfoPopup}
          >{`More Info >`}</b>
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
        {isRatingInfoPopupOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            onOutsideClick={closeRatingInfoPopup}
          >
            <RatingInfo onClose={closeRatingInfoPopup} />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};

export default PolicyComparison;
