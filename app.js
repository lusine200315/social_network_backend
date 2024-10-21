const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const blockRouter = require('./routes/block-routes');
const chatMessagesRouter = require('./routes/chat-message-routes');
const commentsRouter = require('./routes/comment-routes');
const feetRouter = require('./routes/feed-routes');
const followRouter = require('./routes/follow-routes');
const mediaUploadRouter = require('./routes/media-upload-routes');
const notificationsRouter = require('./routes/notification-routes');
const postsRouter = require('./routes/post-routes');
const searchRouter = require('./routes/search-routes');
const settingsRouter = require('./routes/settings-routes');
const usersRouter = require('./routes/user-routes');

dotenv.config();

const app = express();

// Define routes
app.use('/api/users/:userId', blockRouter);
app.use('/api/chat', chatMessagesRouter);
app.use('/api/posts/:postId/comments', commentsRouter);
app.use('/api/feed', feetRouter);
app.use('/api/users/:userId', followRouter);
app.use('/api/uploads', mediaUploadRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/posts', postsRouter);
app.use('/api/search', searchRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/users', usersRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.get('/', (req, res) => {
    res.send('Social Media API is running...');
});
  
const PORT = process.env.PORT || 5000;
  
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});