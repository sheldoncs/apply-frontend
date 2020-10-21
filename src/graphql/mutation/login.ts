import { gql } from "apollo-boost";
import { loginFields } from "../fragments/login";

export const createLogin = gql`
  mutation($data: Login) {
    addLoginInfo(data: $data) {
      ...userFields
    }
  }
  ${loginFields}
`;

export const updateUser = gql`
  mutation($id: ID!, $data: Login) {
    updateUser(id: $id, data: $data) {
      ...userFields
    }
  }
  ${loginFields}
`;

export const deleteUser = gql`
  mutation($id: ID!) {
    deleteLoginById(id: $id) {
      ...userFields
    }
  }
  ${loginFields}
`;
