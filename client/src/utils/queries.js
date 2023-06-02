import { gql } from '@apollo/client';

export const SHOP = gql`
  query getShop($username: String) {
    shops(username: $username) {
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


export const QUERY_ALL_ITEMS = gql`
  {
    items {
      _id
      itemName
      itemPrice
    }
  }
`;

export const QUERY_SHOPS = gql`
  {
    shops {
      _id
      shopName
    }
  }
`;

export const QUERY_SINGLE_SHOP = gql`
  query getSingleShop($shopId: ID!) {
    shop(shopId: $shopId) {
      _id
      shopName
      items {
        _id
        itemName
        itemPrice
      }
    }

  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      shops {
        _id
        shopName
        items {
          _id
          itemName
          itemPrice
        }
      }
    }
  }
`;
