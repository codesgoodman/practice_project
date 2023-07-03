import React from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";

function AddUser() {
  const inputChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={classes.input} onSubmit={submitHandler}>
      <p>User name</p>
      <input onChange={inputChangeHandler} type="text"></input>
      <p>Age(Years)</p>
      <input onChange={inputChangeHandler} type="number"></input>
      <Button />
    </form>
  );
}

export default AddUser;
