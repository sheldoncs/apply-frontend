import { gql } from "apollo-boost";
import { loginFields } from "../fragments/login";

export const createLogin = gql`
  mutation($data: CreateUserLogin) {
    createLogin(data: $data) {
      ...loginFields
    }
  }
  ${loginFields}
`;

// export const updateUser = gql`
//   mutation($id: ID!, $data: UpdateUserInput) {
//     updateUser(id: $id, data: $data) {
//       ...userFields
//     }
//   }
//   ${userFields}
// `;

export const deleteUser = gql`
  mutation($id: ID!) {
    deleteLogin(id: $id) {
      ...userFields
    }
  }
  ${loginFields}
`;
