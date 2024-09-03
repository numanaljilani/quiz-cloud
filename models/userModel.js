const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'professional', 'admin'],
    default: 'student',
  },
  profileImage: {
    type: String,
    default: 'default-profile.png',
  },
  isVerified: {
    type: Boolean,
    default: true,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  coins: {
    type: Number,
    default: 0,
  },
  rank: {
    type: Number,
    default: 0,
  },
  resetPasswordToken: {
    type: String,
    default: null,
  },
  resetPasswordExpires: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  solvedQuestions: [{ type: Schema.Types.ObjectId, ref: 'SolvedQuestion' }],
});

// Add index to the email field for faster lookups
userSchema.index({ email: 1 });

// Middleware to update the updatedAt field on document update
userSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Optionally add virtuals for full name if first and last names are stored separately

module.exports = mongoose.model('User', userSchema);
