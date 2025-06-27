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


//--------------------------------------------------------------------------------------//
//Update Progress API
// POST /api/progress/update
export const updateUserCourseProgress = async (req, res) => {
  try {
    const { userId, courseId, videoId, watchedDuration } = req.body;

    let progress = await UserCourseProgress.findOne({ userId, courseId });

    if (!progress) {
      progress = new UserCourseProgress({
        userId,
        courseId,
        videos: [{ videoId, watchedDuration }],
        unlocked: true,
      });
    } else {
      const video = progress.videos.find(v => v.videoId === videoId);
      if (video) {
        video.watchedDuration = watchedDuration;
        video.isCompleted = true;
      } else {
        progress.videos.push({ videoId, watchedDuration, isCompleted: true });
      }
    }

    // Recalculate total watched
    progress.totalWatched = progress.videos.reduce((sum, v) => sum + v.watchedDuration, 0);

    // Check if course is completed
    const course = await Course.findById(courseId);
    if (progress.totalWatched >= course.CourseDuration) {
      progress.isCompleted = true;
    }

    await progress.save();
    res.status(200).json({ success: true, progress });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update progress', error: err.message });
  }
};

//Get All Progress + Unlock Status
// GET /api/progress/:userId
export const getUserCourseProgress = async (req, res) => {
  try {
    const { userId } = req.params;
    const progress = await UserCourseProgress.find({ userId }).populate('courseId');
    res.status(200).json({ success: true, progress });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
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