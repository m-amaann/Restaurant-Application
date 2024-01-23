const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true 
  },
  description: {
    type: String,
    required: true,
    trim: true 
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', 
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0 
  },
  toppingOptions: [
    {
      topping_id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true 
      },
      topping_name: {
        type: String,
        required: true
      },
      additional_price: {
        type: Number,
        required: true,
        min: 0 
      }
    }
  ],
  cheeseOptions: [
    {
      cheese_id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true 
      },
      cheese_name: {
        type: String,
        required: true
      },
      additional_price: {
        type: Number,
        required: true,
        min: 0 
      }
    }
  ],
  riceOptions: [
    {
      rice_id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true 
      },
      rice_name: {
        type: String,
        required: true
      },
      additional_price: {
        type: Number,
        required: true,
        min: 0 
      }
    }
  ],
  addExtraOption: [
    {
      addons_id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true 
      },
      addons_name: {
        type: String,
        required: true
      },
      additional_price: {
        type: Number,
        required: true,
        min: 0 
      }
    }
  ],
  isAvailable: {
    type: Boolean,
    default: true 
  },
  isSpecial: {
    type: Boolean,
    default: false 
  },
  image: {
    type: String,
  }
}, {
  timestamps: true 
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
