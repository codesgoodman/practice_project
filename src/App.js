import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";
import "./index.css";

function App() {
  const [userInput, setUserInput] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserInput((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userInput} />
    </div>
  );
}

export default App;
