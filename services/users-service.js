const User = require('../models/user');
const generateToken = require('../utils/jwt');

// Function to register a new user
const registerUser = async (data) => {
  const { username, email, password } = data;
  const userExists = await User.findOne({ email });

  if(userExists) {
    throw new Error('Email already exists');
  }

  const user = new User({ username, email, password });
  user.save();
  return user;
};

// Function to log in a user and return a JWT token
const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await User.matchPassword(password))) {
    throw new Error('Invalid email or password');
  }

  // Generate JWT token and return it
  const token = generateToken(user._id);
  return { token, userId: user._id };
};

// Function to retrieve user profile details by ID
const getUserProfile = async (userId) => {
  const user = await User.findOne(userId).select('-password');
  if(!user) {
    throw new Error('User not found');
  }
  return user;
}

// Function to update a user's profile information
const updateUserProfile = async (userId, updateData) => {
  const user = await User.findById(userId);
  if(!user) {
    throw new Error('User not found');
  }
  user.username = updateData.username || user.username;
  user.email = updateData.email || user.email;

  await user.save();
  return user;
}

// Function to delete a user by ID
const deleteUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  await user.remove();
}

// Function for user logout
const logoutUser = async () => {
   // Placeholder logic for logout (JWT is stateless, so no real logout unless token invalidation is implemented)
   return;
}

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  logoutUser,
};