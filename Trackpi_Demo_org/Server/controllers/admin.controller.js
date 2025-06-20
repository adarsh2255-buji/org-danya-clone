import Course from '../models/adminmodel/course.js';
import { getVimeoDuration } from '../utils/vimeo.js';
// import ffmpeg from 'fluent-ffmpeg';


//getting vimeoDuration api


export const getVideoDuration = async (req, res) => {
  const { videoId } = req.params;
  if (!videoId) 
    return res.status(400).json({ message: "Video ID required" });

  try {
    const duration = await getVimeoDuration(videoId);
    res.status(200).json({ videoId, duration });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch video duration", error: err.message });
  }
};




export const addCourse = async (req, res) => {
  try {
    const { courseName, videoDetails, assessments } = req.body;
    const bgImage = req.file ? `/assets/bgImages/${req.file.filename}` : null;

    if (!bgImage) {
      return res.status(400).json({ success: false, message: 'Background image is required' });
    }
    let videoMetadata = [];
    try {
      videoMetadata = JSON.parse(videoDetails);
    } catch (err) {
      return res.status(400).json({ success: false, message: 'Invalid video metadata format', error: err.message });
    }

    const finalVideoList = await Promise.all(
      videoMetadata.map(async (meta) => {
        const duration = await getVimeoDuration(meta.videoId);
        return {
          title: meta.title,
          description: meta.description,
          videoUrl: `https://player.vimeo.com/video/${meta.videoId}`,
          duration,
        };
      }) 
    ); 

    // Parse and validate assessments
   const rawAssessments = JSON.parse(assessments);

const parsedAssessments = rawAssessments.map((item) => {
  const wrongs = typeof item.wrongAnswers === 'string'
    ? item.wrongAnswers.split(',').map(w => w.trim())
    : item.wrongAnswers;

  const answers = [
    { text: item.correctAnswer, isCorrect: true },
    ...wrongs.map(w => ({ text: w, isCorrect: false })),
  ];

  return {
    question: item.question,
    answers,
  };
});


    const newCourse = new Course({
      courseName,
      bgImage,
      videoDetails: finalVideoList,
      assessments: parsedAssessments,
    });

    await newCourse.save();

    res.status(201).json({ success: true, course: newCourse });
  } catch (error) {
    console.error('Error while saving course:', {
      body: req.body,
      file: req.file,
      error,
    });
    res.status(500).json({ success: false, message: 'Failed to add course', error: error.message });
  }
};


// GET /api/courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching courses', error });
  }
};




