const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    shops: [Shops]
}

type Character{
    _id: ID
    charactersName: String
    item: [Item]
}

type Item{
    _id: ID
    itemName: String
    itemPrice: Number
}

type Shops {
    _id: ID
    shopName: String
    item: [Item]
}

type Auth {
    token: ID!
    user: User
  }
type Query {
    users: [user]
    
    shop(username: String): [Shops]
    shop(ShopId: ID!): Shops
    item(itemId: ID!): Items
    item(shopName: String): [Items]
    character(username: String): [Characters]
    character(characterId: ID!): Characters
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addShop(shopName: String!): Shops
    addCharacter:(characterId: ID!, characterName: String!): Characters
    removeShop(shopId: ID!): Shops
    removeCharacter(characterId: ID!): Characters
    addItem(itemId: ID!, itemName: String!): Items
    removeItem(itemId: ID!): Items
}
`;

module.exports = typeDefs;