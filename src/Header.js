import React from "react";
import classes from "./App.module.css";

const Subscription = () => {
  return (
    <div className={classes.HeaderContainer}>
      <div style={{ margin: "30px" }}>
        <ion-icon
          style={{ fontSize: "40px", color: "lightblue" }}
          name="musical-note-outline"
        ></ion-icon>
        <span style={{ fontSize: "40px", fontWeight: "600", color: "#fff" }}>
          ascap
        </span>
      </div>
      <div style={{ fontSize: "28px" }}>Membership Application</div>
      <div>LOOKING FOR HELP?</div>
    </div>
  );
};

export default Subscription;
