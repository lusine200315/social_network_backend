const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// POST /api/posts/:postId/comments - Add a comment to a post.
router.post('/', (req, res) => {
    try {
    
    } catch (error) {
      
    }
});

// GET /api/posts/:postId/comments - Get all comments on a post.
router.get('/', (req, res) => {
    try {
    
    } catch (error) {
      
    }
});

// GET /api/posts/:postId/comments/:commentId - Get a specific comment.
router.get('/:commentId', (req, res) => {
    try {
    
    } catch (error) {
      
    }
});

// PUT /api/posts/:postId/comments/:commentId - Update a comment.
router.put('/:commentId', (req, res) => {

});

// DELETE /api/posts/:postId/comments/:commentId - Delete a commen
router.delete('/:commentId', (req, res) => {

});

module.exports = router;