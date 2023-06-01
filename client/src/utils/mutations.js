import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SHOP = gql`
  mutation addShop($shopName: String!) {
    addShop(shopName: $shopName) {
      _id
      username
      email
    }
  }
`;

export const REMOVE_SHOP = gql`
  mutation removeShop($shopId: ID!) {
    removeShop(shopId: $shopId) {
      _id
      username
      email
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($itemId: ID!, $itemName: String!) {
    addItem(itemId: $itemId, itemName: $itemName) {
      _id
      username
      email
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation removeItem($itemId: ID!) {
    removeItem(itemId: $itemId) {
      _id
      username
      email
    }
  }
`;


type Mutation {
  createMatchup(tech1: String!, tech2: String!): Matchup
  createVote(_id: String!, techNum: Int!): Matchup
}