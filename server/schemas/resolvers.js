const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Shop } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
   Query: {
      users: async () => {
         return User.find().populate('shop');
      },
      user: async (parent, { userName }) => {
         return User.findOne({ userName }).populate('shops');
      },
      shops: async (parent, { shopName }) => {
         return Shop.findAll({ _id: shopsId })
      },
      shop: async (parent, { shopsName }) => {
         return Shops.findOne({ _id: shopsId });
      },
      items: async (parent, { itemName }) => {
         const params = itemName ? { itemName } : {};
         return Items.find(params).sort({ createdAt: -1 });
      },
      item: async (parent, { itemName }) => {
         return Items.findOne({ _id: itemId });
      },
      characters: async (parent, { chractersName }) => {
         return Characters.findAll({ _id: charactersId })
      },
      character: async (parent, { chractersName }) => {
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
module.exports = resolvers;