import React from "react";
import "./Card.css";

const Card = (props) => {
  // allows this custom component to support class(className)
  const classes = `card ${props.className}`;
  // children: content between the opening and closing tag of a component
  return <div className={classes}>{props.children}</div>;
};

export default Card;
