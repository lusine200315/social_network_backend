const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// POST /api/chat - Start a new chat (between two users).
router.post('/', (req, res) => {
    try {
    
    } catch (err) {
    
    }
});

// GET /api/chat - Get all chats for the logged-in user.
router.get('/', (req, res) => {
    try {
    
    } catch (err) {
    
    }
});

// POST /api/chat/:chatId/message - Send a message in a chat.
router.post('/:chatId/message', () => {
    try {
    
    } catch (err) {
    
    }
});

// GET /api/chat/:chatId/messages - Get all messages in a chat.
router.get('/:chatId/messages', () => {
    try {
    
    } catch (err) {
    
    }
});

// PUT /api/chat/:chatId/message/:messageId - Edit a message.
router.put('/:chatId/message/:messageId', (req, res) => {
    try {
    
    } catch (err) {
    
    }
});

// DELETE /api/chat/:chatId/message/:messageId - Delete a message.
router.delete('/:chatId/message/:messageId', (req, res) => {
    try {
    
    } catch (err) {
    
    }
});

module.exports = router;