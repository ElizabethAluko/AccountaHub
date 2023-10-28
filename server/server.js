// server/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chatRoutes = require('./routes/chat');
const taskRoutes = require('./routes/task');
const reviewRoutes = require('./routes/review');
const userRoutes = require('./routes/user');
// const mentorshipRoutes = require('./routes/mentorship');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: true }));

// Use the routes
app.use('/user', userRoutes);
// app.use('/mentorship', mentorshipRoutes);
app.use('/chat', chatRoutes);
app.use('/task', taskRoutes);
app.use('/review', reviewRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
