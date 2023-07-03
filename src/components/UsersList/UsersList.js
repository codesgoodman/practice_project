import React from "react";
import classes from "./UsersList.module.css";

function UsersList(props) {
  return (
    <div>
      <p>{`${props.data[0]}(${props.data[1]})`}</p>
    </div>
  );
}

export default UsersList;
