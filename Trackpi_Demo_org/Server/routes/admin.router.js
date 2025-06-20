import express from 'express';
import upload from '../utils/multer.js';
import {addCourse,getCourses,getVideoDuration } from '../controllers/admin.controller.js';

const router = express.Router();


// Handle one image + multiple videos
router.post('/add-course',upload.single('bgImage'),addCourse);

router.get('/view-course', getCourses);
router.get('/get-duration/:videoId', getVideoDuration );


export default router;
