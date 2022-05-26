import React, { useState, Fragment } from "react";

import Header from "./Header";
import Subscription from "./Subscription";
import classes from "./App.module.css";

const App = () => {
  const [activeCard, setActiveCard] = useState("");
  const [hoveredCard, setHoveredCard] = useState("");

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
    "Individual / Sole porprietor or Single-member LLC",
    "C Corporation",
    "S Corporation",
    "LLC - C Corporation",
    "LLC - S Corporation",
    "LLC - Partnership",
    "Partnership",
    "Trust / Estate",
    "OTHER",
  ];

  return (
    <Fragment>
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
                subscription={sub}
                activeCard={activeCard}
                hoveredCard={hoveredCard}
                clicked={(tr) => {
                  console.log("clicked the button: ", tr);
                  setActiveCard(tr);
                }}
                hovered={(tr) => {
                  console.log("hover change: ", tr);
                  setHoveredCard(tr);
                }}
              />
            );
          })}
        </div>
        <div
          style={{
            fontSize: "14px",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingBottom: "20px",
          }}
        >
          *If you are under 18 years of age please{" "}
          <span style={{ color: "#1178CE" }}>
            read more about how to join ASCAP.
          </span>
        </div>
        {activeCard === "both" || activeCard === "producer" ? (
          <div
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingBottom: "20px",
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
                //value={props.name.ticketsSelected}
                //className={styles.SelectionBox}
                style={{
                  fontSize: "20px",
                  width: "600px",
                  height: "40px",
                  boxSizing: "border-box",
                }}
                //onChange={props.onChange}
              >
                {companyTypes.map((opt, index) => (
                  <option key={index}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
        ) : null}

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
          processed by TINCheck and SmartyStreets shall be subject to the
          privacy policies of{" "}
          <a
            style={{ textDecoration: "none", color: "#1178CE" }}
            href="https://www.tincheck.com/pages/tincheck-agreement"
            target="_blank"
            rel="noreferrer"
          >
            TINCheck
          </a>{" "}
          and{" "}
          <a
            style={{ textDecoration: "none", color: "#1178CE" }}
            href="https://www.smarty.com/legal/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            SmartyStreets
          </a>
          .
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "190px 190px",
          paddingTop: "20px",
          paddingLeft: "20px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ paddingRight: "10px" }}>
          <button style={{ width: "180px", height: "40px" }}>CANCEL</button>
        </div>
        <button
          style={{
            width: "180px",
            height: "40px",
            color: "#fff",
            backgroundColor: "#1178CE",
            padding: "10px 20px 9px",
          }}
        >
          CONTINUE
        </button>
      </div>
    </Fragment>
  );
};

export default App;
