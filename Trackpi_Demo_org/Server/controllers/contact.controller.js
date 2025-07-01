import Contact from '../models/contactmodel/contactmodel.js';

export const submitContactForm = async (req, res) => {
  try {
    const { fullName, contactNumber, email, location, hearAboutUs, message } = req.body;

    // Basic validation
    if (!fullName || !contactNumber || !email || !location || !message) {
      return res.status(400).json({ message: 'All required fields must be filled.' });
    }

    const newContact = new Contact({
      fullName,
      contactNumber,
      email,
      location,
      hearAboutUs,
      message
    });

    await newContact.save();

    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Something went wrong. please try again.' });
  }
};
