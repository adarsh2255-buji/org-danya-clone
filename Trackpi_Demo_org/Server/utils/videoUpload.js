import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

// Configure Cloudinary storage for videos
const videoStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'course-videos',
    resource_type: 'video',
    allowed_formats: ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv'],
    transformation: [
      { width: 1280, height: 720, crop: 'scale' },
      { quality: 'auto' }
    ]
  }
});

// Video upload middleware
const videoUpload = multer({
  storage: videoStorage,
  fileFilter: (req, file, cb) => {
    console.log('File filter processing:', file.originalname, file.mimetype);
    // Accept only video files
    if (file.mimetype.startsWith('video/')) {
      console.log('File accepted:', file.originalname);
      cb(null, true);
    } else {
      console.log('File rejected:', file.originalname, 'Mime type:', file.mimetype);
      cb(new Error('Only video files are allowed!'), false);
    }
  },
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit
  }
});

export default videoUpload; 