import React, { useState, Fragment } from "react";

import Header from "./Components/Header";
import Subscription from "./Components/Subscription";
import MinorAppModal from "./Components/MinorAppModal";
import SuccessModal from "./Components/SuccessModal";
import classes from "./App.module.css";

const App = () => {
  const [activeCard, setActiveCard] = useState("");
  const [hoveredCard, setHoveredCard] = useState("");
  const [companyType, setCompanyType] = useState("none");
  const [selectError, setSelectError] = useState(false);
  const [showMinorAppModal, setShowMinorAppModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const stylingUpdate = (inWidth) => {
    setScreenSize(inWidth);
  };

  window.onresize = function (event) {
    stylingUpdate(window.innerWidth);
  };

  const subscriptions = [
    {
      icon: "medkit-outline",
      title: "Writer & Publisher",
      type: "both",
      description:
        "ASCAP royalties are split evenly between Writers and Publishers. Join as both to ensure you get paid everything you deserve.",
      fee: "$100 APPLICATION FEE",
      refund: "non-refundable",
      requirements: [
        "Legal Name",
        "Mailing Address",
        "Valid Email Address",
        "SSN/ITIN",
        "Must be 18 or older to apply online*",
      ],
    },
    {
      icon: "musical-notes-outline",
      title: "Writer",
      type: "writer",
      description:
        "A Writer is someone who creates a musical composition: the melody, harmony, lyrics, arrangements, beats, etc.",
      fee: "$50 APPLICATION FEE",
      refund: "non-refundable",
      requirements: [
        "Legal Name",
        "Mailing Address",
        "Valid Email Address",
        "SSN/ITIN",
        "Must be 18 or older to apply online*",
      ],
    },
    {
      icon: "briefcase-outline",
      title: "Producer",
      type: "producer",
      description:
        "A Publisher is a person or company that handles the business side of music. Publishers may control the copyrights of a musical composition, licensing, etc.",
      fee: "$50 APPLICATION FEE",
      refund: "non-refundable",
      requirements: [
        "Legal Name",
        "Mailing Address",
        "Valid Email Address",
        "SSN/ITIN",
        "Must be 18 or older to apply online*",
      ],
    },
  ];

  const companyTypes = [
    {
      value: "individual",
      text: "Individual / Sole porprietor or Single-member LLC",
    },
    {
      value: "cCorp",
      text: "C Corporation",
    },
    {
      value: "sCorp",
      text: "S Corporation",
    },
    {
      value: "llcCCorp",
      text: "LLC - C Corporation",
    },
    {
      value: "llcSCorp",
      text: "LLC - S Corporation",
    },
    {
      value: "llcPartnership",
      text: "LLC - Partnership",
    },
    {
      value: "partnership",
      text: "Partnership",
    },
    {
      value: "trustEstate",
      text: "Trust / Estate",
    },
    {
      value: "other",
      text: "OTHER",
    },
  ];

  const membershipError = () => {
    if (activeCard === "error") {
      return (
        <div className={classes.ErrorText}>
          Please select your membership type.
        </div>
      );
    }
  };

  const underAge = (
    <div className={classes.JoinASCAP}>
      *If you are under 18 years of age please{" "}
      <button
        className={classes.BlueText}
        onClick={() => setShowMinorAppModal(true)}
      >
        <span>read more about how to join ASCAP.</span>
      </button>
    </div>
  );

  const companyTypeSelection = () => {
    if (activeCard === "both" || activeCard === "producer") {
      return (
        <div
          style={{
            padding: "0px 20px 20px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "4px",
            }}
          >
            Publisher Company Type
          </div>
          <div
            style={{
              fontSize: "16px",
              marginBottom: "16px",
            }}
          >
            Please select the federal tax classification of your publisher
            company.
          </div>

          <div>
            <select
              type="number"
              name="ticketsSelected"
              required
              value={companyType}
              className={classes.SelectionBox}
              style={selectError ? { border: "1px solid red" } : null}
              onChange={(event) => {
                setCompanyType(event.target.value);
                setSelectError(false);
              }}
            >
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              {companyTypes.map((opt, index) => (
                <option key={index} value={opt.value}>
                  {opt.text}
                </option>
              ))}
            </select>
          </div>
          {selectError ? (
            <div style={{ color: "red" }}>
              Please select your publisher company type.
            </div>
          ) : null}
        </div>
      );
    }
  };

  const detailText = (
    <div
      style={{
        fontSize: "14px",
        paddingLeft: "20px",
        paddingRight: "20px",
        boxSizing: "border-box",
      }}
    >
      ASCAP uses TINCheck and SmartyStreets to verify certain information
      provided by you in connection with your application. Any information
      processed by TINCheck and SmartyStreets shall be subject to the privacy
      policies of{" "}
      <a
        className={classes.HyperLinkText}
        href="https://www.tincheck.com/pages/tincheck-agreement"
        target="_blank"
        rel="noreferrer"
      >
        TINCheck
      </a>{" "}
      and{" "}
      <a
        className={classes.HyperLinkText}
        href="https://www.smarty.com/legal/privacy-policy"
        target="_blank"
        rel="noreferrer"
      >
        SmartyStreets
      </a>
      .
    </div>
  );

  const buttonSection = () => {
    if (screenSize > 575) {
      return (
        <div className={classes.ButtonRow}>
          <div style={{ paddingRight: "10px" }}>
            <button
              className={classes.ButtonGrey}
              style={{ width: "180px", height: "40px" }}
              onClick={() => {
                window.location.href = "https://www.ascap.com/";
              }}
            >
              CANCEL
            </button>
          </div>
          <button
            className={classes.ButtonBlue}
            style={{
              width: "180px",
              height: "40px",
            }}
            onClick={() => {
              if (activeCard === "") {
                setActiveCard("error");
              }

              if (companyType === "none") {
                setSelectError(true);
              }

              if (
                ((activeCard === "both" || activeCard === "producer") &&
                  companyType !== "none") ||
                activeCard === "writer"
              ) {
                setShowSuccessModal(true);
              }
            }}
          >
            CONTINUE
          </button>
        </div>
      );
    } else {
      return (
        <div style={{ paddingTop: "20px" }}>
          <div style={{ paddingBottom: "20px", paddingLeft: "20px" }}>
            <button
              className={classes.ButtonGrey}
              style={{
                fontSize: "20px",
                width: "calc(100vw - 60px)",
                height: "40px",
              }}
              onClick={() => {
                window.location.href = "https://www.ascap.com/";
              }}
            >
              CANCEL
            </button>
          </div>
          <div style={{ paddingBottom: "20px", paddingLeft: "20px" }}>
            <button
              className={classes.ButtonBlue}
              style={{
                fontSize: "20px",
                width: "calc(100vw - 60px)",
                height: "40px",
              }}
              onClick={() => {
                if (activeCard === "") {
                  setActiveCard("error");
                }

                if (companyType === "none") {
                  setSelectError(true);
                }

                if (
                  ((activeCard === "both" || activeCard === "producer") &&
                    companyType !== "none") ||
                  activeCard === "writer"
                ) {
                  setShowSuccessModal(true);
                }
              }}
            >
              CONTINUE
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <Fragment>
      <div style={{ overflow: "hidden" }}>
        <MinorAppModal
          show={showMinorAppModal}
          clicked={() => setShowMinorAppModal(false)}
        />
        <SuccessModal
          show={showSuccessModal}
          membership={activeCard}
          company={companyType}
          clicked={() => {
            setActiveCard("");
            setCompanyType("none");
            setSelectError(false);
            setShowSuccessModal(false);
          }}
        />
        <Header />
        <div className={classes.MainContainer}>
          <div className={classes.SectionTitle}>Membership</div>
          <div className={classes.SectionDescription}>
            Select your membership type below:
          </div>
          <div className={classes.SubscriptionContainer}>
            {subscriptions.map((sub, index) => {
              return (
                <Subscription
                  key={index}
                  subscription={sub}
                  activeCard={activeCard}
                  hoveredCard={hoveredCard}
                  clicked={(tr) => {
                    setActiveCard(tr);
                    setSelectError(false);
                    setCompanyType("none");
                  }}
                  hovered={(tr) => {
                    setHoveredCard(tr);
                  }}
                />
              );
            })}
          </div>
          {membershipError()}
          {underAge}
          {companyTypeSelection()}
          {detailText}
          {buttonSection()}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
