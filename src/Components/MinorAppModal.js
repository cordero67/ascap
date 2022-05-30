import React, { useState, Fragment } from "react";

import Backdrop from "./Backdrop";
import classes from "./MinorAppModal.module.css";

const MinorAppModal = (props) => {
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
              Minor Application (Under 18)
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
              Minor Application (Under 18)
            </div>
            <div className={classes.CloseIcon} style={{ textAlign: "right" }}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
        )}
        <p
          style={{
            fontSize: "16px",
            textAlign: "left",
            margin: "0px 0px 16px",
          }}
        >
          We’d love to have you join ASCAP but we can’t accept your application
          online.
        </p>
        <p
          style={{
            fontSize: "16px",
            textAlign: "left",
            margin: "0px 0px 16px",
          }}
        >
          In keeping with Children’s Online Privacy Protection Act (COPPA) laws,
          ASCAP does not accept applications from persons under 18 without the
          consent of a parent or legal guardian.
        </p>
        <p
          style={{
            fontSize: "16px",
            textAlign: "left",
            margin: "0px 0px 16px",
          }}
        >
          Download the form(s) and follow the instructions for completing and
          mailing your application.
        </p>
        <div className={classes.HyperLink}>
          <a
            className={classes.HyperLinkText}
            href="https://www.ascap.com/contact-us/~/media/44e91554998e4bc08b2ba04fcfa699dd.ashx"
            target="_blank"
            rel="noreferrer"
          >
            DOWNLOAD WRITER APPLICATION
          </a>
        </div>
        <div className={classes.HyperLink}>
          <a
            className={classes.HyperLinkText}
            href="https://www.ascap.com/contact-us/~/media/10566aa6842b425091d248ac343dced1.ashx"
            target="_blank"
            rel="noreferrer"
          >
            DOWNLOAD PUBLISHER APPLICATION
          </a>
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
            CANCEL
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default MinorAppModal;
