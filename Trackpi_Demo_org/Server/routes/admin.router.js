import express from 'express';
import upload from '../utils/multer.js';
import videoUpload from '../utils/videoUpload.js';
import {
  addCourse,
  getCourses,
  getVideoDuration,
  createCourseSection,
  getAllCourseSections,
  getCourseSectionById,
  updateCourseSection,
  deleteCourseSection
} from '../controllers/admin.controller.js';

const router = express.Router();


// Handle one image + multiple videos
router.post('/add-course',upload.single('bgImage'),addCourse);

router.get('/view-course', getCourses);
router.get('/get-duration/:videoId', getVideoDuration );

// Course Section routes with video upload support
router.post('/course-section', videoUpload.array('videos', 10), createCourseSection);
router.get('/course-sections', getAllCourseSections);
router.get('/course-section/:id', getCourseSectionById);
router.put('/course-section/:id', videoUpload.array('videos', 10), updateCourseSection);
router.delete('/course-section/:id', deleteCourseSection);

export default router;
