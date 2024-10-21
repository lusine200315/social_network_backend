const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// POST /api/posts - Create a new post.
router.post('/', async (req, res) => {
    try {
        await createPost(req.body);
        res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating post' });
    }
});

// GET /api/posts - Get all posts.
router.get('/', (req, res) => {

});

// GET /api/posts/:postId - Get a specific post by ID.
router.get('/:postId', (req, res) => {
    
});

// PUT /api/posts/:postId - Update a specific post.
router.put('/:postId', (req, res) => {

});

// DELETE /api/posts/:postId - Delete a post.
router.delete('/:postId', (req, res) => {

});

// POST /api/posts/:postId/like - Like a post.
router.post('/:postId/like', async (req, res) => {
    try {
        await likePost(req.params.postId, req.user); // req.user contains the userId from the token
        res.status(200).json({ message: 'Post liked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error liking post' });
    }
});

// DELETE /api/posts/:postId/like - Unlike a post.
router.delete('/:postId/like', (req, res) => {

});

// POST /api/posts/:postId/share - Share a post.
router.post('/:postId/like', (req, res) => {

});

// GET /api/users/:userId/posts - Get all posts created by a specific user.
router.get('/:userId/posts', (req, res) => {
    
});

module.exports = router;