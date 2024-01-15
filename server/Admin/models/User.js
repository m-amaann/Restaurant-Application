const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String },
  phone: { type: String },
  address: { type: String },
}, {
  timestamps: true,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;