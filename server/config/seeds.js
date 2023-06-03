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
    // 0
  {itemName: 'Holy Moonlight Sword',
  itemPrice: 100000},
  // 1
  {itemName: 'Chikage',
  itemPrice: 9000},
  // 2
  {itemName: 'Buster Sword',
  itemPrice: 3500},
  // 3
  {itemName: 'Dragon Slayer',
  itemPrice: 10000},
  // 4
  {itemName: 'Berserker Armor',
  itemPrice: 15000},
  // 5
  {itemName: 'Elder Wand',
  itemPrice: 150000},
  // 6
  {itemName: 'Mythril Mail',
  itemPrice: 999999},
  // 7
  {itemName: 'Phoenix Tail Wand',
  itemPrice: 5000},
  // 8
  {itemName: 'Empty Backpack',
  itemPrice: 10},
  // 9
  {itemName: 'Bottomless Bag',
  itemPrice: 1000},
  // 10
  {itemName: 'Health Potion',
  itemPrice: 1000},
  // 11
  {itemName: 'Stamina Potion',
  itemPrice: 500},
  // 12
  {itemName: 'Strength Potion',
  itemPrice: 550},
  // 13
  {itemName: 'Pint O Ale',
  itemPrice: 2},
  // 14
  {itemName: 'Honey Mead',
  itemPrice: 5},
  // 15
  {itemName: 'Wine',
  itemPrice: 8},
]);
  console.log('Items seeded');



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
    {shopsName: 'Apothecary Carries Shop',
  items:
  [
    items[10]._id, items[11]._id, items[12]
  ]
    },
    {shopsName: 'Tavares Tavern',
  items:
  [
    items[13]._id, items[14]._id, items[15]
  ]
    },
  ]);
  console.log('Shops seeded');


  await Characters.deleteMany();
  const character = await Characters.insertMany([
    {charactersName: 'Vagabond Vance',
  items:
  [
    items[8]._id,
  ]
    },
    {charactersName: 'Traveling Travis',
  items:
  [
    items[9]._id,
  ]
    },
  ]);
  console.log('Characters seeded');
  



  process.exit();
});