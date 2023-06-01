const { Schema, model } = require('mongoose');

const shopsSchema = new Schema({
  shopsName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Items',
    },
  ],
// *Discount button possibly soon???
});

const Shops = model('Shops', shopsSchema);

module.exports = Shops;