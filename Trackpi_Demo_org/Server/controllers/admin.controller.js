import Course from '../models/adminmodel/course.js';
import { getVimeoDuration } from '../utils/vimeo.js';
import CourseSection from '../models/adminmodel/CourseSection.js';
import cloudinary from '../config/cloudinary.js';
import { getCloudinaryVideoDuration } from '../utils/cloudinaryVideo.js';
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
    const { courseName, videoDetails, CourseDescription } = req.body;
    const bgImage = req.file ? `/assets/bgImages/${req.file.filename}` : null;

   console.log("Raw videoDetails body:", req.body.videoDetails);
const parsedVideos = JSON.parse(req.body.videoDetails || '[]');
console.log("Parsed videoDetails:", parsedVideos);

    let totalDuration = 0;


    const finalVideoList = await Promise.all(
      parsedVideos.map(async (meta) => {
        const duration = await getVimeoDuration(meta.videoId);
        totalDuration += duration;

        const assessments = meta.assessments.map((item) => {
          const wrongs = typeof item.wrongAnswers === 'string'
            ? item.wrongAnswers.split(',').map(w => w.trim())
            : item.wrongAnswers;

          const answers = [
            { text: item.correctAnswer, isCorrect: true },
            ...wrongs.map(w => ({ text: w, isCorrect: false })),
          ];

          return { question: item.question, answers };
        });

        return {
          title: meta.title,
          description: meta.description,
          videoUrl: `https://player.vimeo.com/video/${meta.videoId}`,
          duration,
          assessments,
        };
      })
    );

    const newCourse = new Course({
      courseName,
      bgImage,
      CourseDescription,
      CourseDuration: totalDuration,
      videoDetails: finalVideoList,
    });

    await newCourse.save();
   

    res.status(201).json({ success: true, course: newCourse });
  } catch (error) {
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


// adarsh
// create course section
export const createCourseSection = async (req, res) => {
  try {
    console.log('createCourseSection called');
    console.log('Request body:', req.body);
    console.log('Request files:', req.files);
    
    let { courseTitle, courseDescription, courseDuration, videos } = req.body;
    
    // Parse videos if it's a string
    if (typeof videos === 'string') {
      try {
        videos = JSON.parse(videos);
      } catch (parseError) {
        console.error('Error parsing videos JSON:', parseError);
        videos = [];
      }
    }
    
    console.log('Parsed videos:', videos);
    
    const savedVideos = [];
    
    // Handle uploaded video files
    if (req.files && req.files.length > 0) {
      console.log(`Processing ${req.files.length} uploaded files`);
      
      for (let i = 0; i < req.files.length; i++) {
        const file = req.files[i];
        const videoData = videos[i] || {};
        
        console.log(`Processing file ${i + 1}:`, file);
        
        try {
          // Get video duration from Cloudinary
          const duration = await getCloudinaryVideoDuration(file.filename);
          console.log(`Video duration for ${file.filename}:`, duration);
          
          savedVideos.push({
            title: videoData.title || `Video ${i + 1}`,
            description: videoData.description || '',
            url: file.path, // Cloudinary URL
            cloudinaryId: file.filename, // Cloudinary public ID
            duration: duration,
          });
        } catch (durationError) {
          console.error('Error getting video duration:', durationError);
          // Continue without duration
          savedVideos.push({
            title: videoData.title || `Video ${i + 1}`,
            description: videoData.description || '',
            url: file.path,
            cloudinaryId: file.filename,
            duration: 0,
          });
        }
      }
    } else if (videos && videos.length > 0) {
      console.log('No files uploaded, processing existing video URLs');
      // Handle existing video URLs (for backward compatibility)
      savedVideos.push(...videos.map(video => ({
        title: video.title,
        description: video.description,
        url: video.url,
        cloudinaryId: video.cloudinaryId || null,
        duration: video.duration || 0,
      })));
    }

    console.log('Final savedVideos:', savedVideos);

    const newCourseSection = new CourseSection({
      courseTitle,
      courseDescription,
      courseDuration,
      videos: savedVideos,
    });

    console.log('Saving course section to database...');
    await newCourseSection.save();
    console.log('Course section saved successfully');
    
    res.status(201).json({ success: true, courseSection: newCourseSection });
  } catch (error) {
    console.error('Error in createCourseSection:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to create course section', 
      error: error.message,
      stack: error.stack 
    });
  }
};

// get all course sections
export const getAllCourseSections = async (req, res) => {
  try {
    const courseSections = await CourseSection.find();
    res.status(200).json(courseSections);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch course sections', error: error.message });
  }
};

  // get course section by id
  export const getCourseSectionById = async (req, res) => {
    try {
      const { id } = req.params;
      const courseSection = await CourseSection.findById(id);
      if (!courseSection) {
        return res.status(404).json({ success: false, message: 'Course section not found' });
      }
      res.status(200).json(courseSection);
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to fetch course section', error: error.message });
    }
  };

// update course section
export const updateCourseSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { courseTitle, courseDescription, courseDuration, videos } = req.body;
    
    // Parse videos if it's a string
    let parsedVideos = videos;
    if (typeof videos === 'string') {
      parsedVideos = JSON.parse(videos);
    }
    
    const savedVideos = [];
    
    // Handle uploaded video files
    if (req.files && req.files.length > 0) {
      for (let i = 0; i < req.files.length; i++) {
        const file = req.files[i];
        const videoData = parsedVideos[i] || {};
        
        // Get video duration from Cloudinary
        const duration = await getCloudinaryVideoDuration(file.filename);
        
        savedVideos.push({
          title: videoData.title || `Video ${i + 1}`,
          description: videoData.description || '',
          url: file.path, // Cloudinary URL
          cloudinaryId: file.filename, // Cloudinary public ID
          duration: duration,
        });
      }
    } else if (parsedVideos && parsedVideos.length > 0) {
      // Handle existing video URLs (for backward compatibility)
      savedVideos.push(...parsedVideos.map(video => ({
        title: video.title,
        description: video.description,
        url: video.url,
        cloudinaryId: video.cloudinaryId || null,
        duration: video.duration || 0,
      })));
    }
    
    const updatedCourseSection = await CourseSection.findByIdAndUpdate(
      id, 
      { courseTitle, courseDescription, courseDuration, videos: savedVideos }, 
      { new: true }
    );
    
    if (!updatedCourseSection) {
      return res.status(404).json({ success: false, message: 'Course section not found' });
    }
    res.status(200).json({ success: true, courseSection: updatedCourseSection });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update course section', error: error.message });
  }
};

// delete course section
export const deleteCourseSection = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find the course section first to get video cloudinary IDs
    const courseSection = await CourseSection.findById(id);
    if (!courseSection) {
      return res.status(404).json({ success: false, message: 'Course section not found' });
    }
    
    // Delete videos from Cloudinary
    if (courseSection.videos && courseSection.videos.length > 0) {
      for (const video of courseSection.videos) {
        if (video.cloudinaryId) {
          try {
            await cloudinary.uploader.destroy(video.cloudinaryId, { resource_type: 'video' });
          } catch (cloudinaryError) {
            console.error('Error deleting video from Cloudinary:', cloudinaryError);
          }
        }
      }
    }
    
    // Delete the course section from database
    await CourseSection.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: 'Course section deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete course section', error: error.message });
  }
};







