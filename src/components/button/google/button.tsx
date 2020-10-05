import React from "react";
import { Query } from "../../../types";
import classes from "./button.module.css";
import { authorizeUser } from "../../../graphql/query/login";

import { useQuery } from "react-apollo";

interface Props {
  children: any;
  clicked: any;
  visible: any;
}

const facebook: React.FunctionComponent<Props> = ({
  children,
  clicked,
  visible,
}) => {
  let buttonClasses = [classes.Button];
  if (visible == "visible") {
    buttonClasses.push(classes.ShowButton);
  } else {
    buttonClasses.push(classes.HideButton);
  }
  return (
    <div>
      <button className={buttonClasses.join(" ")} onClick={clicked}>
        {children}
      </button>
    </div>
  );
};

export default facebook;
