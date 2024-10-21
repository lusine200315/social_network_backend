const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// POST /api/users/:userId/block - Block a user.
router.post('/block', (req, res) => {    
    try {

    } catch (error) {

    }
});

// DELETE /api/users/:userId/unblock - Unblock a user.
router.delete('/unblock', (req, res) => {
    try {

    } catch (err) {

    }
});

// GET /api/users/:userId/blocked - Get blocked users for a user.
router.get('/blocked', (req, res) => {
    try {

    } catch (err) {

    }
});

module.exports = router;