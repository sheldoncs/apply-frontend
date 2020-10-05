import React from "react";
import { Query } from "../../../types";
import classes from "./button.module.css";
import { authorizeUser } from "../../../graphql/query/login";

import { useQuery } from "react-apollo";

interface Props {
  credentials: any;
  clicked: any;
  children: any;
  disabled: any;
}

const Authorize: React.FunctionComponent<Props> = ({
  credentials,
  clicked,
  children,
  disabled,
}) => {
  let buttonClasses = [classes.Button];
  buttonClasses.push("btn");
  buttonClasses.push("btn-info");
  if (credentials != null) {
    if (credentials.username == undefined) {
      credentials.username = " ";
    }
    if (credentials.password == undefined) {
      credentials.password = " ";
    }
  }
  const { loading, error, data } = useQuery<Query>(authorizeUser, {
    variables: {
      username: credentials.username,
      password: credentials.password,
    },
  });

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users...</p>;
  let authorize: boolean = false;
  if (data?.authorizeUser?.username != null) {
    authorize = true;
  }

  return (
    <div>
      <button
        className={buttonClasses.join(" ")}
        onClick={() => clicked(authorize)}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Authorize;
