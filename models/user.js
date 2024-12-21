const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  socialLinks: {
    linkedin: String,
    facebook: String,
    twitter: String,
    // Add more as needed
  },
  bio: String,
  createdAt: { type: Date, default: Date.now } // Add creation date field
});

const User = mongoose.model('User', userSchema);

module.exports = User;