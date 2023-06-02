const { AuthenticationError } = require('apollo-server-express');
const { User, Characters, Items, Shops } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
   Query: {
    users: async () => {
         return User.find().populate('shops');
      },
      user: async (parent, { username }) => {
         return User.findOne({ username }).populate('shop');
      },
      shops: async (parent, { username }) => {
         const params = username ? { username } : {};
         return Shops.find(params).populate("items");
      },
      shop: async (parent, { shopId }) => {
         return await Shops.findOne({ _id: shopId });
      },
      characters: async (parent, { userName }) => {
         const params = userName ? { userName } : {};
         return Characters.find(params).populate("items");
      },
      items: async (parent, { shopId }) => {
         const params = shopId ? { shopId } : {};
         return await Items.find(params);
      },
      item: async (parent, { itemId }) => {
         return await Items.findOne({ _id: itemId });
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
      addCharacter: async (parent, { characterName }, context) => {
         if (context.user) {
            const shop = await Character.create({
               characterName,
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