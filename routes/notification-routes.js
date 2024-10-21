const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// GET /api/notifications - Get all notifications for the logged-in user.
router.get('/', (req, res) => {
    try {

    } catch (err) {

    }
});

// POST /api/notifications/mark-read/:notificationId - Mark a notification as read.
router.post('/mark-read/:notificationId', (req, res) => {
    try {

    } catch (err) {

    }
});

// DELETE /api/notifications/:notificationId - Delete a notification.
router.delete('/mark-read/:notificationId', (req, res) => {
    try {

    } catch (err) {
    
    }
});

module.exports = router;