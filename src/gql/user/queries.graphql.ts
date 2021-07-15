import { gql } from '@apollo/client';

export const IS_REGISTERED_USER = gql`
  query IsRegisteredUser($email: String!) {
    isRegisteredUser(email: $email)
  }
`;

export const IS_USERNAME_UNIQUE = gql`
  query IsUserNameUnique($username: String!) {
    isUserNameUnique(username: $username)
  }
`;

export const IS_LOGGED_IN = gql`
  query {
    isLoggedIn
  }
`;

export const GET_ME = gql`
  query GetMe {
    me {
      id
      username
      avatar
    }
  }
`;

export const GET_MY_PROFILE_DATA = gql`
  query GetMe {
    me {
      id
      username
      fullname
      avatar
      createdAt
    }
  }
`;
