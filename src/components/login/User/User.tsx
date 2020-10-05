import React from "react";

interface Props {
  username: string;
  password: string;
}

const User: React.FunctionComponent<Props> = ({ username, password }) => (
  <div>
    <p>{username}</p>
    <p>{password}</p>
  </div>
);

export default User;
