import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";

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
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">User name</label>
        <input id="username" onChange={inputChangeHandler1} type="text"></input>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" onChange={inputChangeHandler2} type="number"></input>
        <Button />
      </form>
    </Card>
  );
}

export default AddUser;
