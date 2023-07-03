import React from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";

function AddUser() {
  return (
    <form className={classes.input}>
      <p>User name</p>
      <input></input>
      <p>Age(Years)</p>
      <input></input>
      <Button />
    </form>
  );
}

export default AddUser;
