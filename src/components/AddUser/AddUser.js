import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import ErrorModal from "../ErrorModal/ErrorModal";

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
    if (inputValue1.trim().length === 0 || inputValue2.trim().length === 0) {
      return;
    }
    if (+inputValue2 < 1) {
      return;
    }
    props.onAddUser(inputValue1, inputValue2);
    setInputValue1("");
    setInputValue2("");
  };
  return (
    <div>
      <ErrorModal title="" message="" />
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User name</label>
          <input
            value={inputValue1}
            id="username"
            onChange={inputChangeHandler1}
            type="text"
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            value={inputValue2}
            id="age"
            onChange={inputChangeHandler2}
            type="number"
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
