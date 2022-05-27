import React from "react";
import classes from "./App.module.css";

const Subscription = (props) => {
  //console.log("Subscription: ", props.subscription);

  const defineShadow = (status) => {
    if (status === props.activeCard) {
      return {
        boxShadow: "20px 20px 50px #ccc",
      };
    } else return null;
  };

  const defineTitle = (status) => {
    if (status === props.activeCard) {
      return {
        backgroundColor: "#1178CE",
        color: "white",
      };
    } else if (status === props.hoveredCard) {
      return {
        color: "darkblue",
        borderTop: "1px solid lightblue",
        borderLeft: "1px solid lightblue",
        borderRight: "1px solid lightblue",
      };
    } else if ("error" === props.activeCard) {
      return {
        borderTop: "1px solid red",
        borderLeft: "1px solid red",
        borderRight: "1px solid red",
      };
    } else return null;
  };

  const defineCardBody = (status) => {
    if (status === props.activeCard) {
      return {
        border: "1px solid #1178CE",
      };
    } else if (status === props.hoveredCard) {
      return {
        border: "1px solid lightblue",
      };
    } else if ("error" === props.activeCard) {
      return {
        border: "1px solid red",
      };
    } else return null;
  };

  const defineText = (status) => {
    if (status === props.activeCard || status === props.hoveredCard) {
      return { color: "black" };
    } else return null;
  };

  const defineApplicationFee = (status) => {
    if (status === props.activeCard || status === props.hoveredCard) {
      return { color: "#1178CE" };
    } else return null;
  };

  return (
    <div
      className={classes.MembershipCard}
      onClick={() => {
        props.clicked(props.subscription.type);
      }}
      onMouseOver={() => {
        props.hovered(props.subscription.type);
      }}
      onMouseLeave={() => {
        props.hovered("");
      }}
    >
      <div style={defineShadow(props.subscription.type)}>
        <div
          className={classes.CardTitle}
          style={defineTitle(props.subscription.type)}
        >
          <ion-icon
            name={props.subscription.icon}
            style={{ width: "40px" }}
          ></ion-icon>
          {props.subscription.title}
        </div>
        <div
          className={classes.CardBody}
          style={defineCardBody(props.subscription.type)}
        >
          <p
            className={classes.CardDescription}
            style={defineText(props.subscription.type)}
          >
            {props.subscription.description}
          </p>
          <div className={classes.CardApplicationFee}>
            <div
              className={classes.CardApplicationFeeTitle}
              style={defineApplicationFee(props.subscription.type)}
            >
              {props.subscription.fee}
            </div>
            <div className={classes.CardApplicationFeeRefund}>
              {props.subscription.refund}
            </div>
          </div>
          <div
            className={classes.CardItemsTitle}
            style={defineText(props.subscription.type)}
          >
            Requirements
          </div>
          <div className={classes.CardItems}>
            <ul
              type="none"
              className={classes.List}
              style={defineText(props.subscription.type)}
            >
              {props.subscription.requirements.map((req, index) => {
                return (
                  <li
                    style={{
                      display: "grid",
                      gridTemplateColumns: "20px auto",
                      margin: "0px 0px 16px",
                    }}
                  >
                    <ion-icon name="checkmark-outline"></ion-icon>
                    {req}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
