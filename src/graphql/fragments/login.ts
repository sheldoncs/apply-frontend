import { gql } from "apollo-boost";

export const loginFields = gql`
  fragment userFields on Login {
    id
    username
    password
  }
`;
