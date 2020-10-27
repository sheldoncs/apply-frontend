import { gql } from "apollo-boost";
import { loginFields } from "../fragments/login";

export const getLogins = gql`
  query {
    logins {
      ...userFields
    }
  }
  ${loginFields}
`;

export const getByEmail = gql`
  query($username: String) {
    singleLoginByUsername(username: $username) {
      ...userFields
    }
  }
  ${loginFields}
`;
export const getLogin = gql`
  query($id: ID!) {
    login(id: $id) {
      ...userFields
    }
  }
  ${loginFields}
`;
export const authorizeUser = gql`
  query($username: String, $password: String) {
    authorizeUser(username: $username, password: $password) {
      ...userFields
    }
  }
  ${loginFields}
`;

export const singleLoginByUsername = gql`
  query($username: String) {
    singleLoginByUsername(username: $username) {
      ...userFields
    }
  }
  ${loginFields}
`;
