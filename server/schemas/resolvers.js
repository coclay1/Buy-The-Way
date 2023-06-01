const { AuthenticationError } = require('apollo-server-express');
const { User, Thought, Items, Shops } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('shops');
        },
        user: async (parent, {userName}) => {
            return User.findOne({userName}).populate('shops');
        },
     shops: async (parent, {shopsName}) => {
       return Shops.findAll({_id: shopsId})
     },
     shop: async (parent, {shopsName}) => {
        return Shops.findOne({ _id: shopsId });
     },
     items: async (parent, {itemName}) => {
        const params = itemName ? { itemName } : {};
        return Items.find(params).sort({ createdAt: -1 });
     },
     item: async (parent, {itemName}) => {
        return Items.findOne({_id:itemId});
     },
     chracters: async (parent, {chractersName}) => {
        return Characters.findAll({_id:charactersId})
     },
     chracter: async (parent, {chractersName}) => {
        return Characters.findOne({_id:charactersId})
     },

    },
    Mutation: {
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    }
   }
}

 
