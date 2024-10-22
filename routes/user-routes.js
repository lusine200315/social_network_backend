const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userService = require('../services/users-service');

// POST /api/users/register - Register a new user.
router.post('/register', async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST /api/users/login - Login a user.
router.post('/login', async (req, res) => {
    try {
       const { token, userId } = await userService.loginUser(req.body);
       return res.json({ userId: userId });
    } catch (error) {
       res.json({ message: error.message });
    }
});

// GET /api/users/profile/:userId - Get a user's profile.
router.get('/profile/:userId', async (req, res) => {
    try {
        const user = await userService.getUserProfile(req.params.userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// PUT /api/users/profile/:userId - Update user profile.
router.put('/profile/:userId', async (req, res) => {
    try {
        const updatedUser = await userService.updateUserProfile(req.params.userId, req.body);
        res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE /api/users/profile/:userId - Delete a user account.
router.delete('/profile/:userId', async (req, res) => {
    try {
        await userService.deleteUser(req.params.userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

// POST /api/users/logout - Logout the user.
router.post('/logout', async (req, res) => {
    try {
        await userService.logoutUser();
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;