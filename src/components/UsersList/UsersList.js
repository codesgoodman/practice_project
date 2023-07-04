import React from "react";
import classes from "./UsersList.module.css";
import Card from "../Card/Card";

function UsersList(props) {
  return (
    <Card className={classes.users}>
      <div>
        <ul>
          {props.users.map((user) => (
            <li key={props.id}>
              {user.name}({user.age} years old)
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default UsersList;
