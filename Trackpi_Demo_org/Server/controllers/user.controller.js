import jwt from 'jsonwebtoken';
import Signup from "../models/usermodel/signup.js"
import UserCourseProgress from '../models/usermodel/userCourseProgress.js';
import Course from "../models/adminmodel/course.js"
import UserAssessment from '../models/usermodel/userAssessment.js';

// to generate a token
export const generateToken = (user) => {
  return jwt.sign(
    { userId: user._id,
      name: user.name,
      email: user.email,
      avatar: user.profilePic,
     },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};


//passport.authenticate('google') populates req.user with the logged-in user's details.
// generateToken() creates a JWT for that user.

export const authCallback = (req, res) => {

  const token = generateToken(req.user);
  res.redirect(`${process.env.CLIENT_URL}/startCourse?token=${token}`);

};



//updating phone number if the user is autherized
export const addPhoneNumber = async (req, res) => {
  const { phone } = req.body;
  const userId = req.userId; // Set by verifyToken

  try {
    const user = await Signup.findByIdAndUpdate(
      userId,
      { phone }, // Updates the phone field
      { new: true } // Returns the updated document
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'Phone number added', user });
  } catch (err) {
    console.error('Error updating phone number:', err);
    res.status(500).json({ error: 'Server error' });
  }
};
//---------------------------------course detail getting api--------------------------//
export const userGetCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching courses', error });
  }
};
//get course by id-----------------------------------------------------//
// GET /api/courses/:id
export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    res.status(200).json(course); // includes videoDetails
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching course', error: err.message });
  }
};

//--------------------------------------------------------------------------------------//
//Update Progress API
// POST /api/progress/update
export const updateUserCourseProgress = async (req, res) => {
  try {
    const { userId, courseId, videoId, watchedDuration } = req.body;
     console.log("Incoming data:", { userId, courseId, videoId, watchedDuration });

    // Validate required fields
    if (!userId || !courseId || !videoId || watchedDuration === undefined) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields: userId, courseId, videoId, watchedDuration' 
      });
    }

    // Fetch course to get video details and total duration
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    // Find the specific video in the course
    const videoDetails = course.videoDetails.find(v => v._id.toString() === videoId);
    if (!videoDetails) {
      return res.status(404).json({ success: false, message: 'Video not found in course' });
    }

    // Find or create user progress
    let progress = await UserCourseProgress.findOne({ userId, courseId });

    if (!progress) {
      progress = new UserCourseProgress({
        userId,
        courseId,
        videos: [],
        unlocked: true,
        totalWatched: 0,
        isCompleted: false
      });
    }

    // Find or create video progress
    let videoProgress = progress.videos.find(v => v.videoId.toString() === videoId);
    
    if (!videoProgress) {
      // Create new video progress
      videoProgress = {
        videoId,
        watchedDuration: 0,
        isCompleted: false
      };
      progress.videos.push(videoProgress);
    }

    // Update video progress
    const previousWatchedDuration = videoProgress.watchedDuration;
    videoProgress.watchedDuration = Math.max(videoProgress.watchedDuration, watchedDuration);
    
    // Mark as completed if watched duration is significant portion of video
    const completionThreshold = videoDetails.duration * 0.9; // 90% of video duration
    videoProgress.isCompleted = videoProgress.watchedDuration >= completionThreshold;

    // Recalculate total watched time
    progress.totalWatched = progress.videos.reduce((sum, v) => sum + v.watchedDuration, 0);

    // Check if entire course is completed
    const totalCourseVideos = course.videoDetails.length;
    const completedVideos = progress.videos.filter(v => v.isCompleted).length;
    progress.isCompleted = completedVideos === totalCourseVideos;

    // Save progress
    await progress.save();

    // Return success with updated progress
    res.status(200).json({ 
      success: true, 
      progress: {
        ...progress.toObject(),
        completedVideos,
        totalVideos: totalCourseVideos,
        nextUnlockedVideoIndex: completedVideos // Next video index that should be unlocked
      }
    });

  } catch (err) {
    console.error("Error updating progress:", err);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to update progress', 
      error: err.message 
    });
  }
};

// GET /api/progress/:userId
export const getUserCourseProgress = async (req, res) => {
  try {
    const { userId } = req.params;
    
    if (!userId) {
      return res.status(400).json({ 
        success: false, 
        message: 'User ID is required' 
      });
    }

    // Get all progress for user with populated course data
    const progressData = await UserCourseProgress.find({ userId }).populate({
      path: 'courseId',
      select: 'courseName videoDetails CourseDuration'
    });

    // Format response with additional metadata
    const formattedProgress = progressData.map(prog => {
      const completedVideos = prog.videos.filter(v => v.isCompleted).length;
      const totalVideos = prog.courseId?.videoDetails?.length || 0;
      
      return {
        ...prog.toObject(),
        completedVideos,
        totalVideos,
        nextUnlockedVideoIndex: completedVideos, // Next video that should be unlocked
        progressPercentage: totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0
      };
    });

    res.status(200).json({ 
      success: true, 
      progress: formattedProgress 
    });

  } catch (err) {
    console.error("Error fetching progress:", err);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch progress',
      error: err.message 
    });
  }
};

// GET /api/progress/:userId/:courseId - Get progress for specific course
export const getUserCourseSpecificProgress = async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    
    if (!userId || !courseId) {
      return res.status(400).json({ 
        success: false, 
        message: 'User ID and Course ID are required' 
      });
    }

    const progress = await UserCourseProgress.findOne({ userId, courseId }).populate({
      path: 'courseId',
      select: 'courseName videoDetails CourseDuration'
    });

    if (!progress) {
      return res.status(404).json({ 
        success: false, 
        message: 'No progress found for this course' 
      });
    }

    const completedVideos = progress.videos.filter(v => v.isCompleted).length;
    const totalVideos = progress.courseId?.videoDetails?.length || 0;

    const formattedProgress = {
      ...progress.toObject(),
      completedVideos,
      totalVideos,
      nextUnlockedVideoIndex: completedVideos,
      progressPercentage: totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0
    };

    res.status(200).json({ 
      success: true, 
      progress: formattedProgress 
    });

  } catch (err) {
    console.error("Error fetching course progress:", err);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch course progress',
      error: err.message 
    });
  }
};

//-----------------------------------------------------------------------------------------------
//get video assessment

export const getVideoAssessment = async (req, res) => {
  try {
    const { courseId, videoId } = req.params;

    const course = await Course.findById(courseId);
    const video = course.videoDetails.find(v => v._id.toString() === videoId);

    if (!video) return res.status(404).json({ message: 'Video not found' });

    res.status(200).json({ assessments: video.assessments });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching assessments', error: err.message });
  }
};

//submit or save user assessment to the userAssessment db

export const submitAssessment = async (req, res) => {
  try {
    const { userId, courseId, videoId, answers } = req.body;

    const course = await Course.findById(courseId);
    const video = course.videoDetails.find(v => v._id.toString() === videoId);

    let correctCount = 0;

    answers.forEach(({ questionIndex, selectedAnswerId }) => {
      const question = video.assessments[questionIndex];
      const selected = question.answers.find(a => a._id.toString() === selectedAnswerId);
      if (selected?.isCorrect) correctCount++;
    });

    const passed = correctCount >= 25;

    const assessment = new UserAssessment({
      userId,
      courseId,
      videoId,
      correctCount,
      totalQuestions: video.assessments.length,
      passed,
    });

    await assessment.save();

    res.status(200).json({ success: true, passed, correctCount });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};