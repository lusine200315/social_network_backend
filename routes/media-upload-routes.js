const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// POST /api/uploads/post - Upload media (image, video) for a post.
router.post('/post', (req, res) => {
    
});

// DELETE /api/uploads/:fileId - Delete uploaded media.r
router.delete('/:fileId', (req, res) => {
    try {

    } catch (err) {
    
    }
});

module.exports = router;