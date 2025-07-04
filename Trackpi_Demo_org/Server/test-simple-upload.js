import express from 'express';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './config/cloudinary.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Test Cloudinary configuration
console.log('Testing Cloudinary config...');
console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);
console.log('API Key:', process.env.CLOUDINARY_API_KEY ? 'SET' : 'NOT SET');
console.log('API Secret:', process.env.CLOUDINARY_API_SECRET ? 'SET' : 'NOT SET');

// Configure Cloudinary storage
const videoStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'course-videos',
    resource_type: 'video',
    allowed_formats: ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv'],
  }
});

// Video upload middleware
const videoUpload = multer({
  storage: videoStorage,
  fileFilter: (req, file, cb) => {
    console.log('File being processed:', file.originalname, file.mimetype);
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed!'), false);
    }
  },
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit
  }
});

// Simple test route
app.post('/test-upload', videoUpload.single('video'), (req, res) => {
  try {
    console.log('Upload successful!');
    console.log('File:', req.file);
    res.json({ 
      success: true, 
      message: 'Upload successful',
      file: req.file 
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Upload failed',
      error: error.message 
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Global error handler:', error);
  res.status(500).json({ 
    success: false, 
    message: 'Server error',
    error: error.message 
  });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
  console.log('Test with: curl -X POST -F "video=@your-video.mp4" http://localhost:5001/test-upload');
}); 