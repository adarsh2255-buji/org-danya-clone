import mongoose from 'mongoose';

const watchedVideoSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseSection', required: true },
    videoIndex: { type: Number, required: true },
}, { _id: false });

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    profilePic: { type: String, required: true },
    watchedVideos: [watchedVideoSchema],
});

const User = mongoose.model('User', userSchema);

export default User;