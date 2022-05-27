import React, { useState } from "react";
import classes from "./App.module.css";

const Header = () => {
  const openHelpCenter = () => {
    window.open("https://ome.ascap.com/helpcenter", "_blank");
  };

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const stylingUpdate = (inWidth) => {
    console.log("stylingUpdate in Header");
    setScreenSize(inWidth);
    console.log("screenSize in Header: ", screenSize);
  };

  window.onresize = function (event) {
    console.log("resized in Header");
    stylingUpdate(window.innerWidth);
  };

  return (
    <div className={classes.HeaderContainer}>
      <div style={{ margin: "40px" }}>
        <ion-icon
          style={{
            width: "40px",
            fontSize: "40px",
            color: "lightblue",
          }}
          name="musical-note-outline"
        ></ion-icon>

        {screenSize > 770 ? (
          <span
            style={{
              fontSize: "45px",
              fontWeight: "600",
              color: "#fff",
              paddingBottom: "20px",
            }}
          >
            ascap
          </span>
        ) : null}
      </div>
      <div className={classes.HeaderTitle}>Membership Application</div>
      <div style={{ textAlign: "center", margin: "50px 0px" }}>
        {screenSize > 770 ? (
          <button
            onClick={() => {
              openHelpCenter();
            }}
            className={classes.HeaderButton}
          >
            LOOKING FOR HELP?
          </button>
        ) : (
          <ion-icon name="help-circle-outline"></ion-icon>
        )}
      </div>
    </div>
  );
};

export default Header;
