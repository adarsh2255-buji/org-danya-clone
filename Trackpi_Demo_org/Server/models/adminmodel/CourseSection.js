import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    cloudinaryId: { type: String }, // Cloudinary public ID for video management
    duration: { type: Number, default: 0 }, // Video duration in seconds
})

const courseSectionSchema = new mongoose.Schema({
    courseTitle: { type: String, required: true },
    courseDescription: { type: String, required: true },
    // courseImage: { type: String, required: true },
    courseDuration: { type: Number, required: true },
    videos: [videoSchema],
});

const CourseSection = mongoose.model('CourseSection', courseSectionSchema);

export default CourseSection;