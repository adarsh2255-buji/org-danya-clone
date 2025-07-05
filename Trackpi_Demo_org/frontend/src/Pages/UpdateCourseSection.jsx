import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const emptyVideo = { file: null, title: '', description: '', url: '' };

const UpdateCourseSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const fileInputRefs = useRef([]);

  // Fetch course section data
  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      try {
        const res = await axios.get(`/api/get-course-section-by-id/${id}`);
        const data = res.data;
        setCourseTitle(data.courseTitle || '');
        setCourseDescription(data.courseDescription || '');
        setCourseDuration(data.courseDuration || '');
        setVideos(
          (data.videos || []).map(v => ({
            file: null, // for new uploads
            title: v.title || '',
            description: v.description || '',
            url: v.url || '',
            cloudinaryId: v.cloudinaryId || '',
            _id: v._id || undefined,
          }))
        );
        fileInputRefs.current = (data.videos || []).map(() => React.createRef());
      } catch (err) {
        alert('Failed to fetch course section');
      } finally {
        setFetching(false);
      }
    };
    fetchData();
  }, [id]);

  // Add a new video block
  const handleAddVideo = () => {
    setVideos([...videos, { ...emptyVideo }]);
    fileInputRefs.current.push(React.createRef());
  };

  // Remove a video block
  const handleRemoveVideo = (index) => {
    setVideos(videos.filter((_, i) => i !== index));
    fileInputRefs.current.splice(index, 1);
  };

  // Update video metadata or file
  const handleVideoChange = (index, field, value) => {
    const updatedVideos = [...videos];
    updatedVideos[index][field] = value;
    setVideos(updatedVideos);
  };

  // Handle file input
  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    handleVideoChange(index, 'file', file);
    // Optionally clear the old url if a new file is selected
    handleVideoChange(index, 'url', '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('courseTitle', courseTitle);
      formData.append('courseDescription', courseDescription);
      formData.append('courseDuration', courseDuration);
      // Prepare metadata for all videos
      const videoMeta = videos.map(({ title, description, url, cloudinaryId, _id }) => ({ title, description, url, cloudinaryId, _id }));
      formData.append('videos', JSON.stringify(videoMeta));
      // Append all new video files
      videos.forEach((video) => {
        if (video.file) formData.append('videos', video.file);
      });
      await axios.put(`/api/update-course-section/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Course section updated successfully!');
      navigate('/courseSectionList');
    } catch (error) {
      console.error('Error updating course section:', error);
      alert('Error updating course section. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <div className="text-center p-8 text-lg">Loading course section...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Update Course Section</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
            <input
              type="text"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter course title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Duration (minutes)</label>
            <input
              type="number"
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter duration in minutes"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Course Description</label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter course description"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-800 mb-2">Videos</label>
          <div className="space-y-6">
            {videos.map((video, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-gray-50 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Video File</label>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => handleFileChange(idx, e)}
                      ref={fileInputRefs.current[idx]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {video.url && !video.file && (
                      <video src={video.url} controls className="w-full h-32 mt-2 rounded" />
                    )}
                    {video.file && (
                      <p className="text-xs text-gray-500 mt-1">{video.file.name} ({(video.file.size / (1024 * 1024)).toFixed(2)} MB)</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={video.title}
                      onChange={(e) => handleVideoChange(idx, 'title', e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter video title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={video.description}
                      onChange={(e) => handleVideoChange(idx, 'description', e.target.value)}
                      required
                      rows="2"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter video description"
                    />
                  </div>
                </div>
                {videos.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveVideo(idx)}
                    className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-sm font-bold"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddVideo}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-semibold"
            >
              + Add Video
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Updating...' : 'Update Course Section'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCourseSection; 