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

export const LOGIN_USER = gql`
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
      shopName
      item {
        _id
        itemName
        itemPrice
      }
    }
  }
`;

export const ADD_CHARACTER = gql`
  mutation addCharacter($characterName: String){
    addCharacter(characterName: $characterName) {
      _id
      characterName
      item{
        _id
        itemName
        itemPrice
      }
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
  mutation addItem($shopId: ID!, $itemName: String!) {
    addItem(shopId: $shopId, itemName: $itemName) {
      _id
      shopName
      item {
        _id
        itemName
        itemPrice
      }
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


