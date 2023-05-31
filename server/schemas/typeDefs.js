const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
}

type Character{
    _id: ID
    charactersName: String
}

type Item{
    _id: ID
    itemName: String
    itemPrice: Number
}
`;