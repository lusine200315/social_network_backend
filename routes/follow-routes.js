const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// POST /api/users/:userId/follow - Follow a user.
router.post('/follow', (req, res) => {
    try {

    } catch (error) {

    }
});

// DELETE /api/users/:userId/unfollow - Unfollow a user.
router.delete('/unfollow', (req, res) => {
    try {

    } catch (error) {

    }
});

// GET /api/users/:userId/followers - Get followers of a user.
router.get('/followers', (req, res) => {
    try {

    } catch (error) {

    }
});

// GET /api/users/:userId/following - Get users followed by a user.
router.get('/following', (req, res) => {
    try {

    } catch (error) {

    }
});

module.exports = router;