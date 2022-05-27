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
    <div className={classes.Header}>
      <div className={classes.HeaderLeft}>
        <a
          style={{ textDecoration: "none", color: "#1178CE" }}
          href="https://www.ascap.com/"
        >
          <ion-icon
            style={{
              width: "40px",
              fontSize: "40px",
              color: "lightblue",
            }}
            name="musical-note-outline"
          ></ion-icon>

          {screenSize > 870 ? (
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
        </a>
      </div>
      <div className={classes.HeaderMiddle}>Membership Application</div>
      <div className={classes.HeaderRight}>
        {screenSize > 870 ? (
          <button
            className={classes.HeaderButton}
            onClick={() => {
              openHelpCenter();
            }}
          >
            LOOKING FOR HELP?
          </button>
        ) : (
          <button
            className={classes.HeaderQuestion}
            onClick={() => {
              openHelpCenter();
            }}
          >
            ?
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
/*

      <div className={classes.HeaderMiddle}>Membership Application</div>


      */
