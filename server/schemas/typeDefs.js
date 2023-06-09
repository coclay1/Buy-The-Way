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
    items: [Item]
}

type Item{
    _id: ID
    itemName: String
    itemPrice: Float
}

type Shop {
    _id: ID
    shopsName: String
    items: [Item]
}

type Auth {
    token: ID!
    user: User
  }
type Query {
    users: [User]
    user(username: String!): User
    shops(username: String): [Shop]
    shop(shopId: ID!): Shop
    item(itemId: ID!): Item
    items(shopName: String): [Item]
    characters(username: String): [Character]
    character(characterId: ID!): Character
}
type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addShop(shopName: String!): Shop
    addCharacter(characterId: ID!, characterName: String!): Character
    removeShop(shopId: ID!): Shop
    removeCharacter(characterId: ID!): Character
    addItem(shopId: ID!, itemName: String!, itemPrice: Float!): Shop
    removeItem(itemId: ID!): Item
}

`;

module.exports = typeDefs;