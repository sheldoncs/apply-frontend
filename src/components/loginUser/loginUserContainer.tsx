import React from "react";
import { useQuery } from "react-apollo";

import { getLogins } from "../../graphql/query/login";
import { Query } from "../../types";
import UserList from "./loginList";

const LoginContainer: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery<Query>(getLogins);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users...</p>;
  // console.log(data);
  return <UserList loginUsers={data!.logins} />;
};
// const logo = (props) => {
//   return (
//     <div className={classes.Logo}>
//       <img src={burgerLogo} alt="My Burger" />
//     </div>
//   );
// };
// export default logo;
export default LoginContainer;
