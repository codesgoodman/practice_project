import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";

function AddUser(props) {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const inputChangeHandler1 = (event) => {
    setInputValue1(event.target.value);
  };
  const inputChangeHandler2 = (event) => {
    setInputValue2(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddUser([inputValue1, inputValue2]);
  };
  return (
    <form className={classes.input} onSubmit={submitHandler}>
      <p>User name</p>
      <input onChange={inputChangeHandler1} type="text"></input>
      <p>Age(Years)</p>
      <input onChange={inputChangeHandler2} type="number"></input>
      <Button />
    </form>
  );
}

export default AddUser;
