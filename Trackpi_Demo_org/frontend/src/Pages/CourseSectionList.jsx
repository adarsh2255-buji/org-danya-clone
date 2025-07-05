import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseSectionList = () => {
  const [courseSections, setCourseSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourseSections();
  }, []);

  const fetchCourseSections = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/admin/course-sections');
      setCourseSections(response.data);
    } catch (err) {
      console.error('Error fetching course sections:', err);
      setError('Failed to load course sections');
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading course sections...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Course Sections</h1>
      
      {courseSections.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="text-xl">No course sections found.</p>
          <p className="mt-2">Create your first course section to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {courseSections.map((section) => (
            <div key={section._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {section.courseTitle}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {section.courseDescription}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {formatDuration(section.courseDuration * 60)}</span>
                  <span>{section.videos?.length || 0} videos</span>
                </div>
                
                {section.videos && section.videos.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-medium text-gray-700">Videos:</h3>
                    {section.videos.map((video, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                        <h4 className="font-medium text-gray-800 mb-1">{video.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{video.description}</p>
                        
                        {video.url && (
                          <div className="relative">
                            <video
                              controls
                              className="w-full h-48 object-cover rounded-lg"
                              poster={video.url.replace(/\.(mp4|avi|mov|wmv|flv|webm|mkv)$/i, '.jpg')}
                            >
                              <source src={video.url} type="video/mp4" />
                              <source src={video.url} type="video/webm" />
                              Your browser does not support the video tag.
                            </video>
                            {video.duration > 0 && (
                              <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                {formatDuration(video.duration)}
                              </span>
                            )}
                          </div>
                        )}
                        
                        <div className="mt-2 text-xs text-gray-500">
                          {video.duration > 0 && (
                            <span>Duration: {formatDuration(video.duration)}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseSectionList; 