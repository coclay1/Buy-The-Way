const { Schema, model } = require('mongoose');

const charactersSchema = new Schema({
  charactersName: {
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
// * Add some gold ???
});

const Characters = model('Characters', charactersSchema);

module.exports = Characters;