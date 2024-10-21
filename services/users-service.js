const User = require('../models/user');
const generateToken = require('../utils/jwt');

const registerUser = async (data) => {
  // Logic for registering a user (shell version)
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new Error('Invalid email or password');
  }

  // Generate JWT token and return it
  const token = generateToken(user._id);
  return { token, userId: user._id };
};

module.exports = {
  registerUser,
  loginUser
};