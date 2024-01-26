const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  menuName: {
    type: String,
    required: true
  },
  menuImage: {
    type: String 
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  Price: {
    type: Number,
    required: true
  },
  // You can include other properties if needed, such as customization options
});

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderItems: [orderItemSchema],
  total: {
    type: Number,
    required: true
  },
  tableNumber: {
    type: Number,
    required: true
  },
  timeSlot: {
    type: Date,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentStatus: {
    type: String,
    required: true,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  }

}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
