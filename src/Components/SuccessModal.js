import React, { useState, Fragment } from "react";

import Backdrop from "./Backdrop";
import classes from "./SuccessModal.module.css";

const SuccessModal = (props) => {
  //console.log("props: ", props);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const stylingUpdate = (inWidth) => {
    setScreenSize(inWidth);
  };

  window.onresize = function (event) {
    stylingUpdate(window.innerWidth);
  };

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={classes.ModalContainer}
      >
        {screenSize <= 540 ? (
          <Fragment>
            <div className={classes.CloseIcon} style={{ textAlign: "right" }}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "left",
                margin: "40px 0px 10px",
              }}
            >
              Successfull Submission
            </div>
          </Fragment>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 30px",
              margin: "0px 0px 0px",
            }}
            onClick={props.clicked}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              Successfull Submission
            </div>
            <div className={classes.CloseIcon} style={{ textAlign: "right" }}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
        )}
        <div
          style={{
            fontSize: "16px",
            textAlign: "left",
            margin: "0px 0px 16px",
          }}
        >
          <p>Step 1 of the Membership Application has been completed.</p>
          <p>Membership type: {props.membership}</p>
          {props.company !== "none" ? (
            <p>Company type: {props.company}</p>
          ) : null}
        </div>

        <div
          style={{
            margin: "30px 0px 20px",
          }}
        >
          <hr className={classes.HorizontalLine} />
        </div>

        <div
          style={{
            margin: "30px 0px 20px",
          }}
        >
          <button className={classes.ButtonGrey} onClick={props.clicked}>
            RESET
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SuccessModal;
