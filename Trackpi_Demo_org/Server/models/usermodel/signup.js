import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  provider: {
    type: String, // 'google' or 'facebook'
    required: true,
  },
  providerId: {
    type: String, // Google or Facebook ID
    required: true,
    unique: true,
  },
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePic: String, // URL from Google/Facebook
  phone: {
    type: String,
    required: false, // will be added after phone popup
  },
});

const Signup = mongoose.model('Signup', userSchema);
export default Signup;
