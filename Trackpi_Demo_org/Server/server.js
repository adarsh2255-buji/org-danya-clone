import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import passport from './config/passportConfig.js';
import connectToMongoDb from './db/connectToMongoDb.js';
import userRoute from "./routes/user.router.js";
import adminRoute from "./routes/admin.router.js";
import contactRoute from "./routes/contact.router.js";
import apiRoutes from "./routes/apiRoutes.js";

const app = express();
const PORT = 5000;

// Setup for __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

app.use(passport.initialize());

// Add MongoDB connection
connectToMongoDb();

// Add only the user router
app.use('/', userRoute);
app.use('/admin', adminRoute);
app.use('/api', contactRoute);


// api routes admin
app.use('/api', apiRoutes);

// test route for server connection testing (remove later)    
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  res.status(500).json({ 
    success: false, 
    message: 'Server error',
    error: error.message,
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
