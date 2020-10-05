import React from "react";
import { Query } from "../../types";
import { authorizeUser } from "../../graphql/query/login";

import { useQuery } from "react-apollo";
//useMutation

interface Props {
  credentials: any;
  authorized: any;
  children: any;
}

const FormData: React.FunctionComponent<Props> = ({
  credentials,
  authorized,
  children,
}) => {
  const { loading, error, data } = useQuery<Query>(authorizeUser, {
    variables: {
      username: credentials.username,
      password: credentials.password,
    },
  });

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading forms...</p>;
  let authorize: boolean = false;
  if (data?.authorizeUser?.username != null) {
    authorize = true;
  }

  // if (credentials != undefined) {
  //   console.log(credentials, "authorize = " + authorize);
  // }
  return <div></div>;
};

export default FormData;
