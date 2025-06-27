import mongoose from 'mongoose';


const userAssessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Signup', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  videoId: { type: String, required: true }, // use video._id or videoUrl
  correctCount: Number,
  totalQuestions: Number,
  passed: Boolean,
  submittedAt: { type: Date, default: Date.now },
});

const UserAssessment = mongoose.model('UserAssessment', userAssessmentSchema);
export default UserAssessment;
