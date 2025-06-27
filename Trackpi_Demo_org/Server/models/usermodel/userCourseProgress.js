import mongoose from 'mongoose';


const userVideoSchema = new mongoose.Schema({
  videoId: String,
  watchedDuration: Number, // seconds
  isCompleted: { type: Boolean, default: false },
});

const userCourseProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Signup', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  videos: [userVideoSchema],
  totalWatched: { type: Number, default: 0 },
  isCompleted: { type: Boolean, default: false },
  unlocked: { type: Boolean, default: false }, // For controlling UI
});

const UserCourseProgress = mongoose.model('UserCourseProgress', userCourseProgressSchema);
export default UserCourseProgress;
