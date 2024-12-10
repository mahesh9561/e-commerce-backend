const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();
const connectDB = require('./config/db');
const { PORT, DB_URL, SESSION_SECRET } = require('./config/keys');
const userRouter = require('./routes/userRouter');

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session Configuration
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: DB_URL,
        collectionName: "sessions"
    })
}));

// Routes
app.use('/api/products', userRouter);


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
