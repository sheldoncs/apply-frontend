import React from "react";
import { Query } from "../../types";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import { getLogins } from "../../graphql/query/login";

const Users = () => {
  
  // <Query query={getLogins}></Query>;
  //   {({ loading, error, data }) => {
  //     if (loading) return <p>Loading...</p>;
  //     if (error) return <p>Error...</p>;
  //     return data.logins.map(({ id, username, email, password }) => {
  //       return (
  //         <div key={id}>
  //           <p>{username}</p>
  //           <p>{email}</p>
  //           <p>{password}</p>
  //         </div>
  //       );
  //     });
  //   }}
  // </Query>;
  // return <div></div>;
};

export default Users;
