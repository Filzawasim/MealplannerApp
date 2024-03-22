/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      mealtype: {
        type: String,
        required: true,
      },
    },
  ],
});


const Menu = mongoose.model("Menu",menuSchema);

module.exports = Menu