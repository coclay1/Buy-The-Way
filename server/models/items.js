const { Schema, model } = require('mongoose');

const itemsSchema = new Schema({
  itemName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  itemPrice:{
    type: Number,
    required: true,
  }
// * Add attributes???
});

const Items = model('Items', itemsSchema);

module.exports = Items;