import jwt from 'jsonwebtoken';
import Signup from "../models/usermodel/signup.js"



// to generate a token
export const generateToken = (user) => {
  return jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};


//passport.authenticate('google') populates req.user with the logged-in user's details.
// generateToken() creates a JWT for that user.

export const authCallback = (req, res) => {
  const token = generateToken(req.user);
  res.redirect(`${process.env.CLIENT_URL}/auth-success?token=${token}`);
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


