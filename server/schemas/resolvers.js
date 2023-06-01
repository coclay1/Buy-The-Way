const { AuthenticationError } = require('apollo-server-express');
const { User, Characters, Items, Shops } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
   Query: {
      users: async () => {
         return User.find().populate('shops');
      },
      user: async (parent, { userName }) => {
         return User.findOne({ userName }).populate('shops');
      },
      shops: async (parent, { shopsId }) => {
         return Shops.findAll({ _id: shopsId })
      },
      shop: async (parent, { shopsId }) => {
         return Shops.findOne({ _id: shopsId });
      },
      items: async (parent, { itemName }) => {
         const params = itemName ? { itemName } : {};
         return Items.find(params).sort({ createdAt: -1 });
      },
      item: async (parent, { itemId }) => {
         return Items.findOne({ _id: itemId });
      },
      chracters: async (parent, { charactersId }) => {
         return Characters.findAll({ _id: charactersId })
      },
      chracter: async (parent, { charactersId }) => {
         return Characters.findOne({ _id: charactersId })
      },

   },
   Mutation: {
      addUser: async (parent, { username, email, password }) => {
         const user = await User.create({ username, email, password });
         const token = signToken(user);
         return { token, user };
      },
      login: async (parent, { email, password }) => {
         const user = await User.findOne({ email });

         if (!user) {
            throw new AuthenticationError('No user found with this email address');
         }

         const correctPw = await user.isCorrectPassword(password);

         if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
         }

         const token = signToken(user);

         return { token, user };
      },
      addShop: async (parent, { shopsName }, context) => {
         if (context.user) {
            const shop = await Shops.create({
               shopsName,
            });
         }
      },
      addCharacter: async (parent, { charactersName }, context) => {
         if (context.user) {
            const character = await Characters.create({
               charactersName,
            });
         }
      },
      addItem: async (parent, { shopId, itemName }, context) => {
         if (context.user) {
            return Items.findOneAndUpdate(
               { _id: shopId },
               {
                  $addToSet: {
                     Items: { itemName, itemPrice },
                  },
               },
            )
         }
      },

   }
};
modules.exports = resolvers;