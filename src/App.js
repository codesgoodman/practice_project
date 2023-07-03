import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";
import "./index.css";

function App() {
  const [isValid, setIsValid] = useState(true);
  const [userInput, setUserInput] = useState("");
  function addUserHandler(userInfo) {
    if (userInfo[0].length > 1 || userInfo[1] > 1) {
      setUserInput(userInfo);
    } else {
      setIsValid(false);
    }
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList data={userInput} validity={isValid} />
    </div>
  );
}

export default App;
