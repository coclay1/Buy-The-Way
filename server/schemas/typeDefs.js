const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    shops: [Shop]
}

type Character{
    _id: ID
    charactersName: String
    item: [Item]
}

type Item{
    _id: ID
    itemName: String
    itemPrice: Float
}

type Shop {
    _id: ID
    shopName: String
    item: [Item]
}

type Auth {
    token: ID!
    user: User
  }
type Query {
    users: [User]
    user(userId: ID!): User
    shops(username: String): [Shop]
    shop(ShopId: ID!): Shop
    item(itemId: ID!): Item
    items(shopName: String): [Item]
    characters(username: String): [Character]
    character(characterId: ID!): Character
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addShop(shopName: String!): Shops
    addCharacter(characterId: ID!, characterName: String!): Characters
    removeShop(shopId: ID!): Shops
    removeCharacter(characterId: ID!): Characters
    addItem(itemId: ID!, itemName: String!): Items
    removeItem(itemId: ID!): Items
}
`;

module.exports = typeDefs;