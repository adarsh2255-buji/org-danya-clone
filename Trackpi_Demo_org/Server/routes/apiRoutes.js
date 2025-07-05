import express from 'express';
import { createCourseSection, getAllCourseSections, getCourseSectionById, updateCourseSection, deleteCourseSection } from '../controllers/admin.controller.js';
import { getAllCourseSectionsForUser, getCourseSectionByIdForUser, getWatchedVideos, updateWatchedVideos } from '../controllers/user.controller.js';
import { verifyToken } from '../config/verifyToken.js';

const router = express.Router();
console.log('apiRoutes loaded');
// admin routes
router.post('/create-course-section', createCourseSection);
router.get('/get-all-course-sections', getAllCourseSections);
router.get('/get-course-section-by-id/:id', getCourseSectionById);
router.put('/update-course-section/:id', updateCourseSection);
router.delete('/delete-course-section/:id', deleteCourseSection);

// user watched videos (protected)
router.get('/user/watched-videos/:courseId', verifyToken, getWatchedVideos);
router.post('/user/update-watched-videos', verifyToken, updateWatchedVideos);
router.get('/user/get-all-course-sections', verifyToken, getAllCourseSectionsForUser)
router.get('/user/get-course-section-by-id/:id', verifyToken, getCourseSectionByIdForUser)

export default router;
