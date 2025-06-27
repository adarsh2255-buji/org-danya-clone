import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  text: String,
  isCorrect: Boolean,
});

const assessmentSchema = new mongoose.Schema({
  question: String,
  answers: [answerSchema], // 1 correct + 3 wrong
});

//  ADD assessments inside videoSchema instead of courseSchema
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  duration: Number,
  assessments: [assessmentSchema], //  moved here
});

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  bgImage: {
    type: String,
    required: true,
  },
  CourseDuration: {
    type: Number,
    required: true,
  },
  CourseDescription: {
    type: String,
    required: true,
  },
  videoDetails: [videoSchema], //  each video now has its own assessments
});

const Course = mongoose.model('Course', courseSchema);
export default Course;

