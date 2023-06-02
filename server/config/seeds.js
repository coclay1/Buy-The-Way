const db = require('./connection');
const { User, Shops, Items, Characters } = require('../models');

db.once('open', async () => {
await User.deleteMany();
  await User.create({
  username: 'MrHolt45',
  email: 'eholt@testmail.com',
  password: 'password12345'
})
  console.log('users seeded');


await Items.deleteMany();
  const items = await Items.insertMany([
  {itemName: 'Holy Moonlight Sword',
  itemPrice: 100000},
  {itemName: 'Chikage',
  itemPrice: 9000},
  {itemName: 'Buster Sword',
  itemPrice: 3500},
  {itemName: 'Dragon Slayer',
  itemPrice: 10000},
  {itemName: 'Berserker Armor',
  itemPrice: 15000},
  {itemName: 'Elder Wand',
  itemPrice: 150000},
  {itemName: 'Mythril Mail',
  itemPrice: 999999},
  {itemName: 'Phoenix Tail Wand',
  itemPrice: 5000},
  {itemName: 'Empty Backpack',
  itemPrice: 10},
]);
  console.log('Item Created');



  await Shops.deleteMany();
  const shop = await Shops.insertMany([
    {shopsName: 'Swirlies Sword Shop',
  items:
  [
    items[0]._id, items[1]._id, items[2]._id, items[3]._id,
  ]
    },
    {shopsName: 'Armies Armor Shop',
  items:
  [
    items[4]._id, items[6]._id,
  ]
    },
    {shopsName: 'Wandas Wand Shop',
  items:
  [
    items[5]._id, items[7]._id,
  ]
    },
  ]);

  await Characters.deleteMany();
  const character = await Characters.insertMany([
    {charactersName: 'Vagabond Vance',
  items:
  [
    items[8]._id,
  ]
    },
  ]);

  



  process.exit();
});