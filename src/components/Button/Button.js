import React from "react";
import classes from "./Button.module.css";

function Button() {
  const clickHandler = (event) => {
    event.preventDefault();
  };
  return (
    <button className={classes.button} type="submit" onClick={clickHandler}>
      Add User
    </button>
  );
}

export default Button;
