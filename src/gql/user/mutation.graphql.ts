import { gql } from '@apollo/client';

export const SIGNUP = gql`
  mutation SignUp($user: SignUpInputType!) {
    signUp(user: $user)
  }
`;
export const LOGIN = gql`
  mutation Login($did: String!) {
    login(did: $did) {
      id
      username
      fullname
      avatar
    }
  }
`;

export const LOGOUT = gql`
  mutation {
    logout
  }
`;
