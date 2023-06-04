import { gql } from '@apollo/client';

export const SHOP = gql`
  query getShop($username: String) {
    shops(username: $username) {
      _id
      shopsName
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

export const QUERY_SINGLE_ITEM = gql`
  query getSingleItem($itemID: ID!) {
    item(itemId: $itemId) {
      _id
      itemName
      itemPrice
    }
  }
`;

export const QUERY_SHOPS = gql` 
  query getShops {
    shops {
      _id
      shopsName
    }
  }
`;

export const QUERY_SINGLE_SHOP = gql`
  query getSingleShop($shopId: ID!) {
    shop(shopId: $shopId) {
      _id
      shopsName
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
        shopsName
        items {
          _id
          itemName
          itemPrice
        }
      }
    }
  }
`;
