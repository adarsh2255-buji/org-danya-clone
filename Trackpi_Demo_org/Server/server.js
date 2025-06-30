import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from './config/passportConfig.js';
import connectToMongoDb from './db/connectToMongoDb.js';
import adminRoute from "./routes/admin.router.js";
import userRoute from "./routes/user.router.js";
import contactRoute from "./routes/contact.router.js";

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Setup for __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// DB Connection
connectToMongoDb();

// Middlewares
app.use(cors({
  origin: 'http://localhost:5174',
  methods: ['POST', 'GET'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file serving
app.use('/assets', express.static('public/assets'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


//google and fb signup
app.use(passport.initialize());


// Routes
app.use('/', userRoute);
app.use('/admin', adminRoute);
app.use('/api', contactRoute);
// app.use('/user', userRoute);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
