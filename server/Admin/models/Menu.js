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
      topping_price: {
        type: Number,
        required: true,
        min: 0 
      }
    }
  ],
  cheeseOptions: [
    {
      cheeseId: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true 
      },
      cheeseName: {
        type: String,
        required: true
      },
      cheesePrice: {
        type: Number,
        required: true,
        min: 0 
      }
    }
  ],
  riceOptions: [
    {
      riceId: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true 
      },
      riceName: {
        type: String,
        required: true
      },
      ricePrice: {
        type: Number,
        required: true,
        min: 0 
      }
    }
  ],
  addExtraOption: [
    {
      addonsId: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true 
      },
      addonsName: {
        type: String,
        required: true
      },
      addonsPrice: {
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
