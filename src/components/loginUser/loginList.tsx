import React from "react";

import { Login } from "../../types";
import UserComponent from "../login/User";

interface Props {
  loginUsers: Login[];
}

const UserLoginList: React.FunctionComponent<Props> = ({ loginUsers }) => (
  <div>
    {!loginUsers.length ? (
      <p>No users to display.</p>
    ) : (
      <ul>
        {loginUsers.map(({ id, ...user }) => (
          <li key={id}>
            <UserComponent {...user} />
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default UserLoginList;
