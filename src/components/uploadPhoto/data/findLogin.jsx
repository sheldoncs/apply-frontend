import { Query } from "../../../types";
import { singleLoginByUsername } from "../../../graphql/query/login";
import { query } from "@apollo/client";

export const findLogin = (uname) => {
  const { loading, error, data } = query(singleLoginByUsername, {
    variables: {
      username: uname,
    },
  });

  // if (loading) {
  //   console.log("Loading...");
  // }
  // // if (error) {
  // //   return "" ;
  // // }

  // console.log("data", data);

  return "";
};
