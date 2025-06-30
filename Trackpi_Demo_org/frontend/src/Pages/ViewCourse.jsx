import React, { useEffect, useState } from 'react';
import axios from 'axios';


 //1)Bg image is stored in server/assests/ bgImage folder to show that in our frontend 
    // need to use base url or we can simply get using "  src={`http://localhost:5000${course.bgImage}`}"-
    // we used a variable to store the port -------------//
//2) used form duration logic to get duration in hh:mm:ss method

const ViewCourses = () => {
    const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/getCourse');
        setCourses(res.data);
      } catch (err) {
        console.error('Failed to fetch courses', err);
      }
    };

    fetchCourses();
  }, []);


  // logic to get duration in hh:mm:ss-----------------------//
 const formatDuration = (seconds = 0) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hrs}h ${mins}m ${secs}s`;
};



  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">All Courses</h1>

      {courses.length === 0 ? (
        <p className="text-center text-gray-600">No courses found.</p>
      ) : (
        courses.map((course, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-semibold text-blue-800">{course.courseName}</h2>
            <p className="text-gray-700 mt-1">{course.CourseDescription}</p>
            <p className="text-sm text-gray-500 mt-1">
                Total Duration: {formatDuration(course.CourseDuration)}
           </p>

            <img
              src={`${BASE_URL}${course.bgImage}`}
              alt="Course background"
              className="w-full h-64 object-cover mt-4 rounded-md"
            />

            <div className="mt-6">
              <h3 className="text-lg font-bold text-green-700 mb-2">Videos</h3>
              {course.videoDetails.map((video, vIdx) => (
                <div key={vIdx} className="border border-gray-300 rounded p-3 mb-4">
                  <h4 className="font-semibold text-lg">{video.title}</h4>
                  <p className="text-sm text-gray-600">{video.description}</p>
                  <p className="text-sm text-gray-500">Duration: {formatDuration(video.duration)} sec</p>
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    Watch Video
                  </a>

                  {video.assessments && video.assessments.length > 0 && (
                    <div className="mt-4">
                      <h5 className="font-semibold mb-1 text-purple-700">Assessments</h5>
                      <ul className="list-disc pl-5 space-y-2">
                        {video.assessments.map((a, qIdx) => (
                          <li key={qIdx}>
                            <p className="font-medium">{a.question}</p>
                            <ul className="pl-4 mt-1">
                              {a.answers.map((ans, i) => (
                                <li
                                  key={i}
                                  className={ans.isCorrect ? 'text-green-600' : 'text-red-600'}
                                >
                                  {ans.text}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewCourses;
