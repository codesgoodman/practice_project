import React from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";
import "./index.css";

function App() {
  function addUserHandler(userInfo) {
    console.log(userInfo);
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
    </div>
  );
}

export default App;
